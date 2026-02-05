export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          Amith George
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
          <a className="hover:text-white" href="#skills">Skills</a>
          <a className="hover:text-white" href="#education">Education</a>
          <a className="hover:text-white" href="#experience">Experience</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
