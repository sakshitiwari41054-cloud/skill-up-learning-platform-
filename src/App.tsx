/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CoursesSection } from './components/CoursesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { type CourseCategory, type CourseItem } from './data/skillupData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [modalTab, setModalTab] = useState<'syllabus' | 'enroll' | 'advisor'>('advisor');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAdvisor = () => {
    setSelectedCourse(null);
    setModalTab('advisor');
    setModalOpen(true);
  };

  const handleSelectCourse = (course: CourseItem, tab: 'syllabus' | 'enroll' = 'syllabus') => {
    setSelectedCourse(course);
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleServiceCategorySelect = (category: CourseCategory) => {
    setActiveCategory(category);
    scrollToSection('courses');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onGetStarted={handleOpenAdvisor} />

      <main className="flex-1">
        <HeroSection
          onGetStarted={handleOpenAdvisor}
          onExploreCourses={() => scrollToSection('courses')}
        />

        <AboutSection />

        <ServicesSection onSelectServiceCategory={handleServiceCategorySelect} />

        <CoursesSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectCourse={handleSelectCourse}
        />

        <ContactSection />
      </main>

      <Footer />

      <CourseModal
        isOpen={modalOpen}
        course={selectedCourse}
        initialTab={modalTab}
        onClose={() => setModalOpen(false)}
        onSelectCourse={handleSelectCourse}
      />
    </div>
  );
}
