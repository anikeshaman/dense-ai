import Image from "next/image";

export function FounderCard({
  name,
  role,
  focus,
  image,
}: {
  name: string;
  role: string;
  focus: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_1px_2px_rgba(16,24,45,0.04)] dark:border-white/10 dark:bg-ink">
      <div className="relative aspect-[4/5] w-full bg-soft dark:bg-navy">
        <Image src={image} alt={`Photo of ${name}`} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 90vw" />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-ink dark:text-white">{name}</h3>
        <p className="mt-1 text-sm font-medium text-blue">{role}</p>
        <p className="mt-1 text-sm text-muted dark:text-white/60">{focus}</p>
      </div>
    </div>
  );
}
