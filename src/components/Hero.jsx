export default function Hero() {
  return (
    <section id="top" className="bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
        <p className="text-sm text-gray-400">Software Engineer • Full Stack • Cloud • Distributed Systems • AI</p>

        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Hi, I’m Amith George.
        </h1>

       <p className="mt-5 max-w-3xl text-gray-300 leading-relaxed">
  I am a Full-Stack Software Engineer with over 4 years of experience building
  end-to-end applications using React on the frontend and scalable backend
  services with Java, Spring Boot, Python, and SQL. I have worked extensively
  with cloud-native architectures on AWS, designing REST APIs, event-driven
  systems using Kafka, and CI/CD pipelines for reliable, production deployments.

  <br /><br />

  More recently, I have been focused on integrating AI into full-stack systems
  by building LLM-powered applications such as Retrieval-Augmented Generation
  (RAG) pipelines and multi-agent workflows. I enjoy working at the intersection
  of full-stack engineering and applied AI, delivering intelligent, user-facing
  solutions that solve real-world problems at scale.
</p>



        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            View Resume
          </a>


          <a
            href="https://github.com/amithgeorge35"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amith-george-2410321a2/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
