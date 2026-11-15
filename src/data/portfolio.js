export const PROFILE = {
  firstName: 'Sahil',
  fullName: 'Sahil Bhankhor',
  initials: 'SB',
  rolePrimary: 'Computer Science Student',
  roleSecondary: 'Web Developer',
  heroSummary:
    'I am a student passionate about programming, web development and learning about new technologies and using them to create reliable real world applications.',
  aboutParagraphs: [
    'I am pursuing B.Tech as a student at Guru Jambheshwar University of Science and Technology, graduating in 2027.',
    'I have a strong interest in web development and programming. I am currently improving my skills and looking for opportunities to gain practical experience through projects and internships.',
  ],
  education: {
    degree: 'B.Tech — Computer Science',
    university: 'Guru Jambheshwar University of Science and Technology',
    shortUni: 'GJUST',
    graduationYear: '2027',
    status: 'Open to Projects & Internships',
  },
  email: 'sahil10052005@gmail.com',
  githubUrl: 'https://www.github.com/SahilBhankhor/',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home', index: '00' },
  { id: 'about', label: 'About', index: '01' },
  { id: 'skills', label: 'Skills', index: '02' },
  { id: 'projects', label: 'Projects', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
];

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'web', label: 'Web & Frameworks' },
  { id: 'databases', label: 'Databases' },
  { id: 'tools', label: 'Tools & 3D' },
];

// All 15 skills sourced directly from skills.html in SahilBhankhor/Portfolio
export const SKILLS = [
  {
    name: 'C#',
    category: 'languages',
    groupLabel: 'Languages',
    note: 'Object-oriented application and .NET development',
  },
  {
    name: 'Python',
    category: 'languages',
    groupLabel: 'Languages',
    note: 'Scripting, CLI tools, game logic & automation',
  },
  {
    name: 'C/C++',
    category: 'languages',
    groupLabel: 'Languages',
    note: 'Core computer science fundamentals & systems logic',
  },
  {
    name: 'Java',
    category: 'languages',
    groupLabel: 'Languages',
    note: 'Strongly typed OOP & data structures',
  },
  {
    name: 'JavaScript',
    category: 'languages',
    groupLabel: 'Languages',
    note: 'Interactive front-end behavior & modern web apps',
  },
  {
    name: 'PHP',
    category: 'languages',
    groupLabel: 'Languages',
    note: 'Server-side web scripting & dynamic back-end logic',
  },
  {
    name: 'HTML/CSS',
    category: 'web',
    groupLabel: 'Web & Frameworks',
    note: 'Semantic markup, responsive grids & interface styling',
  },
  {
    name: 'Tailwind CSS',
    category: 'web',
    groupLabel: 'Web & Frameworks',
    note: 'Utility-first styling & custom design systems',
  },
  {
    name: '.NET Framework',
    category: 'web',
    groupLabel: 'Web & Frameworks',
    note: 'Desktop & web application development ecosystem',
  },
  {
    name: 'SQLite',
    category: 'databases',
    groupLabel: 'Databases',
    note: 'Lightweight embedded relational database storage',
  },
  {
    name: 'MySQL',
    category: 'databases',
    groupLabel: 'Databases',
    note: 'Relational schema design & structured SQL queries',
  },
  {
    name: 'PostgreSQL',
    category: 'databases',
    groupLabel: 'Databases',
    note: 'Advanced open-source relational database systems',
  },
  {
    name: 'Git',
    category: 'tools',
    groupLabel: 'Tools & 3D',
    note: 'Branching, commits & distributed version control',
  },
  {
    name: 'GitHub',
    category: 'tools',
    groupLabel: 'Tools & 3D',
    note: 'Repository hosting, collaboration & Pages deployment',
  },
  {
    name: 'Blender',
    category: 'tools',
    groupLabel: 'Tools & 3D',
    note: '3D modeling, spatial visualization & creative assets',
  },
];

// All 4 projects sourced directly from project.html in SahilBhankhor/Portfolio
export const PROJECTS = [
  {
    id: 'ecommerce-clone',
    index: '01',
    title: 'E-commerce Website Clone',
    category: 'web',
    origin: 'IBM SkillsBuild',
    typeLabel: 'Live Demo',
    description:
      'Front-end e-commerce storefront interface built for the IBM SkillsBuild web project, structured around responsive product browsing and clean layout hierarchy.',
    tags: ['HTML/CSS', 'JavaScript', 'Web UI'],
    url: 'https://sahilbhankhor.github.io/IBM_Skillbuild_proj/',
  },
  {
    id: 'hangman-game',
    index: '02',
    title: "Basic Hangman's Game",
    category: 'python',
    origin: 'CodeAlpha',
    typeLabel: 'GitHub Repo',
    description:
      'Interactive terminal Hangman game developed in Python during CodeAlpha, featuring turn-by-turn state validation, hidden word tracking, and attempt limits.',
    tags: ['Python', 'Game Logic', 'CLI'],
    url: 'https://github.com/SahilBhankhor/codalpha_HangmanGame',
  },
  {
    id: 'login-page',
    index: '03',
    title: 'Basic Login Page',
    category: 'web',
    origin: 'Web Development',
    typeLabel: 'Live Demo',
    description:
      'Focused authentication UI built with semantic HTML and custom CSS, complete with icon-paired credential inputs, remember-me control, and recovery links.',
    tags: ['HTML/CSS', 'Forms', 'UI Design'],
    url: 'https://sahilbhankhor.github.io/learningWebDevelopment/',
  },
  {
    id: 'cli-chatbot',
    index: '04',
    title: 'Basic CLI Chatbot',
    category: 'python',
    origin: 'CodeAlpha',
    typeLabel: 'GitHub Repo',
    description:
      'Command-line conversational chatbot written in Python as part of CodeAlpha, designed to parse user inputs and deliver prompt automated replies.',
    tags: ['Python', 'CLI', 'Automation'],
    url: 'https://github.com/SahilBhankhor/codealpha_ChatBot',
  },
];

// All 6 contact channels sourced directly from contact.html in SahilBhankhor/Portfolio
export const CONTACT_LINKS = [
  {
    id: 'github',
    name: 'GitHub',
    handle: '@SahilBhankhor',
    note: 'Repositories & code',
    url: 'https://www.github.com/SahilBhankhor/',
    accent: '#141619',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Sahil Bhankhor',
    note: 'Internships & network',
    url: 'https://www.linkedin.com/in/sahil-bhankhor-421488346/',
    accent: '#0A66C2',
  },
  {
    id: 'email',
    name: 'Email',
    handle: 'sahil10052005@gmail.com',
    note: 'Direct message',
    url: 'mailto:sahil10052005@gmail.com',
    accent: '#2D523A',
  },
  {
    id: 'discord',
    name: 'Discord',
    handle: 'bhankhorsahil',
    note: 'Dev chat & community',
    url: 'https://www.discord.com/users/bhankhorsahil',
    accent: '#5865F2',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@bhankhorsahil_',
    note: 'Social profile',
    url: 'https://www.instagram.com/bhankhorsahil_',
    accent: '#C13584',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'BhankhorSahil',
    note: 'Connect online',
    url: 'https://www.facebook.com/BhankhorSahil',
    accent: '#1877F2',
  },
];
