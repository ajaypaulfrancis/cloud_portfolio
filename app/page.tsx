import Image from "next/image";
import VisitorCounter from "@/components/VisitorCounter";

const certifications = [
  { name: "AWS Solutions Architect", abbr: "AWS SAA", color: "bg-orange-900/40 text-orange-300 border-orange-700" },
  { name: "Kubernetes Administrator", abbr: "CKA", color: "bg-blue-900/40 text-blue-300 border-blue-700" },
  { name: "Kubernetes App Developer", abbr: "CKAD", color: "bg-blue-900/40 text-blue-300 border-blue-700" },
  { name: "Red Hat Ansible Specialist", abbr: "RHCA", color: "bg-red-900/40 text-red-300 border-red-700" },
  { name: "Terraform Associate", abbr: "Terraform", color: "bg-purple-900/40 text-purple-300 border-purple-700" },
  { name: "DevOps Foundation", abbr: "DOF", color: "bg-green-900/40 text-green-300 border-green-700" },
  { name: "ITIL Certified", abbr: "ITIL", color: "bg-teal-900/40 text-teal-300 border-teal-700" },
  { name: "Cisco CCNA", abbr: "CCNA", color: "bg-cyan-900/40 text-cyan-300 border-cyan-700" },
];

const skillCategories = [
  { name: "Cloud", skills: ["AWS", "Azure"], color: "bg-orange-900/30 text-orange-300" },
  { name: "Containers & Orchestration", skills: ["OpenShift", "Kubernetes", "Docker", "Podman"], color: "bg-red-900/30 text-red-300" },
  { name: "GitOps & CI/CD", skills: ["Argo CD", "Tekton", "GitHub Actions", "Azure DevOps"], color: "bg-blue-900/30 text-blue-300" },
  { name: "Infrastructure as Code", skills: ["Terraform", "CloudFormation", "Bicep", "Packer"], color: "bg-purple-900/30 text-purple-300" },
  { name: "Automation", skills: ["Ansible", "AAP", "vRealize Automation"], color: "bg-green-900/30 text-green-300" },
  { name: "Monitoring", skills: ["Prometheus", "Grafana", "CloudWatch"], color: "bg-yellow-900/30 text-yellow-300" },
  { name: "AI Services", skills: ["Amazon Bedrock", "Azure AI Foundry"], color: "bg-pink-900/30 text-pink-300" },
];

