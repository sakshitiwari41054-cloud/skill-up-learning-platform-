import { ABOUT_IMAGE, LEARNER_STORIES } from '../data/skillupData';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Editorial visual */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <ResilientImage
              src={ABOUT_IMAGE}
              alt="Accessible online workspace connecting global students with engineering mentors"
              title="Accessible Global Education"
              containerClassName="w-full rounded-2xl border border-slate-200 aspect-[4/3] lg:aspect-auto lg:flex-1"
              className="w-full h-full object-cover"
            />
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              <span>Founded 2023</span>
              <span aria-hidden="true">·</span>
              <span>34+ Countries Reached</span>
              <span aria-hidden="true">·</span>
              <span>Need-Based Scholarships Available</span>
            </div>
          </div>

          {/* Purpose, Mission & Vision */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-semibold text-blue-700 mb-3">About SkillUp</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance mb-6">
              High-craft technical education without the prohibitive tuition barrier.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Too many talented learners are locked out of modern software careers by five-figure
              bootcamps or left stranded in passive video playlists. SkillUp was built to bridge that
              gap—combining clear, structured curricula with live code reviews and career preparation
              at a fraction of conventional tuition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2.5">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Deliver affordable, accessible, and deeply practical technical education so any
                  motivated learner—regardless of geography or financial background—can build
                  verifiable engineering skills and step into meaningful work.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2.5">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  A global workforce where career mobility is determined by capability and curiosity
                  rather than zip code or debt—where today’s learners become tomorrow’s technical
                  leaders and mentors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adjacent Alumni Proof */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold text-blue-700 mb-1">Learner Outcomes</p>
              <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                Real transitions from our recent cohorts
              </h3>
            </div>
            <p className="text-sm text-slate-500">
              Verified graduates working across product and data teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEARNER_STORIES.map((story) => (
              <figure
                key={story.name}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6"
              >
                <blockquote className="text-base text-slate-700 leading-relaxed">
                  “{story.quote}”
                </blockquote>
                <figcaption className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{story.name}</div>
                    <div className="text-xs text-slate-500">
                      {story.role} · {story.organization}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-blue-700">{story.track}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
