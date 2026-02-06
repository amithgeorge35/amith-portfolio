const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
    {children}
  </span>
);

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-950 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-200">Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Java</Chip><Chip>Python</Chip><Chip>SQL</Chip><Chip>Node.js</Chip><Chip>JavaScript</Chip><Chip>HTML</Chip><Chip>CSS</Chip><Chip>C++</Chip><Chip>Typescript</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200">Frameworks</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Spring Boot</Chip><Chip>Django</Chip><Chip>Flask</Chip><Chip>FastAPI</Chip><Chip>React</Chip><Chip>Angular</Chip><Chip>Junit</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200">Cloud & Infrastructure</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>AWS (S3, EC2, ECS, Lambda, CloudWatch, SNS, CloudFront)</Chip><Chip>Azure</Chip><Chip>Docker</Chip><Chip>Github</Chip><Chip>CI/CD</Chip><Chip>Kubernetes</Chip><Chip>Jenkins</Chip><Chip>Kafka</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200">Databases</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Oracle</Chip><Chip>Snowflake</Chip><Chip>Hibernate</Chip><Chip>MySQL</Chip><Chip>SQL Server</Chip><Chip>MongoDB</Chip><Chip>PostgreSQL</Chip><Chip>Aurora</Chip><Chip>Terradata</Chip>
          </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200">Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Git</Chip><Chip>Hibernate</Chip><Chip>JIRA</Chip><Chip>Informatica</Chip><Chip>PyTorch</Chip><Chip>Postman</Chip><Chip>Cursor</Chip><Chip>Linux</Chip><Chip>PowerBI</Chip><Chip>Microstrategy</Chip><Chip>SOAP UI</Chip><Chip>Guidewire</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200">Software Engineering Foundations</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Microservices</Chip><Chip>RESTful API</Chip><Chip>GraphQL</Chip><Chip>Agile & Waterfall Methodology</Chip><Chip>Data Structures & Algorithms</Chip><Chip>ETL</Chip><Chip>Unit testing</Chip>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200">AI/ML</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>LLMs</Chip><Chip>RAG</Chip><Chip>Multi-Agent Systems</Chip><Chip>LangGraph</Chip><Chip>NLP</Chip><Chip>Prompt Engineering</Chip><Chip>Transformer Models</Chip><Chip>Vector Databases</Chip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
