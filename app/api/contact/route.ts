import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const allowedProjectTypes = new Set(["Data Collection", "Data Annotation", "Image / Video", "Audio / Speech", "LLM Evaluation", "Human Feedback", "Other"]);
const allowedDataTypes = new Set(["Text", "Image", "Video", "Audio", "Speech", "Multilingual", "Mixed", "Other"]);

const recentRequests = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

function clean(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for") || "";
  const ip = forwarded.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const previous = recentRequests.get(ip);
  if (previous && now - previous < RATE_LIMIT_MS) {
    return NextResponse.json({ message: "Please wait a minute before submitting another inquiry." }, { status: 429 });
  }

  if ((request.headers.get("content-type") || "").split(";")[0] !== "application/json") {
    return NextResponse.json({ message: "Invalid request format." }, { status: 415 });
  }
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ message: "The request is too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: quietly accept bot submissions without sending email.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 100);
  const company = clean(body.company, 150);
  const email = clean(body.email, 254).toLowerCase();
  const projectType = clean(body.projectType, 80);
  const dataType = clean(body.dataType, 80);
  const volume = clean(body.volume, 100);
  const languages = clean(body.languages, 200);
  const timeline = clean(body.timeline, 100);
  const description = clean(body.description, 5000);

  if (name.length < 2 || company.length < 2 || !emailPattern.test(email) || !allowedProjectTypes.has(projectType) || !allowedDataTypes.has(dataType) || description.length < 20) {
    return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "densee.ai@gmail.com";
  if (!resendKey || !process.env.CONTACT_FROM_EMAIL) {
    return NextResponse.json({ message: "The website email service is not configured yet. Please use the direct email option below." }, { status: 503 });
  }

  recentRequests.set(ip, now);
  if (recentRequests.size > 5000) {
    for (const [key, timestamp] of recentRequests) if (now - timestamp > RATE_LIMIT_MS) recentRequests.delete(key);
  }

  const safeCompany = company.replace(/[\r\n]+/g, " ").slice(0, 150);
  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [to],
      reply_to: email,
      subject: `New Dense AI project inquiry — ${safeCompany}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Work email: ${email}`,
        `Project type: ${projectType}`,
        `Data type: ${dataType}`,
        `Estimated volume: ${volume || "Not provided"}`,
        `Languages: ${languages || "Not provided"}`,
        `Timeline: ${timeline || "Not provided"}`,
        "",
        "Description:",
        description,
      ].join("\n"),
    }),
  });

  if (!emailResponse.ok) {
    return NextResponse.json({ message: "The email service could not accept the inquiry. Please use the direct email option below." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
