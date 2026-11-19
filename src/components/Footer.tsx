export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800">
          <div>
            <a href="#home" className="font-display text-xl font-bold text-white tracking-tight">
              SkillUp
            </a>
            <p className="mt-1.5 text-sm text-slate-400">
              Learn Today, Lead Tomorrow · Affordable, mentor-led engineering education.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#courses" className="hover:text-white transition-colors">
              Popular Courses
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 SkillUp Education Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>admissions@skillup.edu</span>
            <span aria-hidden="true">·</span>
            <span>San Francisco & Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
