import Image from "next/image";
import VisitorCounter from "@/components/VisitorCounter"

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <section className="mb-8">
        <h1 className="text-4xl font-bold">Ajay Paul</h1>
        <p className="text-lg text-gray-600">
          Cloud • DevOps • Automation Engineer
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>
          Senior DevOps and Cloud Engineer with experience designing,
          automating, and operating secure, scalable platforms across
          enterprise and cloud environments.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Senior DevOps Engineer – Cenitex</strong><br />
            Automation, cloud platforms, CI/CD, Ansible, AWS
          </li>
          <li>
            <strong>DevOps Engineer – Cenitex</strong><br />
            Infrastructure automation, platform operations
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p>
          AWS, Azure, Terraform, Ansible, CI/CD, Linux, Automation,
          Cloud Architecture
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <p className="text-gray-500">
          Portfolio: <span id="counter">Loading...</span>
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Visitor Counter</h2>
        <p className="text-gray-500">
          Visitors: <span id="counter">Loading...</span>
        </p>
      </section>

      <section className="mt-10">
        <VisitorCounter />
      </section>
      <footer className="mt-12 text-sm text-gray-500 flex items-center gap-2">
        <span>Deployment status:</span>
        <img
          src="https://github.com/ajaypaulfrancis/cloud_portfolio/actions/workflows/deploy-frontend.yml/badge.svg"
          alt="GitHub Actions Deploy Status"
        />
      </footer>
      ``
    </main>

  );
}