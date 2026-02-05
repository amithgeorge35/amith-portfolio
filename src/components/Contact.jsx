export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Contact</h2>

        <p className="mt-4 text-gray-300">
          I’m currently open to new opportunities. Feel free to reach out.
        </p>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:amiththadathil@gmail.com"
            className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Email Me
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

        {/* Written contact details */}
        <div className="mt-6 text-sm text-gray-400 space-y-1">
          <p>
            <span className="text-gray-300 font-medium">Email:</span>{" "}
            <a
              href="mailto:amiththadathil@gmail.com"
              className="hover:text-white underline underline-offset-2"
            >
              amiththadathil@gmail.com
            </a>
          </p>
          <p>
            <span className="text-gray-300 font-medium">Location:</span>{" "}
            Sunnyvale, CA
          </p>
          <p>
            <span className="text-gray-300 font-medium">Phone:</span>{" "}
            (414) 629-3422
          </p>
        </div>
      </div>
    </section>
  );
}
