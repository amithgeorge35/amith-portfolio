export default function Experience() {
  return (
    <section id="experience" className="bg-gray-950 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="font-semibold">Software Engineer — Cognizant Technology Solutions</h3>
              <p className="text-sm text-gray-400">Feb 2019 – Aug 2023</p>
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-gray-300">
              <li>Built thread-safe APIs using Java/Spring Boot; improved normalization time by 40% using Python ETL workflows.</li>
              <li>Integrated REST APIs with Kafka producers/consumers and AWS services (RDS, S3, EC2/Batch, SQS).</li>
              <li>Implemented CI/CD with Jenkins + Docker; improved deployments and reduced MTTR using CloudWatch + alerts.</li>
              <li>Refactored SQL procedures improving query speed and built Angular dashboards for stakeholders.</li>
              <li>Improved code quality with 85%+ JUnit coverage and SonarQube, reducing defects and vulnerabilities.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="font-semibold">Full Stack Developer — Saayam For All</h3>
              <p className="text-sm text-gray-400">Aug 2025 – Present</p>
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-gray-300">
              <li>Built responsive React.js interfaces integrated with Java-based REST APIs for efficient data exchange and real-time state management.</li>
              <li>Architected a multi-agent system using LangGraph and GPT-4o to automate volunteer matching and reduce triage time.</li>
              <li>Built a RAG-driven support interface in React backed by Pinecone to provide context-aware documentation support.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
