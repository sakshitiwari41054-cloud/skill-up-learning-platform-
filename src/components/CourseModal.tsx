import { useState, useEffect, type FormEvent } from 'react';
import { CheckCircle2, X, ArrowRight, BookOpen } from 'lucide-react';
import { COURSES, type CourseItem } from '../data/skillupData';

interface CourseModalProps {
  isOpen: boolean;
  course: CourseItem | null;
  initialTab: 'syllabus' | 'enroll' | 'advisor';
  onClose: () => void;
  onSelectCourse: (course: CourseItem, tab: 'syllabus' | 'enroll') => void;
}

const GOALS = [
  {
    id: 'backend',
    label: 'Automate workflows & build backend APIs with Python',
    recommendedCourseId: 'python-programming',
  },
  {
    id: 'enterprise',
    label: 'Architect scalable enterprise systems with Java & Spring Boot',
    recommendedCourseId: 'java-development',
  },
  {
    id: 'fullstack',
    label: 'Build complete modern web apps from React UI to PostgreSQL',
    recommendedCourseId: 'fullstack-web-development',
  },
  {
    id: 'data',
    label: 'Analyze datasets and train machine learning models',
    recommendedCourseId: 'data-science',
  },
];

export function CourseModal({
  isOpen,
  course,
  initialTab,
  onClose,
  onSelectCourse,
}: CourseModalProps) {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'enroll' | 'advisor'>(initialTab);
  const [selectedGoal, setSelectedGoal] = useState(GOALS[2].id);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('Beginner');
  const [formError, setFormError] = useState('');
  const [enrolledCourseTitle, setEnrolledCourseTitle] = useState<string | null>(null);

  useEffect(() => {
    setActiveTab(initialTab);
    setEnrolledCourseTitle(null);
    setFormError('');
  }, [initialTab, course, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const recommendedCourse =
    COURSES.find(
      (c) => c.id === GOALS.find((g) => g.id === selectedGoal)?.recommendedCourseId
    ) ?? COURSES[0];

  const handleEnrollSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();

    if (trimmedName.length < 2) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError('');
    setEnrolledCourseTitle(course?.title ?? recommendedCourse.title);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4 z-10">
          <div>
            <p className="text-xs font-semibold text-blue-700">
              {activeTab === 'advisor'
                ? 'SkillUp Learning Path Advisor'
                : `${course?.category ?? 'Course'} · ${course?.duration ?? ''}`}
            </p>
            <h3 id="modal-heading" className="font-display text-xl font-bold text-slate-900">
              {activeTab === 'advisor'
                ? 'Find your ideal learning track'
                : course?.title ?? 'Course Details'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-lg inline-flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Switcher when viewing a specific course */}
        {course && activeTab !== 'advisor' && !enrolledCourseTitle && (
          <div className="px-6 pt-4">
            <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTab('syllabus')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'syllabus'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Curriculum & Outcomes
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('enroll')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'enroll'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Reserve Seat ({course.price})
              </button>
            </div>
          </div>
        )}

        <div className="p-6 space-y-6">
          {/* Enrolled Confirmation State */}
          {enrolledCourseTitle ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="font-display text-2xl font-bold text-slate-900">
                Seat Reserved for {enrolledCourseTitle}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. We
                have sent the pre-cohort preparation kit and onboarding schedule to{' '}
                <span className="font-semibold text-slate-900">{email}</span>.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors cursor-pointer"
                >
                  Back to SkillUp
                </button>
              </div>
            </div>
          ) : activeTab === 'advisor' ? (
            /* Guided Career Path Advisor */
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-3">
                  1. What would you like to build or master next?
                </p>
                <div className="space-y-2.5">
                  {GOALS.map((goal) => {
                    const isSelected = selectedGoal === goal.id;
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => setSelectedGoal(goal.id)}
                        className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-700 text-slate-900'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {goal.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-blue-700">
                    Recommended Cohort Track
                  </span>
                  <span className="font-mono text-sm font-semibold text-slate-900 tabular-nums">
                    {recommendedCourse.price} · {recommendedCourse.duration}
                  </span>
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900">
                  {recommendedCourse.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {recommendedCourse.shortDescription}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectCourse(recommendedCourse, 'enroll')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Enroll in {recommendedCourse.title}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectCourse(recommendedCourse, 'syllabus')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                    <span>Inspect Syllabus</span>
                  </button>
                </div>
              </div>
            </div>
          ) : activeTab === 'syllabus' && course ? (
            /* Course Syllabus View */
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 text-sm">
                <div>
                  <span className="text-slate-500">Lead Instructor: </span>
                  <span className="font-semibold text-slate-900">{course.instructor}</span>
                  <span className="text-slate-500"> ({course.instructorRole})</span>
                </div>
                <div className="font-mono text-xs text-slate-600 tabular-nums">
                  {course.enrolledCount}
                </div>
              </div>

              <div>
                <h4 className="font-display text-base font-bold text-slate-900 mb-3">
                  Key Learning Outcomes
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 text-blue-700 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-base font-bold text-slate-900 mb-3">
                  Week-by-Week Syllabus
                </h4>
                <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl">
                  {course.syllabus.map((mod) => (
                    <div key={mod.week} className="p-4 flex flex-col sm:flex-row gap-2 sm:gap-5">
                      <div className="font-mono text-xs font-medium text-blue-700 w-24 shrink-0 pt-0.5 tabular-nums">
                        {mod.week}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-slate-900 mb-1">
                          {mod.title}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {mod.topics}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="text-xs text-slate-500">
                  Next cohort starts <span className="font-semibold text-slate-800">{course.nextCohort}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('enroll')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Enroll Now ({course.price})</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          ) : (
            /* Enrollment Form View */
            <form onSubmit={handleEnrollSubmit} className="space-y-4" noValidate>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {course?.title ?? recommendedCourse.title}
                  </div>
                  <div className="text-xs text-slate-500">
                    Next cohort: {course?.nextCohort ?? recommendedCourse.nextCohort} · Includes
                    mentor reviews & certificate
                  </div>
                </div>
                <div className="font-mono text-lg font-bold text-slate-900 tabular-nums">
                  {course?.price ?? recommendedCourse.price}
                </div>
              </div>

              {formError && (
                <div
                  role="alert"
                  className="px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl"
                >
                  {formError}
                </div>
              )}

              <div>
                <label
                  htmlFor="enroll-name"
                  className="block text-sm font-medium text-slate-800 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="enroll-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                />
              </div>

              <div>
                <label
                  htmlFor="enroll-email"
                  className="block text-sm font-medium text-slate-800 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="enroll-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                />
              </div>

              <div>
                <label
                  htmlFor="enroll-exp"
                  className="block text-sm font-medium text-slate-800 mb-1.5"
                >
                  Current Experience Level
                </label>
                <select
                  id="enroll-exp"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                >
                  <option value="Beginner">Complete Beginner</option>
                  <option value="Student">University / Self-Taught Learner</option>
                  <option value="Career Switcher">Career Switcher</option>
                  <option value="Working Developer">Working Engineer Upskilling</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors cursor-pointer"
                >
                  Confirm Enrollment Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
