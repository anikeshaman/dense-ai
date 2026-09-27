export const site = {
  name: "Dense AI",
  tagline: "Human Data Infrastructure for AI.",
  email: "densee.ai@gmail.com",
  contributorWhatsApp: "https://chat.whatsapp.com/EU45uJmAx7lDuQkrGP3pjq",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Workforce", href: "/workforce" },
  { label: "Quality", href: "/quality" },
  { label: "Founders", href: "/about#founders" },
  { label: "FAQ", href: "/#faq" },
];

export const capabilities = [
  "Scalable workforce",
  "Data quality",
  "Multilingual",
  "Human review",
  "Project management",
  "AI-ready data",
];

export const infraSteps = [
  { number: "01", title: "Client requirements", description: "Understand the data, task and quality requirements for the project." },
  { number: "02", title: "Workflow design", description: "Design instructions, tooling and review stages around the task." },
  { number: "03", title: "Contributor network", description: "Qualify and onboard contributors suited to the project." },
  { number: "04", title: "Quality control", description: "Review, correct and validate output against project standards." },
  { number: "05", title: "Validated dataset", description: "Deliver a dataset that has passed the agreed quality checks." },
];

export const services = [
  { number: "01", title: "Data Collection", description: "Structured real-world data across people, languages, environments and use cases." },
  { number: "02", title: "Data Annotation", description: "Human labeling for training datasets, classification, segmentation and structured outputs." },
  { number: "03", title: "Image & Video", description: "Computer-vision annotation across images, frames, objects, keypoints and sequences." },
  { number: "04", title: "Audio & Speech", description: "Speech collection, transcription, classification and audio labeling workflows." },
  { number: "05", title: "Multilingual Data", description: "Language data collection and processing across supported languages and regions." },
  { number: "06", title: "LLM Evaluation", description: "Human evaluation of AI responses, instruction following, relevance and quality." },
  { number: "07", title: "Human Feedback", description: "Ranking, preference and structured feedback workflows for improving AI systems." },
  { number: "08", title: "Quality & Validation", description: "Human and automated checks to identify errors and maintain project standards." },
];

export const workforcePillars = [
  { title: "Verified", description: "Contributors are screened and qualified for appropriate projects." },
  { title: "Trained", description: "Project-specific instructions and examples are provided before work begins." },
  { title: "Managed", description: "Project managers monitor progress, quality and delivery." },
];

export const qualitySteps = [
  { number: "01", title: "Clear instructions" },
  { number: "02", title: "Qualification" },
  { number: "03", title: "Task execution" },
  { number: "04", title: "Human review" },
  { number: "05", title: "Final check" },
];

export const qualityCards = [
  { title: "Multiple Review Layers", description: "Work can pass through more than one review stage before delivery." },
  { title: "Project-Specific QA", description: "Quality checks are shaped around the requirements of each project." },
  { title: "Responsible Operations", description: "Workflows are run with clear accountability at every stage." },
];

export const securityCards = [
  { title: "Controlled Access", description: "Access to project data can be limited to approved contributors and staff." },
  { title: "Role-Based Workflows", description: "Tasks and permissions can be split by role across the workflow." },
  { title: "Quality Audits", description: "Output can be periodically audited against project standards." },
  { title: "Secure Delivery", description: "Datasets can be delivered through agreed, project-specific channels." },
  { title: "Project-Specific Handling", description: "Handling requirements can be incorporated into the workflow design." },
  { title: "Access Monitoring", description: "Activity within a project's workflow can be monitored and logged." },
];

export const pilotSteps = [
  { number: "01", title: "Define", description: "Understand the task, data and quality requirements." },
  { number: "02", title: "Pilot", description: "Run a controlled initial workflow." },
  { number: "03", title: "Validate", description: "Review quality, instructions and operational requirements." },
  { number: "04", title: "Scale", description: "Expand the workforce and workflow once requirements are validated." },
];

export const whyPillars = [
  { title: "Human-Centered", description: "Human judgment for tasks where quality and context matter." },
  { title: "Operationally Managed", description: "Structured workflows, project management and quality control." },
  { title: "Flexible", description: "Workflows can be designed around project-specific requirements." },
  { title: "Quality-Focused", description: "Validation and review are incorporated throughout the process." },
];

