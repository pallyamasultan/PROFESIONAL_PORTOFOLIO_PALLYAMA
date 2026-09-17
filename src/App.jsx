import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { num: '01', title: 'FRONTEND DEVELOPMENT', desc: 'Building responsive, performant, and interactive user interfaces using modern web technologies like React, Tailwind CSS, and Next.js.' },
    { num: '02', title: 'BACKEND & API', desc: 'Designing robust server-side architectures, RESTful APIs, and database structures to power scalable applications.' },
    { num: '03', title: 'AI & AUTOMATION', desc: 'Integrating intelligent AI solutions and automated workflows to optimize business processes and enhance user experiences.' },
    { num: '04', title: 'MOBILE DEVELOPMENT', desc: 'Creating cross-platform mobile applications with seamless native-like performance and intuitive designs.' },
    { num: '05', title: 'DEVOPS & TOOLS', desc: 'Implementing CI/CD pipelines, containerization, and cloud deployments for continuous integration and delivery.' },
  ];

  const projects = [
    {
      id: '01',
      title: 'INSTAGRAM AI AUTOMATION PLATFORM',
      desc: 'An AI-powered Instagram chat automation platform that instantly responds to customer messages, qualifies leads, automates conversations, and helps businesses improve engagement while saving time through intelligent workflows.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: '02',
      title: 'LIVEMEET TRANSLATE',
      desc: 'A real-time AI-powered Google Meet translation platform that listens to live conversations, converts speech to text, translates it into the user\'s preferred language, and automatically generates organized meeting notes with AI-powered summaries and key action items.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: '03',
      title: 'FEB UNSAP EXAM APP',
      desc: 'A robust web-based online exam application developed for the Faculty of Economics and Business, UNSAP. It features real-time progress tracking, secure testing environments, and an advanced dashboard for administrators.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
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
          <a href="#services" className="hover:text-white transition-colors">SKILL</a>
          <a href="#work" className="hover:text-white transition-colors">PROJECT</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
        {/* Background PORTFOLIO text */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15.5vw] font-black whitespace-nowrap select-none pointer-events-none z-0 tracking-tighter bg-gradient-to-b from-[#ffffff] via-[#b3b3b3] to-[#262626] bg-clip-text text-transparent leading-[0.8]">
          PORTOFOLIO
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
              <span className="text-white">SKILL</span>{' '}
              <span className="text-[#ccff00]">SAYA</span>
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
                  className="group flex items-center justify-between py-10 px-6 border-b border-white/10 hover:bg-[#ccff00] hover:border-[#ccff00] transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="text-white/40 group-hover:text-black font-mono text-xl md:text-2xl font-medium transition-colors">{service.num}</span>
                    <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-black tracking-tight transition-colors">{service.title}</h3>
                  </div>
                  <div className="text-white/40 group-hover:text-black transform rotate-0 group-hover:rotate-45 transition-all duration-300">
                     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Detail Description Area */}
            <div className="w-full lg:w-2/5 relative h-[300px] lg:h-auto overflow-hidden">
               <AnimatePresence mode="wait">
                 {hoveredService !== null && (
                   <motion.div
                     key={hoveredService}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3, ease: "easeInOut" }}
                     className="absolute inset-0 p-8 lg:p-12 bg-[#ccff00]/5 rounded-3xl border border-[#ccff00]/20 flex flex-col justify-center backdrop-blur-sm"
                   >
                     <span className="text-[#ccff00] font-mono text-lg mb-4 block font-bold">{services[hoveredService].num}</span>
                     <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tight">{services[hoveredService].title}</h4>
                     <p className="text-gray-300 font-light leading-relaxed text-lg">
                       {services[hoveredService].desc}
                     </p>
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
                      className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-center items-center text-center opacity-30 border border-dashed border-white/20 rounded-3xl"
                   >
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-6"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                      <p className="text-xl font-light">Hover over a service <br/>to see details.</p>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
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
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative group shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                {/* Text Section */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-[#ccff00] font-mono text-sm mb-6 block font-bold">{project.id}</span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-light mb-12 text-lg leading-relaxed max-w-xl">
                    {project.desc}
                  </p>
                  
                  <div className="flex gap-4 flex-wrap">
                    <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-300">
                      Live Demo 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors duration-300">
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
                <a href="tel:+62000000000" className="text-white text-base font-medium hover:text-[#ccff00] transition-colors">
                  +62 000-000-0000
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
        {/* Green glow bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00ff44]/10 rounded-full blur-[100px] pointer-events-none"></div>

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
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Projects</a>
          </div>

          {/* Social links */}
          <div className="flex justify-between items-center mb-4 text-sm text-white/70 border-b border-white/10 pb-10">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Youtube</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>
        </div>

        {/* Big name */}
        <div className="relative z-10 text-center overflow-hidden">
          <h1 className="text-[18vw] md:text-[16vw] font-black text-white leading-none tracking-tighter select-none" style={{WebkitTextStroke:'1px rgba(255,255,255,0.15)', color:'transparent'}}>
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
