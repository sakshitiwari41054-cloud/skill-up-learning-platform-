import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES, type CourseCategory, type ServiceItem } from '../data/skillupData';

interface ServicesSectionProps {
  onSelectServiceCategory: (category: CourseCategory) => void;
}

export function ServicesSection({ onSelectServiceCategory }: ServicesSectionProps) {
  const handleServiceAction = (service: ServiceItem) => {
    onSelectServiceCategory(service.targetCategory);
  };

  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-700 mb-3">Our Services</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              Everything required to go from first syntax to day-one readiness.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Every SkillUp track pairs technical coursework with live mentorship, portfolio review,
            and structured interview coaching.
          </p>
        </div>

        {/* Asymmetric editorial grid for the 5 core services */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {SERVICES.map((service, index) => {
            const isTopRow = index < 2;
            const spanClass = isTopRow ? 'md:col-span-3' : 'md:col-span-2';
            const isHighlighted = index === 1;

            return (
              <article
                key={service.number}
                className={`${spanClass} group rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${
                  isHighlighted
                    ? 'bg-slate-900 text-white border-slate-800 shadow-sm'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span
                      className={`font-mono text-sm font-medium tabular-nums ${
                        isHighlighted ? 'text-amber-400' : 'text-blue-700'
                      }`}
                    >
                      {service.number}.
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isHighlighted ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {service.format}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
                      isHighlighted ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-6 ${
                      isHighlighted ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {service.summary}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            isHighlighted ? 'text-amber-400' : 'text-blue-700'
                          }`}
                          aria-hidden="true"
                        />
                        <span className={isHighlighted ? 'text-slate-200' : 'text-slate-700'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`pt-5 border-t ${
                    isHighlighted ? 'border-slate-800' : 'border-slate-100'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleServiceAction(service)}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 rounded-sm ${
                      isHighlighted
                        ? 'text-white hover:text-amber-300 focus-visible:ring-amber-400'
                        : 'text-blue-700 hover:text-blue-900 focus-visible:ring-blue-700'
                    }`}
                  >
                    <span>Explore matching courses</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
