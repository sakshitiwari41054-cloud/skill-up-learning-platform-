import { ArrowRight, Clock, Layers } from 'lucide-react';
import {
  COURSES,
  type CourseCategory,
  type CourseItem,
} from '../data/skillupData';
import { ResilientImage } from './ResilientImage';

interface CoursesSectionProps {
  activeCategory: CourseCategory;
  onCategoryChange: (category: CourseCategory) => void;
  onSelectCourse: (course: CourseItem, initialTab?: 'syllabus' | 'enroll') => void;
}

const CATEGORIES: CourseCategory[] = [
  'All',
  'Programming',
  'Web & Full Stack',
  'Data & AI',
];

export function CoursesSection({
  activeCategory,
  onCategoryChange,
  onSelectCourse,
}: CoursesSectionProps) {
  const filteredCourses =
    activeCategory === 'All'
      ? COURSES
      : COURSES.filter((course) => course.category === activeCategory);

  return (
    <section id="courses" className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-700 mb-3">Popular Courses</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              Industry-aligned cohorts built around real software projects.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter courses by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category === 'All' ? 'All Tracks' : category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 shadow-xs hover:shadow-md"
            >
              <div>
                <div className="aspect-[16/10] w-full border-b border-slate-200 overflow-hidden">
                  <ResilientImage
                    src={course.image}
                    alt={`${course.title} illustration`}
                    title={course.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  {/* Quiet unboxed metadata line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                    <span className="text-blue-700 font-semibold">{course.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.level}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{course.rating} / 5.0</span>
                  </div>

                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                      {course.title}
                    </h3>
                    <span className="font-mono text-xl font-semibold text-slate-900 tabular-nums shrink-0">
                      {course.price}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {course.shortDescription}
                  </p>

                  {/* Tech stack inline text without pill clutter */}
                  <div className="text-xs text-slate-500 mb-6">
                    <span className="font-semibold text-slate-700">Tools covered: </span>
                    <span>{course.tools.join(' · ')}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 pt-5 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      <span className="tabular-nums">{course.duration}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      <span className="tabular-nums">{course.projectsCount} Capstone Projects</span>
                    </span>
                    <span className="font-mono text-slate-500 tabular-nums">
                      Next cohort: {course.nextCohort}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectCourse(course, 'enroll')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectCourse(course, 'syllabus')}
                  className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                >
                  View Syllabus
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