export const founders = [
  { name: "Anikesh Aman", role: "Co-Founder & CTO", focus: "Technology, data & product", image: "/founders/anikesh.jpg" },
  { name: "Arpita", role: "Co-Founder & COO", focus: "Operations & workforce", image: "/founders/arpita.jpg" },
  { name: "Disha", role: "Co-Founder & CEO", focus: "Business, sales & strategy", image: "/founders/disha.jpg" },
];

export const faqs = [
  {
    question: "What kinds of AI data projects can Dense AI support?",
    answer: "Data collection, annotation, image and video workflows, audio and speech, multilingual data, LLM evaluation, human feedback and quality validation.",
  },
  {
    question: "How do you qualify contributors?",
    answer: "Requirements can be defined around skills, languages, experience and project-specific qualification or training.",
  },
  {
    question: "How is quality managed?",
    answer: "Quality can be built into instructions, qualification, task execution, validation, human review, secondary QA, correction and final checks.",
  },
  {
    question: "Can we start with a pilot?",
    answer: "Yes. A pilot-to-scale workflow can validate instructions, workforce requirements and quality controls before larger production.",
  },
  {
    question: "What types of data can you work with?",
    answer: "Examples include text, images, video, audio, speech and multilingual data, depending on project requirements.",
  },
  {
    question: "How do I start a project?",
    answer: "Contact Dense AI with your data type, approximate volume, languages, timeline and quality requirements.",
  },
];

export const projectTypeOptions = [
  "Data Collection",
  "Data Annotation",
  "Image / Video",
  "Audio / Speech",
  "LLM Evaluation",
  "Human Feedback",
  "Other",
];

export const dataTypeOptions = [
  "Text",
  "Image",
  "Video",
  "Audio",
  "Speech",
  "Multilingual",
  "Mixed",
  "Other",
];


export const serviceDetails = [
  { slug: "data-collection", title: "Data Collection", description: "Structured real-world data collection designed around project-specific requirements.", details: ["Define collection criteria, instructions and qualification requirements.", "Coordinate contributors and project operations around the target data.", "Apply review and validation steps before delivery."] },
  { slug: "data-annotation", title: "Data Annotation", description: "Human labeling for classification, segmentation, structured outputs and model-training datasets.", details: ["Create task instructions and examples around the annotation schema.", "Qualify contributors for the task and monitor output quality.", "Review, correct and validate annotated data against agreed standards."] },
  { slug: "image-video", title: "Image & Video", description: "Computer-vision annotation across images, frames, objects, keypoints and sequences.", details: ["Support object and image-level labeling workflows.", "Design frame and sequence workflows for video projects.", "Build project-specific review and validation into delivery."] },
  { slug: "audio-speech", title: "Audio & Speech", description: "Speech collection, transcription, classification and audio labeling workflows.", details: ["Recruit and qualify contributors around required languages or speech characteristics.", "Run transcription, classification or collection tasks with clear instructions.", "Review outputs for completeness and project-specific quality requirements."] },
  { slug: "multilingual", title: "Multilingual Data", description: "Language data workflows across supported languages and regions, shaped to project requirements.", details: ["Define language, locale and contributor requirements.", "Coordinate collection or evaluation tasks by language and region.", "Apply language-aware review and validation before delivery."] },
  { slug: "llm-evaluation", title: "LLM Evaluation", description: "Human evaluation of AI responses for relevance, instruction following and quality.", details: ["Translate evaluation criteria into clear human-review tasks.", "Qualify reviewers and provide project-specific examples.", "Use structured review and validation to identify recurring quality issues."] },
  { slug: "human-feedback", title: "Human Feedback", description: "Ranking, preference and structured feedback workflows for improving AI systems.", details: ["Design preference or ranking tasks around defined evaluation criteria.", "Qualify and train contributors before production work.", "Review feedback quality and resolve disagreements through defined checks."] },
  { slug: "quality-validation", title: "Quality & Validation", description: "Human and operational checks designed to identify errors and maintain project standards.", details: ["Define measurable project-specific acceptance criteria.", "Use qualification, review, correction and final checks across the workflow.", "Document quality requirements and delivery expectations with the project team."] },
];

export const solutionTypes = [
  { title: "Training Data", description: "Collection and annotation workflows for datasets used in model development." },
  { title: "Evaluation Data", description: "Human evaluation and feedback workflows for testing AI systems." },
  { title: "Multimodal Data", description: "Human workflows across text, image, video, audio and speech." },
  { title: "Language Data", description: "Project-specific multilingual collection, review and evaluation workflows." },
];
