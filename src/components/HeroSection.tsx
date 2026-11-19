import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE, OUTCOME_METRICS } from '../data/skillupData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onGetStarted: () => void;
  onExploreCourses: () => void;
}

export function HeroSection({ onGetStarted, onExploreCourses }: HeroSectionProps) {
  return (
    <section id="home" className="bg-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column equal-height hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            <p className="text-sm font-semibold text-blue-700 tracking-wide mb-4">
              SkillUp · Learn Today, Lead Tomorrow
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.08] text-balance mb-6">
              Build Skills. Build Your Future.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Practical, mentor-guided online courses in software engineering, web development, and
              data science. Designed to keep technical education affordable, structured, and directly
              connected to real career outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onGetStarted}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.99] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-900 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100/80 active:scale-[0.99] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                Explore Courses
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-500">
              <span>Live Weekly Mentorship</span>
              <span aria-hidden="true">·</span>
              <span>Portfolio-Ready Projects</span>
              <span aria-hidden="true">·</span>
              <span>Transparent Tuition from $49</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <ResilientImage
              src={HERO_IMAGE}
              alt="Diverse learners and mentors collaborating on code projects in a bright contemporary studio"
              title="SkillUp Collaborative Learning Studio"
              containerClassName="w-full rounded-2xl border border-slate-200 shadow-sm min-h-[280px] sm:min-h-[360px] lg:h-full"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Full-width 4-column outcome strip directly below hero split */}
        <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {OUTCOME_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="font-mono text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-800">{metric.label}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{metric.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
