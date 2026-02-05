export default function Education() {
  return (
    <section id="education" className="bg-gray-950 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Education</h2>

        <div className="mt-8 space-y-4">
          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="font-semibold">M.S. Computer Science — University of Wisconsin–Milwaukee</h3>
              <p className="text-sm text-gray-400">Sep 2023 – May 2025 • GPA 3.7/4.0</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-gray-900 p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="font-semibold">B.Tech. Electronics & Communication — Cochin University of Science & Technology</h3>
              <p className="text-sm text-gray-400">Aug 2014 – Aug 2018 • GPA 7.2/10.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