const experience = [
  {
    title: "DevOps Lead",
    company: "Cenitex",
    period: "Jul 2023 – Present",
    highlights: [
      "Led migration of Ansible Automation Platform (AAP) from on-premises to OpenShift on AWS — defined containerised architecture, security model, and operational standards",
      "Technical owner of enterprise automation platforms: AAP, Red Hat OpenShift (AWS), Terraform, Azure DevOps",
      "DevOps consulting lead for enterprise migrations to AWS — cloud operating models, automation strategy, and delivery governance",
      "Subject Matter Expert for Ansible, OpenShift, and Terraform across the organisation",
    ],
  },
  {
    title: "Senior DevOps Engineer",
    company: "Cenitex",
    period: "Jul 2021 – Jul 2023",
    highlights: [
      "Led transformation from quarterly to monthly patching for 2,800 servers — significantly improving security posture",
      "Reduced manual effort and overtime by 25% through Ansible automation integrated with ServiceNow",
      "Developed serverless patching portals in AWS providing real-time visibility into patching activities",
      "Standardised automated infrastructure build patterns improving deployment consistency and speed",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Cenitex",
    period: "Jul 2019 – Jul 2021",
    highlights: [
      "Owned and maintained critical Ansible automation platform — handled upgrades and high-severity incidents",
      "Mentored and enabled engineering teams to adopt Ansible and Terraform",
      "Led automation projects from planning to delivery, collaborating with vendors and specialists",
    ],
  },
  {
    title: "DevOps Analyst",
    company: "Cenitex",
    period: "Jan 2018 – Jul 2019",
    highlights: [
      "Delivered proof of concepts independently — self-directed learning and experimentation",
      "Led automation projects from planning to implementation",
      "Collaborated with cross-functional teams to resolve technical challenges",
    ],
  },
];

const projects = [
  {
    name: "VMware to AWS Cloud Migration",
    description:
      "SME for automation tooling and AWS Landing Zone on a large-scale migration of 500+ workloads from on-premises VMware to AWS using Application Migration Service (MGN). Co-built the AWS Landing Zone with the AWS team and led all Terraform and Ansible automation across the migration pipeline.",
    tags: ["AWS MGN", "AWS Landing Zone", "Terraform", "Ansible", "VMware", "CloudFormation"],
    accent: "border-t-yellow-500",
    link: null,
  },
  {
    name: "AAP Migration to OpenShift on AWS",
    description:
      "Led enterprise migration of Ansible Automation Platform from on-premises to containerised OpenShift on AWS. Defined target architecture, security model, migration approach, and operational standards for scalable, cloud-native automation services.",
    tags: ["OpenShift", "AWS", "AAP", "Ansible", "Terraform", "Containers"],
    accent: "border-t-orange-500",
    link: null,
  },
  {
    name: "Enterprise Patching Automation",
    description:
      "Automated server patching for 2,800 servers — reduced manual effort by 25% and moved from quarterly to monthly patching cycles. Integrated Ansible with ServiceNow and built serverless AWS portals for real-time patching visibility.",
    tags: ["Ansible", "ServiceNow", "AWS Lambda", "Python"],
    accent: "border-t-blue-500",
    link: null,
  },
  {
    name: "Serverless Patching Portal",
    description:
      "Designed and built a serverless portal in AWS providing real-time visibility into patching activities across 2,800 servers. Replaced manual reporting with automated dashboards, improving operational transparency for stakeholders.",
    tags: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudWatch", "Python"],
    accent: "border-t-teal-500",
    link: null,
  },
  {
    name: "AAP Platform Ownership — VicGov",
    description:
      "Long-term ownership of Victoria Government's critical Ansible Automation Platform across multiple years. Rebuilt the platform from scratch with new infrastructure and architecture, performed multiple major version upgrades, resolved high-severity incidents during patching weekends, and integrated AAP with organisational tooling including ServiceNow and Azure DevOps.",
    tags: ["AAP", "Ansible", "RHEL", "ServiceNow", "Azure DevOps", "Platform Engineering"],
    accent: "border-t-cyan-500",
    link: null,
  },
  {
    name: "Automated Infrastructure Build Patterns",
    description:
      "Standardised automated build patterns for Windows and Linux infrastructure using Terraform, Ansible, and Packer. Replaced inconsistent manual builds with repeatable, version-controlled pipelines — improving deployment consistency, reliability, and speed across the organisation.",
    tags: ["Terraform", "Ansible", "Packer", "Windows", "Linux", "RHEL"],
    accent: "border-t-purple-500",
    link: null,
  },
  {
    name: "AI Chatbot — Teams-Triggered Automation",
    description:
      "Built an AI-powered chatbot integrated with Microsoft Teams that allowed engineers to trigger Ansible automations via natural language chat. Used Azure AI Bot Service as the conversational layer, connected to AAP's REST API to launch job templates on demand — reducing ticket-based workflows and enabling self-service operations.",
    tags: ["Azure AI Bot Service", "Microsoft Teams", "AAP", "Ansible", "REST API", "Python"],
    accent: "border-t-pink-500",
    link: null,
  },
  {
    name: "Azure VM Self-Service Power Management",
    description:
      "Designed and developed a customer-facing self-service portal for on-demand VM shutdown and startup in Azure — enabling teams to control their own compute costs without raising tickets. Delivered measurable cost optimisation by eliminating idle VMs outside business hours.",
    tags: ["Azure", "Azure Functions", "Bicep", "PowerShell", "Cost Optimisation", "Self-Service"],
    accent: "border-t-blue-400",
    link: null,
  },
  {
    name: "GitOps Platform on OpenShift",
    description:
      "Built a full GitOps CI/CD platform on OpenShift: AAP 2.5 with Gateway UI, Argo CD with self-healing, S2I builds from GitHub, and Helm chart deployment. Demonstrated self-healing — deleted live deployments, Argo CD recovered in under 10 seconds.",
    tags: ["OpenShift", "AAP 2.5", "Argo CD", "Helm", "S2I", "Kustomize", "GitOps"],
    accent: "border-t-red-500",
    link: null,
  },
  {
    name: "Cloud Resume — ajpaul.cloud",
    description:
      "This portfolio site. Built with Next.js and deployed on AWS via Terraform and GitHub Actions CI/CD pipeline. Visitor counter backed by AWS Lambda and DynamoDB.",
    tags: ["Next.js", "AWS", "Terraform", "GitHub Actions", "Lambda", "DynamoDB"],
    accent: "border-t-green-500",
    link: "https://ajpaul.cloud",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-cyan-400 text-lg">AJ Paul</span>
          <div className="hidden sm:flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          </div>
          <a
            href="mailto:aj@ajpaul.cloud"
            className="text-sm bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-4 py-1.5 rounded-full transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <Image
            src="/profile_pic_linked_in.jpeg"
            alt="Ajay Paul"
            width={140}
            height={140}
            className="rounded-full border-2 border-cyan-700 shrink-0"
          />
        <div className="flex flex-col gap-4">
<h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            Ajay <span className="text-cyan-400">Paul</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light">
            DevOps Lead · Cloud · Ansible · Automation
          </p>
          <p className="text-gray-500 max-w-2xl mt-2">
            9+ years delivering enterprise automation and cloud platforms across AWS, Azure, and OpenShift.
            Subject Matter Expert in Ansible, Terraform, and Red Hat OpenShift.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://linkedin.com/in/ajpaul18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 border border-gray-700 hover:border-cyan-700 px-4 py-2 rounded-lg transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/ajaypaulfrancis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 border border-gray-700 hover:border-cyan-700 px-4 py-2 rounded-lg transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:aj@ajpaul.cloud"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 border border-gray-700 hover:border-cyan-700 px-4 py-2 rounded-lg transition-colors"
            >
              aj@ajpaul.cloud
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-800">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">About</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          Results-driven DevOps Lead with over 9 years of experience across cloud platforms (AWS, Azure)
          and Infrastructure as Code. Led automation initiatives on large-scale, multi-year projects,
          leveraging Ansible, Terraform, CloudFormation, Packer, and vRealize Automation. Proven track
          record of delivering high-impact solutions that enhance efficiency, scalability, and operational
          performance. Australian Citizen based in Melbourne, VIC.
        </p>
      </section>

      {/* Certifications */}
      <section id="certifications" className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-800">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">Certifications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.abbr}
              className={`border rounded-lg p-4 text-center ${cert.color}`}
            >
              <p className="font-bold text-sm">{cert.abbr}</p>
              <p className="text-xs mt-1 opacity-75">{cert.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-800">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8">Experience</h2>
        <div className="flex flex-col gap-10">
          {experience.map((job) => (
            <div key={job.title + job.period} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <div className="w-px flex-1 bg-gray-800 mt-2" />
              </div>
              <div className="pb-6 flex-1">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                    <p className="text-cyan-400 text-sm">{job.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 font-mono bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-cyan-600 mt-1 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-800">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8">Skills</h2>
        <div className="flex flex-col gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="flex flex-col sm:flex-row gap-3 sm:items-start">
              <p className="text-xs text-gray-500 font-mono w-52 shrink-0 mt-1">{cat.name}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-800">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`bg-gray-900 border border-gray-800 border-t-2 ${project.accent} rounded-xl p-6 flex flex-col gap-4 hover:border-gray-700 transition-colors`}
            >
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-semibold text-white">{project.name}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm shrink-0"
                  >
                    ↗
                  </a>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left">
            <span>Built with Next.js · AWS · Terraform · GitHub Actions</span>
            <VisitorCounter />
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/ajpaul18" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/ajaypaulfrancis" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="mailto:aj@ajpaul.cloud" className="hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
