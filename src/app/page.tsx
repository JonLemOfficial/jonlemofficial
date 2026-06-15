'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Code2, Server, Globe, MonitorSmartphone, Layers } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaTiktok } from 'react-icons/fa';
import React from 'react';

// Custom TikTok icon since it's not natively in lucide-react
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.33-5.01 1.95-6.84 1.48-1.64 3.65-2.53 5.87-2.43v4.05c-1.35-.12-2.74.34-3.67 1.25-.94.94-1.37 2.31-1.18 3.64.18 1.34 1.05 2.54 2.25 3.1 1.35.63 2.95.55 4.22-.19 1.14-.66 1.83-1.88 1.92-3.18.11-1.67.04-3.35.04-5.02V.02z" />
  </svg>
);

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-50 selection:bg-cyan-500/30 overflow-hidden relative font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
      </div>

      <main className="max-w-5xl mx-auto px-6 py-20 md:py-32 relative z-10 flex flex-col gap-24">

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col-reverse md:flex-row gap-16 items-center md:items-start justify-between"
        >
          <div className="flex flex-col gap-8 text-center md:text-left flex-1">
            <motion.div variants={fadeIn} className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-sm font-medium shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                Jonathan Lemos
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
                Frontend Web, Wordpress Developer & SEO Specialist
              </h2>
            </motion.div>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              I build websites with modern frontend technologies and scalable WordPress solutions. I combine strong technical development with strategic SEO to build web experiences that drive visibility and engagement.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <SocialLink href="https://facebook.com/JonathanLemosOfficial" icon={<FaFacebook className="w-[22px] h-[22px]" />} label="Facebook" hoverColor="hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10" />
              <SocialLink href="https://www.instagram.com/jonlemofficial/" icon={<FaInstagram className="w-[22px] h-[22px]" />} label="Instagram" hoverColor="hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10" />
              <SocialLink href="https://www.youtube.com/@jonlemofficial" icon={<FaYoutube className="w-[22px] h-[22px]" />} label="YouTube" hoverColor="hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10" />
              <SocialLink href="https://www.tiktok.com/@jonlemofficial" icon={<FaTiktok className="w-[22px] h-[22px]" />} label="TikTok" hoverColor="hover:text-white hover:border-white/50 hover:bg-white/10" />
              <SocialLink href="https://linkedin.com/in/jonlemofficial" icon={<FaLinkedin className="w-[22px] h-[22px]" />} label="LinkedIn" hoverColor="hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10" />
              <SocialLink href="https://x.com/jonlemofficial" icon={<FaTwitter className="w-[22px] h-[22px]" />} label="X (Twitter)" hoverColor="hover:text-slate-200 hover:border-slate-200/50 hover:bg-slate-200/10" />
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-[#020817] bg-[#020817]">
              <Image
                src="/assets/img/avatar.png"
                alt="Jonathan Lemos"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-2xl -z-10 rounded-3xl opacity-50" />
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Globe className="w-8 h-8 text-cyan-400" />
            About me
          </h3>
          <div className="bg-slate-900/60 border border-slate-800/60 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl hover:border-slate-700/80 transition-colors">
            <p className="text-slate-300 leading-relaxed text-xl mb-6">
              I'm a software developer from <span className="font-semibold text-white">Venezuela</span>. Along my career and work experience, I learned a bunch of technologies and languages like <span className="text-cyan-300 font-medium">PHP, Python, JavaScript, TypeScript, C#, and Dart</span>. Many of them in collaboration projects in different companies that I've worked for.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              I am passionate about creating robust web applications, optimizing them for search engines, and delivering seamless user experiences.
            </p>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h3 variants={fadeIn} className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Layers className="w-8 h-8 text-indigo-400" />
            Tech Stack
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              variants={fadeIn}
              title="Languages"
              icon={<Code2 className="w-7 h-7 text-blue-400" />}
              skills={["PHP", "Python", "JavaScript", "TypeScript", "C#", "Dart"]}
            />
            <SkillCard
              variants={fadeIn}
              title="Frameworks & Tools"
              icon={<MonitorSmartphone className="w-7 h-7 text-cyan-400" />}
              skills={["React.js", "Next.js", "Wordpress", "Docker", "Django", "MySQL", "SQL Server", "Visual Studio", "Android Studio"]}
            />
            <SkillCard
              variants={fadeIn}
              title="Cloud & Servers"
              icon={<Server className="w-7 h-7 text-purple-400" />}
              skills={["AWS", "cPanel", "WHMS", "Webmin", "Webmail", "SSH", "Linux"]}
            />
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 mt-20 py-10 relative z-10 text-center text-slate-500">
        <p>© {new Date().getFullYear()} Jonathan Lemos. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon, label, hoverColor }: { href: string, icon: React.ReactNode, label: string, hoverColor: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3.5 rounded-2xl border border-slate-800/80 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-sm shadow-lg ${hoverColor}`}
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  );
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  variants?: Variants;
}

function SkillCard({ title, icon, skills, variants }: SkillCardProps) {
  return (
    <motion.div variants={variants} className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 hover:border-slate-700/80 hover:bg-slate-900/60 transition-all duration-300 hover:-translate-y-2 group shadow-xl backdrop-blur-sm flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3.5 rounded-2xl bg-slate-800/80 group-hover:bg-slate-700 transition-colors shadow-inner">
          {icon}
        </div>
        <h4 className="font-semibold text-2xl text-slate-200">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map((skill: string) => (
          <span
            key={skill}
            className="px-3.5 py-1.5 text-sm font-medium rounded-lg bg-slate-950/80 border border-slate-800/80 text-slate-300 group-hover:border-slate-600/50 group-hover:text-cyan-50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
