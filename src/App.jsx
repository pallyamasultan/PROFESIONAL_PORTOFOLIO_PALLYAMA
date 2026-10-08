import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  siC,
  siCss,
  siDart,
  siDocker,
  siExpress,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPython,
  siReact,
  siTailwindcss,
} from 'simple-icons';

const techStackGroups = [
  {
    title: 'Languages',
    technologies: [
      { name: 'JavaScript', icon: siJavascript },
      { name: 'Python', icon: siPython },
      { name: 'PHP', icon: siPhp },
      { name: 'Dart', icon: siDart },
      { name: 'C', icon: siC },
      { name: 'HTML5', icon: siHtml5 },
      { name: 'CSS3', icon: siCss },
    ],
  },
  {
    title: 'Frontend & Mobile',
    technologies: [
      { name: 'Flutter', icon: siFlutter },
      { name: 'Next.js', icon: siNextdotjs },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'React', icon: siReact },
    ],
  },
  {
    title: 'Backend & Database',
    technologies: [
      { name: 'Laravel', icon: siLaravel },
      { name: 'Node.js', icon: siNodedotjs },
      { name: 'Express', icon: siExpress },
      { name: 'MySQL', icon: siMysql },
      { name: 'Firebase', icon: siFirebase },
    ],
  },
  {
    title: 'Tools',
    technologies: [
      { name: 'Git', icon: siGit },
      { name: 'VS Code', icon: null },
      { name: 'Figma', icon: siFigma },
      { name: 'GitHub', icon: siGithub },
      { name: 'Docker', icon: siDocker },
    ],
  },
];

const TechStackIcon = ({ icon }) => (
  icon ? (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-10 w-10"
      focusable="false"
    >
      <path fill={icon.hex === '000000' ? '#F8FAFC' : `#${icon.hex}`} d={icon.path} />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" focusable="false">
      <path fill="#007ACC" d="M17.583 2.083 9.5 9.5 4.583 5.667 1.5 7 1.167 8.5l4.5 3.5-4.5 3.5.333 1.5 3.083 1.333L9.5 13.5l8.083 7.417L22.5 19.5v-15L17.583 2.083zm.25 4.25v11.334L11.75 12l6.083-5.667zM4.333 8.833 8.5 12l-4.167 3.167L2.75 14.5l3.333-2.5L2.75 9.5l1.583-.667z" />
    </svg>
  )
);

