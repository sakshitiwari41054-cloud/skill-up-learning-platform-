export type CourseCategory = 'All' | 'Programming' | 'Web & Full Stack' | 'Data & AI';

export interface OutcomeMetric {
  value: string;
  label: string;
  context: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  format: string;
  targetCategory: CourseCategory;
}

export interface SyllabusModule {
  week: string;
  title: string;
  topics: string;
}

export interface CourseItem {
  id: string;
  title: string;
  category: Exclude<CourseCategory, 'All'>;
  level: string;
  duration: string;
  projectsCount: number;
  price: string;
  nextCohort: string;
  rating: string;
  enrolledCount: string;
  instructor: string;
  instructorRole: string;
  image: string;
  shortDescription: string;
  outcomes: string[];
  tools: string[];
  syllabus: SyllabusModule[];
}

export interface LearnerStory {
  name: string;
  role: string;
  organization: string;
  track: string;
  quote: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_edtech_learning_1795043626067.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_accessible_education_1795043627361.jpg';

export const OUTCOME_METRICS: OutcomeMetric[] = [
  {
    value: '18,400+',
    label: 'Active Learners',
    context: 'Across 34 countries in 2026',
  },
  {
    value: '92%',
    label: 'Course Completion',
    context: 'Cohort-supported graduation rate',
  },
  {
    value: '480+',
    label: 'Hiring Partners',
    context: 'Startups and engineering teams',
  },
  {
    value: '68%',
    label: 'Tuition Reduction',
    context: 'Compared to traditional bootcamps',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Online Programming Courses',
    summary:
      'Structured, interactive coding tracks built around real engineering problems rather than passive video lectures.',
    deliverables: [
      'Weekly live code reviews with senior engineers',
      'Graded GitHub repositories and unit-test suites',
      'Lifetime access to updated lecture recordings',
    ],
    format: 'Self-Paced + Live Doubt Clinics',
    targetCategory: 'Programming',
  },
  {
    number: '02',
    title: 'Web Development Training',
    summary:
      'End-to-end product engineering covering accessible UI architecture, TypeScript, REST APIs, and cloud deployment.',
    deliverables: [
      'Production-grade frontend and backend capstone apps',
      'Database modeling, authentication, and CI/CD pipelines',
      'Peer code-review sprints simulating real product teams',
    ],
    format: '14-Week Applied Studio',
    targetCategory: 'Web & Full Stack',
  },
  {
    number: '03',
    title: 'Career Guidance',
    summary:
      'Personalized roadmaps connecting your current background to software engineering, data, or product roles.',
    deliverables: [
      '1-on-1 career milestone planning and skill gap audit',
      'GitHub, LinkedIn, and technical portfolio teardown',
      'Salary negotiation playbooks and role matching',
    ],
    format: '1-on-1 Mentor Sessions',
    targetCategory: 'All',
  },
  {
    number: '04',
    title: 'Interview Preparation',
    summary:
      'Focused technical drills covering data structures, algorithmic problem solving, system design, and behavioral rounds.',
    deliverables: [
      'Timed mock coding interviews with detailed scorecards',
      'Whiteboard system architecture walkthroughs',
      'Curated company-specific question banks',
    ],
    format: 'Weekly Mock Panels',
    targetCategory: 'Programming',
  },
  {
    number: '05',
    title: 'Skill Development Programs',
    summary:
      'Practical upskilling cohorts designed for university students, career switchers, and growing engineering teams.',
    deliverables: [
      'Modular weekend workshops and applied hackathons',
      'Verifiable project certificates for employers',
      'Scholarship-backed tracks for underserved learners',
    ],
    format: 'Flexible Cohort Tracks',
    targetCategory: 'Data & AI',
  },
];

export const COURSES: CourseItem[] = [
  {
    id: 'python-programming',
    title: 'Python Programming',
    category: 'Programming',
    level: 'Beginner to Intermediate',
    duration: '8 Weeks',
    projectsCount: 6,
    price: '$49',
    nextCohort: 'Dec 01, 2026',
    rating: '4.9',
    enrolledCount: '5,420 learners',
    instructor: 'Ananya Deshmukh',
    instructorRole: 'Staff Backend Engineer',
    image: '/src/assets/images/course_python_programming_1795043627101.jpg',
    shortDescription:
      'Master clean Python syntax, data structures, file automation, REST API consumption, and automated testing from first principles.',
    outcomes: [
      'Write modular, PEP-8 compliant Python applications and CLI tools',
      'Automate spreadsheets, web scraping, and API workflows safely',
      'Solve foundational algorithmic problems with confidence',
    ],
    tools: ['Python 3.12', 'Pytest', 'FastAPI', 'Git & GitHub', 'SQLite'],
    syllabus: [
      {
        week: 'Weeks 1–2',
        title: 'Core Syntax & Control Flow',
        topics: 'Variables, functions, comprehensions, error handling, and clean modular scripting.',
      },
      {
        week: 'Weeks 3–4',
        title: 'Data Structures & OOP',
        topics: 'Dictionaries, sets, custom classes, dataclasses, and file I/O pipelines.',
      },
      {
        week: 'Weeks 5–6',
        title: 'APIs, Databases & Automation',
        topics: 'Building FastAPI endpoints, SQLite persistence, and automated report scripts.',
      },
      {
        week: 'Weeks 7–8',
        title: 'Testing & Capstone Delivery',
        topics: 'Unit testing with Pytest, packaging, and deploying a portfolio CLI + API tool.',
      },
    ],
  },
  {
    id: 'java-development',
    title: 'Java Development',
    category: 'Programming',
    level: 'Intermediate',
    duration: '10 Weeks',
    projectsCount: 5,
    price: '$59',
    nextCohort: 'Dec 08, 2026',
    rating: '4.8',
    enrolledCount: '3,890 learners',
    instructor: 'Marcus Vance',
    instructorRole: 'Principal Systems Architect',
    image: '/src/assets/images/course_java_development_1795043631608.jpg',
    shortDescription:
      'Build resilient backend services with modern Java 21, object-oriented design patterns, Spring Boot, and PostgreSQL.',
    outcomes: [
      'Architect clean object-oriented services using SOLID principles',
      'Build secure RESTful microservices with Spring Boot & JPA',
      'Handle concurrency, collections, and production observability',
    ],
    tools: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Maven', 'Docker'],
    syllabus: [
      {
        week: 'Weeks 1–2',
        title: 'Modern Java & OOP Mastery',
        topics: 'Interfaces, generics, records, Streams API, and functional patterns.',
      },
      {
        week: 'Weeks 3–5',
        title: 'Collections, Threads & Algorithms',
        topics: 'JVM memory fundamentals, multithreading, and backend data structures.',
      },
      {
        week: 'Weeks 6–8',
        title: 'Spring Boot & Data Persistence',
        topics: 'Dependency injection, Spring Data JPA, migrations, and JWT authentication.',
      },
      {
        week: 'Weeks 9–10',
        title: 'Microservice Capstone',
        topics: 'Dockerizing an order-management API with integration tests and OpenAPI docs.',
      },
    ],
  },
  {
    id: 'fullstack-web-development',
    title: 'Full Stack Web Development',
    category: 'Web & Full Stack',
    level: 'Beginner to Job-Ready',
    duration: '14 Weeks',
    projectsCount: 8,
    price: '$79',
    nextCohort: 'Dec 01, 2026',
    rating: '4.9',
    enrolledCount: '6,150 learners',
    instructor: 'Elena Rostova',
    instructorRole: 'Lead Product Engineer',
    image: '/src/assets/images/course_fullstack_web_1795043627776.jpg',
    shortDescription:
      'Go from semantic HTML and CSS architecture to production React, TypeScript, Node.js, relational databases, and cloud hosting.',
    outcomes: [
      'Ship responsive, WCAG-accessible React & TypeScript interfaces',
      'Design normalized SQL schemas and high-throughput Node.js APIs',
      'Deploy full-stack web apps with automated testing and CI/CD',
    ],
    tools: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    syllabus: [
      {
        week: 'Weeks 1–3',
        title: 'Modern Web Foundations',
        topics: 'Semantic HTML, responsive CSS Grid/Flexbox, accessibility, and TypeScript basics.',
      },
      {
        week: 'Weeks 4–7',
        title: 'Frontend Engineering with React',
        topics: 'Component architecture, custom hooks, state management, and performance profiling.',
      },
      {
        week: 'Weeks 8–11',
        title: 'Backend APIs & Databases',
        topics: 'Express/Node services, PostgreSQL schema design, session auth, and validation.',
      },
      {
        week: 'Weeks 12–14',
        title: 'Production Deployment Capstone',
        topics: 'End-to-end SaaS application deployed to cloud with monitoring and portfolio demo.',
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    category: 'Data & AI',
    level: 'Intermediate',
    duration: '12 Weeks',
    projectsCount: 6,
    price: '$69',
    nextCohort: 'Dec 15, 2026',
    rating: '4.9',
    enrolledCount: '4,210 learners',
    instructor: 'Dr. Kenji Takahashi',
    instructorRole: 'Senior Machine Learning Scientist',
    image: '/src/assets/images/course_data_science_1795043628823.jpg',
    shortDescription:
      'Turn raw datasets into actionable decisions through applied statistics, SQL, Pandas, exploratory visualization, and scikit-learn.',
    outcomes: [
      'Clean, transform, and query large datasets with Python and SQL',
      'Apply hypothesis testing, regression, and tree-based ML models',
      'Communicate analytical findings clearly to product stakeholders',
    ],
    tools: ['Python', 'Pandas', 'SQL', 'Scikit-Learn', 'Matplotlib'],
    syllabus: [
      {
        week: 'Weeks 1–3',
        title: 'Data Wrangling & SQL Analytics',
        topics: 'Relational joins, window functions, Pandas pipelines, and missing-data strategies.',
      },
      {
        week: 'Weeks 4–6',
        title: 'Probability & Applied Statistics',
        topics: 'Distributions, A/B testing, confidence intervals, and experiment design.',
      },
      {
        week: 'Weeks 7–9',
        title: 'Supervised & Unsupervised ML',
        topics: 'Linear/logistic regression, random forests, gradient boosting, and clustering.',
      },
      {
        week: 'Weeks 10–12',
        title: 'Model Evaluation & Capstone',
        topics: 'Cross-validation, feature importance, and presenting a predictive churn study.',
      },
    ],
  },
];

export const LEARNER_STORIES: LearnerStory[] = [
  {
    name: 'Priya Nair',
    role: 'Software Engineer',
    organization: 'FinLedger Systems',
    track: 'Full Stack Web Development',
    quote:
      'Before SkillUp, I had watched dozens of disconnected tutorials without shipping a single real app. After 14 weeks of weekly code reviews and mock interviews, I built three deployed projects and accepted my first full-time engineering offer.',
  },
  {
    name: 'Daniel Okafor',
    role: 'Junior Data Analyst',
    organization: 'Northstar Logistics',
    track: 'Data Science & Python',
    quote:
      'Traditional bootcamps cost more than I earned in half a year. SkillUp gave me affordable access to structured SQL and Python labs plus mentor feedback that helped me transition from operations into analytics in four months.',
  },
];