const educationHistory = [
  {
    period: '2023 — 2026',
    level: "Bachelor's Degree (S1)",
    status: 'Graduated',
    isLatest: true,
    institution: 'Universitas Sebelas April Sumedang',
    faculty: 'Faculty of Information Technology',
    major: 'Informatics Engineering (Computer Science)',
    location: 'Sumedang, West Java',
    description:
      'Completed a Bachelor of Informatics with a strong focus on Software Engineering, Data Structures & Algorithms, Modern Web & Mobile Development, Database Architecture, and Artificial Intelligence Fundamentals.',
    highlights: [
      'Informatics Engineering',
      'Software Engineering',
      'Full-Stack Web Dev',
      'Algorithms & Data Structures',
      'Class of 2026'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    )
  },
  {
    period: '2020 — 2022',
    level: 'Senior High School (MAN)',
    status: 'Graduated',
    isLatest: false,
    institution: 'MAN 1 Sumedang',
    faculty: 'State Islamic Senior High School',
    major: 'Natural Sciences (IPA)',
    location: 'Sumedang, West Java',
    description:
      'Developed rigorous scientific thinking, analytical reasoning, quantitative mathematics, and an early enthusiasm for computer science and digital technology.',
    highlights: [
      'Natural Sciences',
      'Analytical Logic',
      'Mathematics',
      'Tech Exploration'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31M14 9.3V1.99M8.5 2h7" />
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0L10 2" />
      </svg>
    )
  },
  {
    period: '2017 — 2019',
    level: 'Junior High School (MTs)',
    status: 'Graduated',
    isLatest: false,
    institution: 'MTs PP Darussalam Kasomalang Subang',
    faculty: 'Darussalam Islamic Boarding School',
    major: 'Integrated Secondary Education',
    location: 'Kasomalang, Subang, West Java',
    description:
      'Completed integrated secondary education with an Islamic boarding school curriculum, cultivating personal discipline, independence, moral integrity, and team leadership.',
    highlights: [
      'Boarding School',
      'Self-Discipline',
      'Leadership',
      'Moral Integrity'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
    )
  },
  {
    period: '2011 — 2016',
    level: 'Primary School (SD)',
    status: 'Graduated',
    isLatest: false,
    institution: 'SDN Cibubuan 2',
    faculty: 'State Primary School',
    major: 'Primary Education',
    location: 'Sumedang, West Java',
    description:
      'Established core fundamental learning habits, diligence, peer collaboration, and early curiosity toward science, mathematics, and problem-solving.',
    highlights: [
      'Primary Education',
      'Academic Basics',
      'Teamwork',
      'Curiosity'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
];

const App = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { 
      num: '01', 
      title: 'FRONTEND DEVELOPMENT', 
      desc: 'Building responsive, performant, and interactive user interfaces using modern web technologies like React, Tailwind CSS, and Next.js.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      skills: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      level: 90
    },
    { 
      num: '02', 
      title: 'BACKEND & API', 
      desc: 'Designing robust server-side architectures, RESTful APIs, and database structures to power scalable applications.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
      skills: ['Node.js', 'Python', 'PostgreSQL', 'REST API'],
      level: 75
    },
    { 
      num: '03', 
      title: 'AI & AUTOMATION', 
      desc: 'Integrating intelligent AI solutions and automated workflows to optimize business processes and enhance user experiences.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.5 2.5-1 3.5S13.5 11 13 12c-.5 1-1.5 1.5-2.5 2S8 15.5 7 16c-1 .5-2 1-3 2.5S2 21 2 22"/>
          <path d="M12 2a4 4 0 0 0-4 4c0 1.5.5 2.5 1 3.5S10.5 11 11 12c.5 1 1.5 1.5 2.5 2s2.5 1.5 3.5 2c1 .5 2 1 3 2.5s2 3.5 2 4.5"/>
        </svg>
      ),
      skills: ['Python', 'TensorFlow', 'OpenAI', 'Automation'],
      level: 70
    },
    { 
      num: '04', 
      title: 'MOBILE DEVELOPMENT', 
      desc: 'Creating cross-platform mobile applications with seamless native-like performance and intuitive designs.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      skills: ['Flutter', 'React Native', 'Dart', 'Firebase'],
      level: 80
    },
    { 
      num: '05', 
      title: 'DEVOPS & TOOLS', 
      desc: 'Implementing CI/CD pipelines, containerization, and cloud deployments for continuous integration and delivery.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      skills: ['Docker', 'AWS', 'Git', 'CI/CD'],
      level: 65
    },
  ];

  const projects = [
    {
      id: '01',
      title: 'NIMEXX APP - STREAMING ANIME',
      desc: 'Nimexx adalah aplikasi streaming anime gratis berbasis web & mobile. Menghadirkan katalog lengkap via API, pemutaran streaming langsung, daftar favorit pengguna, dan integrasi Firebase untuk otentikasi serta penyimpanan preferensi akun.',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      image: '/nimexxbaner.webp',
      imageBg: 'bg-black',
      imageFit: 'object-cover',
      liveUrl: '#',
      githubUrl: 'https://github.com/pallyamasultan'
    },
    {
      id: '02',
      title: 'SIPENA FEB - EXAM & ACADEMIC APP',
      desc: 'SiPENA FEB adalah platform evaluasi akademik dan ujian online terpadu yang dikembangkan untuk Fakultas Ekonomi dan Bisnis (FEB) UNSAP. Dilengkapi fitur monitoring progress ujian real-time, lingkungan tes yang aman, dan dashboard analitik komprehensif.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
      image: '/sipenafeb.jpeg',
      imageBg: 'bg-white',
      imageFit: 'object-contain p-6 md:p-10',
      liveUrl: '#',
      githubUrl: 'https://github.com/pallyamasultan'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-8"
      >
        <div className="text-xl font-black tracking-widest uppercase text-white">OSEWA</div>
        <div className="hidden md:flex gap-8 text-[11px] font-medium tracking-[0.2em] text-white/70">
          <a href="#home" className="hover:text-white transition-colors">HOME</a>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#education" className="hover:text-white transition-colors">EDUCATION</a>
          <a href="#services" className="hover:text-white transition-colors">SKILL</a>
          <a href="#work" className="hover:text-white transition-colors">PROJECT</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
        {/* Background PORTFOLIO text */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15.5vw] font-black whitespace-nowrap select-none pointer-events-none z-0 tracking-tighter bg-gradient-to-b from-[#ffffff] via-[#b3b3b3] to-[#262626] bg-clip-text text-transparent leading-[0.8]">
          PORTFOLIO
        </div>
        
        {/* Center Avatar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[700px] h-[93vh] flex items-end justify-center pointer-events-none">
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="/profile.png" 
            alt="Osewa" 
            className="w-auto h-full object-contain object-bottom pointer-events-auto"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
            }}
          />
        </div>

        {/* Bottom Left Text (Under PORTFOLIO) */}
        <div className="absolute top-[60%] lg:top-[62%] left-[4vw] lg:left-[6vw] z-20 hidden md:block">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
             className="text-4xl lg:text-[40px] text-white tracking-tight"
           >
              <strong className="font-bold">Frontend</strong> <span className="font-light italic text-white/80">Developer</span>
           </motion.div>
        </div>

        {/* Bottom Right Buttons */}
        <div className="absolute bottom-16 right-8 md:right-16 z-20 hidden md:flex items-center gap-4">
           <motion.a 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
             href="#work"
             className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
           >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-[135deg]"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
           </motion.a>
           <motion.a 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.65, ease: "easeOut" }}
             href="/cv-en.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="rounded-full border border-transparent px-8 py-3 text-sm font-bold bg-[#ccff00] text-black hover:bg-white transition-all shadow-[0_0_15px_rgba(204,255,0,0.3)]"
           >
              CV (ENG)
           </motion.a>
           <motion.a 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
             href="/cv-id.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="rounded-full border border-white/20 px-8 py-3 text-sm font-bold text-white hover:border-white hover:bg-white hover:text-black transition-all"
           >
              CV (IND)
           </motion.a>
           <motion.a 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
             href="#contact"
             className="rounded-full border border-white/20 px-8 py-3 text-sm font-light hover:border-white hover:bg-white hover:text-black transition-all"
           >
              Contact
           </motion.a>
        </div>

        {/* Mobile Layout for bottom elements */}
        <div className="absolute bottom-10 left-0 w-full z-20 flex flex-col items-center gap-6 md:hidden">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
             className="text-3xl text-white text-center tracking-tight"
           >
              <strong className="font-bold">Frontend</strong> <span className="font-light italic text-white/80">Developer</span>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
             className="flex items-center gap-4"
           >
             <a href="#work" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-[135deg]"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
             </a>
             <a href="/cv-en.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-transparent bg-[#ccff00] text-black px-6 py-2 text-xs font-bold hover:bg-white transition-all shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                CV (EN)
             </a>
             <a href="/cv-id.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 text-white px-6 py-2 text-xs font-bold hover:bg-white hover:text-black transition-all">
                CV (ID)
             </a>
             <a href="#contact" className="rounded-full border border-white/20 px-6 py-2 text-xs font-light hover:bg-white hover:text-black transition-all">
                Contact
             </a>
           </motion.div>
        </div>
      </section>

      {/* Intro / About Section */}
      <section id="about" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/10 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row gap-16 items-start"
        >
           <motion.div variants={fadeInUp} className="w-full md:w-5/12 flex justify-center items-end">
             <div className="w-full aspect-[4/5] relative">
                <img 
                  src="/profile.png" 
                  alt="About Developer" 
                  className="w-full h-full object-cover object-bottom filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                />
             </div>
           </motion.div>
           <motion.div variants={fadeInUp} className="w-full md:w-7/12 flex flex-col justify-center pt-8">
              <h2 className="text-6xl md:text-[100px] font-black text-white/90 mb-10 tracking-tighter leading-none">
                Intro
              </h2>
              <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-white/5 relative z-10 shadow-2xl group hover:border-white/10 transition-colors">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                  Hey, I'm <strong className="text-white font-medium">Osewa</strong>. A passionate informatics student and enthusiastic frontend developer who loves to build state-of-the-art web applications. 
                  <br/><br/>
                  I focus on turning complex problems into elegant, scalable, and highly interactive digital products. I always strive to keep my code clean and ensure the user experience is flawless.
                </p>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Git', 'UI/UX', 'Next.js', 'Framer Motion'].map(tech => (
                      <span key={tech} className="text-xs uppercase tracking-wider font-semibold px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
           </motion.div>
        </motion.div>
      </section>

      {/* Education History Section */}
      <section id="education" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/10 overflow-hidden relative">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-[#ccff00] font-mono text-xs tracking-[0.25em] uppercase mb-3 font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              Academic Background
            </p>
            <h2 className="text-5xl md:text-[80px] font-black uppercase tracking-tighter leading-none">
              <span className="text-white">EDUCATION</span>{' '}
              <span className="text-[#ccff00]">JOURNEY</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm md:text-base max-w-md font-light leading-relaxed">
            A chronological record of my academic milestones and formal education that built my analytical problem-solving mindset, discipline, and software engineering foundations.
          </p>
        </motion.div>

        {/* Timeline Cards Container */}
        <div className="relative">
          {/* Vertical spine line for desktop/tablet */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#ccff00] via-white/15 to-white/5 pointer-events-none" />

          <div className="space-y-8 md:space-y-10">
            {educationHistory.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                variants={fadeInUp}
                className="relative md:pl-20 group"
              >
                {/* Node indicator on the vertical spine */}
                <div className="hidden md:flex absolute left-8 top-10 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-white/20 items-center justify-center group-hover:border-[#ccff00] group-hover:scale-110 transition-all duration-300 z-10 shadow-lg">
                  <div className={`w-2.5 h-2.5 rounded-full ${item.isLatest ? 'bg-[#ccff00]' : 'bg-white/40 group-hover:bg-[#ccff00]'}`} />
                </div>

                {/* Card */}
                <div
                  className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden ${
                    item.isLatest
                      ? 'bg-gradient-to-br from-[#0e1207] via-[#0a0a0a] to-[#070707] border border-[#ccff00]/40 shadow-[0_0_35px_rgba(204,255,0,0.08)]'
                      : 'bg-[#0a0a0a] border border-white/10 hover:border-white/25 hover:bg-[#0c0c0c]'
                  } group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)]`}
                >
                  {/* Subtle hover glow inside card */}
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#ccff00]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Bar: Period & Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-sm md:text-base font-bold text-[#ccff00] bg-[#ccff00]/10 border border-[#ccff00]/25 px-4 py-1.5 rounded-full tracking-wider">
                        {item.period}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">
                        {item.level}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.isLatest ? (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/40 shadow-[0_0_12px_rgba(204,255,0,0.25)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#ccff00]">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Graduated (2026)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/50 bg-white/5 border border-white/10">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Graduated
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Middle Content: Title, Faculty & Major */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6 relative z-10">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-[#ccff00] transition-colors duration-300">
                        {item.institution}
                      </h3>
                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base">
                        <span className="text-white/90 font-semibold">{item.major}</span>
                        {item.faculty && (
                          <>
                            <span className="text-white/20">•</span>
                            <span className="text-white/60">{item.faculty}</span>
                          </>
                        )}
                        <span className="text-white/20">•</span>
                        <span className="text-white/40 flex items-center gap-1 text-xs md:text-sm">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Icon container */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      item.isLatest
                        ? 'bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30 shadow-[0_0_15px_rgba(204,255,0,0.15)]'
                        : 'bg-white/5 text-white/50 border border-white/10 group-hover:text-[#ccff00] group-hover:border-[#ccff00]/30 group-hover:bg-[#ccff00]/10'
                    }`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mb-6 relative z-10">
                    {item.description}
                  </p>

                  {/* Highlights / Badges */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2 relative z-10">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-white/30 mr-2">
                      Focus Areas:
                    </span>
                    {item.highlights.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:border-white/20 transition-all duration-300 hover:border-[#ccff00]/40 hover:text-[#ccff00]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Do / Services Section */}
      <section id="services" className="py-32 border-t border-white/10 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-[80px] font-black uppercase tracking-tighter leading-none">
              <span className="text-white">MY</span>{' '}
              <span className="text-[#ccff00]">SKILLS</span>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* List */}
            <div className="w-full lg:w-3/5 flex flex-col border-t border-white/10 relative z-10">
              {services.map((service, idx) => (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-50px" }}
                  variants={fadeInUp}
                  key={idx} 
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group flex items-center justify-between py-8 px-6 border-b border-white/10 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#ccff00] group-hover:border-[#ccff00]/30 group-hover:bg-[#ccff00]/10 transition-all duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-white/30 group-hover:text-[#ccff00]/70 font-mono text-sm md:text-base font-medium transition-colors">{service.num}</span>
                      <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-[#ccff00] tracking-tight transition-colors">{service.title}</h3>
                    </div>
                  </div>
                  <div className="text-white/20 group-hover:text-[#ccff00] transform rotate-0 group-hover:rotate-45 transition-all duration-300">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Detail Description Area */}
            <div className="w-full lg:w-2/5 relative min-h-[400px] lg:min-h-[500px] overflow-hidden">
               <AnimatePresence mode="wait">
                 {hoveredService !== null && (
                   <motion.div
                     key={hoveredService}
                     initial={{ opacity: 0, y: 30, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -30, scale: 0.95 }}
                     transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                     className="absolute inset-0 rounded-3xl border border-white/10 overflow-hidden"
                     style={{
                       background: 'linear-gradient(135deg, rgba(204, 255, 0, 0.05) 0%, rgba(204, 255, 0, 0.02) 100%)',
                     }}
                   >
                     {/* Background Glow */}
                     <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />
                     <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#ccff00]/5 rounded-full blur-2xl pointer-events-none" />
                     
                     {/* Content */}
                     <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
                       {/* Header */}
                       <div className="flex items-start justify-between mb-6">
                         <div>
                           <span className="text-[#ccff00] font-mono text-sm tracking-wider mb-2 block font-bold">{services[hoveredService].num}</span>
                           <h4 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight leading-tight">{services[hoveredService].title}</h4>
                         </div>
                         <div className="w-14 h-14 rounded-2xl bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center text-[#ccff00] flex-shrink-0">
                           {services[hoveredService].icon}
                         </div>
                       </div>

                       {/* Divider */}
                       <div className="h-px bg-gradient-to-r from-[#ccff00]/50 via-white/10 to-transparent mb-6" />

                       {/* Description */}
                       <p className="text-gray-400 font-light leading-relaxed text-base md:text-lg mb-8">
                         {services[hoveredService].desc}
                       </p>

                       {/* Skills */}
                       <div className="mb-8">
                         <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">Technologies</p>
                         <div className="flex flex-wrap gap-2">
                           {services[hoveredService].skills.map((skill, idx) => (
                             <motion.span
                               key={skill}
                               initial={{ opacity: 0, scale: 0.8 }}
                               animate={{ opacity: 1, scale: 1 }}
                               transition={{ delay: idx * 0.1 + 0.2 }}
                               className="text-xs font-mono font-semibold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-[#ccff00]/20 hover:border-[#ccff00]/30 hover:text-[#ccff00] transition-colors cursor-default"
                             >
                               {skill}
                             </motion.span>
                           ))}
                         </div>
                       </div>

                       {/* Progress Bar */}
                       <div className="mt-auto">
                         <div className="flex justify-between items-center mb-2">
                           <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Proficiency</p>
                           <span className="text-[#ccff00] font-mono text-sm font-bold">{services[hoveredService].level}%</span>
                         </div>
                         <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                           <motion.div
                             initial={{ width: 0 }}
                             animate={{ width: `${services[hoveredService].level}%` }}
                             transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                             className="h-full bg-gradient-to-r from-[#ccff00] to-[#a3cc00] rounded-full relative"
                           >
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                           </motion.div>
                         </div>
                       </div>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
               {/* Placeholder when none hovered */}
               <AnimatePresence>
                 {hoveredService === null && (
                   <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-3xl border border-white/5 overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
                      }}
                   >
                     <div className="absolute inset-0 p-8 lg:p-10 flex flex-col items-center justify-center text-center">
                       <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 mb-6">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                           <rect x="3" y="3" width="18" height="18" rx="2"/>
                           <circle cx="9" cy="9" r="2"/>
                           <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                         </svg>
                       </div>
                       <p className="text-white/30 text-lg font-light mb-2">Hover over a skill</p>
                       <p className="text-white/20 text-sm">to see details & proficiency</p>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              <span className="text-white">TECH</span>{' '}
              <span className="text-[#ccff00]">STACK</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-4 font-light">
              Technologies I work with
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-14">
            {techStackGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ delay: groupIndex * 0.1 }}
                className="w-full max-w-3xl"
              >
                <h3 className="text-white/90 text-base mb-5 font-semibold text-center">
                  {group.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {group.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      role="img"
                      aria-label={tech.name}
                      title={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 + groupIndex * 0.1 }}
                      whileHover={{ scale: 1.08 }}
                      className="flex h-14 w-14 cursor-default items-center justify-center rounded-[14px] border border-white/5 bg-[#242938] transition-colors duration-300 hover:border-white/15 hover:bg-[#2b3040]"
                    >
                      <TechStackIcon icon={tech.icon} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/10 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col lg:flex-row justify-between mb-24 lg:items-end gap-10"
        >
          <h2 className="text-5xl md:text-[80px] font-black uppercase tracking-tighter leading-none">
            <span className="text-white">SELECTED</span> <br/>
            <span className="text-white/40 italic font-serif font-light lowercase text-6xl md:text-[90px]">work</span>
          </h2>
          <div className="max-w-lg lg:text-left">
            <p className="text-gray-400 text-base md:text-lg mb-8 font-light leading-relaxed">
              Showcasing projects crafted with modern ideas, simplicity, and clean code tailored to real-world solutions.
            </p>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-32 lg:gap-40 mt-10">
          {projects.map((project, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <motion.div 
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={fadeInUp}
                className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
              >
                {/* Image Section */}
                <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`w-full aspect-[16/9] rounded-3xl overflow-hidden relative group shadow-2xl border border-white/10 ${project.imageBg || 'bg-[#0d0d0d]'} flex items-center justify-center`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full ${project.imageFit || 'object-cover'} transition-all duration-700 group-hover:scale-105`} 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Text Section */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-[#ccff00] font-mono text-sm mb-4 block font-bold">{project.id}</span>
                  <h3 className="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-6 leading-[1.15] tracking-tight uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-light mb-6 text-base md:text-lg leading-relaxed max-w-xl">
                    {project.desc}
                  </p>

                  {/* Tech stack pills */}
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex gap-4 flex-wrap">
                    <a 
                      href={project.liveUrl || '#'} 
                      className="inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(204,255,0,0.2)]"
                    >
                      Live Demo 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <a 
                      href={project.githubUrl || 'https://github.com/pallyamasultan'} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      GitHub 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden bg-black" style={{minHeight:'100vh'}}>
        {/* Spinning Globe - centered behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-35" style={{width:'110vw', maxWidth:'1100px'}}>
          <img
            src="/globe.jpg"
            alt="globe"
            className="w-full h-auto object-contain animate-[spin_120s_linear_infinite]"
            style={{filter:'brightness(0.7) contrast(1.1)'}}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row gap-20 py-32">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-5/12 flex flex-col justify-center"
          >
            <h2 className="text-[52px] md:text-[72px] font-black leading-[1.0] mb-16 text-white" style={{letterSpacing:'-0.02em'}}>Get in<br/>touch</h2>

            <div className="space-y-8">
              <div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-1 font-semibold">Email:</p>
                <a href="mailto:pallyamasultan@gmail.com" className="text-white text-base font-medium hover:text-[#ccff00] transition-colors">
                  pallyamasultan@gmail.com
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-1 font-semibold">Phone:</p>
                <a href="tel:+6282119601659" className="text-white text-base font-medium hover:text-[#ccff00] transition-colors">
                  +62 821-1960-1659
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-3 font-semibold">Follow us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-black transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-black transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-black transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-black transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-7/12"
          >
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-white/60 text-xs mb-2 tracking-wide">Your Name</p>
                  <input type="text" id="cname" placeholder="Your full name" className="w-full bg-[#0d0d0d] border border-white/10 rounded-md p-3 text-white text-sm focus:outline-none focus:border-white/30 placeholder:text-white/20" />
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-2 tracking-wide">Email address</p>
                  <input type="email" id="cemail" placeholder="Your email address" className="w-full bg-[#0d0d0d] border border-white/10 rounded-md p-3 text-white text-sm focus:outline-none focus:border-white/30 placeholder:text-white/20" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-white/60 text-xs mb-2 tracking-wide">Phone</p>
                  <input type="tel" id="cphone" placeholder="Your phone number" className="w-full bg-[#0d0d0d] border border-white/10 rounded-md p-3 text-white text-sm focus:outline-none focus:border-white/30 placeholder:text-white/20" />
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-2 tracking-wide">Subject</p>
                  <input type="text" id="csubject" placeholder="Subject" className="w-full bg-[#0d0d0d] border border-white/10 rounded-md p-3 text-white text-sm focus:outline-none focus:border-white/30 placeholder:text-white/20" />
                </div>
              </div>

              <div>
                <p className="text-white/60 text-xs mb-2 tracking-wide">Message</p>
                <textarea id="cmessage" rows="6" placeholder="Write something..." className="w-full bg-[#0d0d0d] border border-white/10 rounded-md p-3 text-white text-sm focus:outline-none focus:border-white/30 resize-none placeholder:text-white/20"></textarea>
              </div>

              <button type="button" className="w-full bg-white text-black font-semibold py-4 rounded-md text-sm hover:bg-[#ccff00] transition-colors duration-300 mt-1">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-black pt-16 pb-10">
        {/* Green glow - strong at center-bottom like reference */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00ff44]/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00dd33]/15 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
          {/* Top row: email left, CTA right */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10 border-b border-white/10 pb-10">
            <div>
              <p className="text-white/50 text-sm mb-2">Connect with me</p>
              <a href="mailto:pallyamasultan@gmail.com" className="text-3xl md:text-4xl font-bold text-white hover:text-[#ccff00] transition-colors">
                pallyamasultan@gmail.com
              </a>
            </div>
            <div className="text-left lg:text-right">
              <p className="text-white font-bold text-lg mb-1">Let's build something</p>
              <p className="text-white/50 text-sm mb-4">Open for freelance opportunities and<br/>collaborations.</p>
              <a href="#contact" className="inline-block px-6 py-3 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-all">
                Get in touch
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex gap-8 mb-10 text-sm text-white/60">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#services" className="hover:text-white transition-colors">Skills</a>
            <a href="#work" className="hover:text-white transition-colors">Projects</a>
          </div>

          {/* Social links row */}
          <div className="flex justify-between items-center border-b border-white/10 pb-10 mb-0 text-sm text-white/70">
            <a href="https://www.instagram.com/pllyama_sltan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </span>
              Instagram
            </a>
            <a href="#" className="flex items-center gap-2 text-white/30 cursor-not-allowed" aria-disabled="true">
              <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </span>
              Youtube <span className="text-xs text-white/20 ml-1">(coming soon)</span>
            </a>
            <a href="https://www.linkedin.com/in/pallyama-sultan-8590062a5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </span>
              LinkedIn
            </a>
            <a href="https://github.com/pallyamasultan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </span>
              Github
            </a>
          </div>
        </div>

        {/* Big solid white OSEWA name like reference */}
        <div className="relative z-10 text-center overflow-hidden mt-0">
          <h1 className="text-[18vw] md:text-[16vw] font-black text-white leading-[0.85] tracking-tighter select-none pointer-events-none">
            OSEWA
          </h1>
        </div>

        {/* Bottom copyright */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs mt-4">
          <p>&copy; {new Date().getFullYear()} Osewa. All Rights Reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms and conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
