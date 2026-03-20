import React from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  GitBranch, 
  GraduationCap, 
  Award, 
  Briefcase,
  Cpu,
  Cloud,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-100">
    <span className="w-8 h-[2px] bg-blue-500/50 rounded-full"></span>
    {children}
  </h2>
);

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-slate-900/50 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-blue-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-24 relative z-10">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <BentoCard className="lg:col-span-8 flex flex-col justify-center min-h-[300px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
                Available for Opportunities
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Lavu Rupa
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                <span className="text-blue-400 font-medium">Bridging Software Engineering</span> with Artificial Intelligence.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://github.com/RUPA-9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-colors"
                >
                  <Github size={18} /> GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/lavu-rupa-2105b7358" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </BentoCard>

          <BentoCard className="lg:col-span-4 flex flex-col justify-between" delay={0.1}>
            <div>
              <SectionTitle>Contact & Location</SectionTitle>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="text-blue-500 shrink-0" size={20} />
                  <p className="text-sm">Gannavaram, Vijayawada, AP</p>
                </div>
                <a href="mailto:lavurupa9@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="text-blue-500 shrink-0" size={20} />
                  <p className="text-sm">lavurupa9@gmail.com</p>
                </a>
                <a href="tel:+919392709379" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors">
                  <Phone className="text-blue-500 shrink-0" size={20} />
                  <p className="text-sm">+91 9392709379</p>
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">Role</p>
              <p className="text-lg font-medium text-white">AI/ML & Software Engineering Student</p>
            </div>
          </BentoCard>
        </section>

        {/* Education & Skills */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <BentoCard className="lg:col-span-5" delay={0.2}>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-slate-800">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <p className="text-sm text-blue-400 font-medium mb-1">Present</p>
                <h3 className="text-lg font-semibold text-white">B.Tech in CSE (AI & ML)</h3>
                <p className="text-slate-400 text-sm">Currently Pursuing</p>
              </div>
              <div className="relative pl-8 border-l border-slate-800">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <p className="text-sm text-slate-500 font-medium mb-1">Completed</p>
                <h3 className="text-lg font-semibold text-white">Diploma in Computer Science</h3>
                <p className="text-slate-400 text-sm">Foundational Engineering</p>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-3 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10">
              <GraduationCap className="text-blue-500" size={24} />
              <p className="text-sm text-slate-400">Academic focus on advanced algorithms and machine learning architectures.</p>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-7" delay={0.3}>
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-4">
                  <Code2 size={18} className="text-blue-500" /> Programming
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> Python (AI/ML)</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> Machine Learning</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> Java / C++</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> Swift (iOS)</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> JavaScript</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-4">
                  <Database size={18} className="text-purple-500" /> Databases
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> MySQL</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> MongoDB</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> PostgreSQL</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-4">
                  <GitBranch size={18} className="text-emerald-500" /> Version Control
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> Git / GitHub</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> CI/CD Basics</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-slate-700" /> Agile Scrum</li>
                </ul>
              </div>
            </div>
          </BentoCard>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <BentoCard className="w-full" delay={0.4}>
            <SectionTitle>Professional Certifications</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "AWS Cloud Practitioner", 
                  org: "Amazon Web Services", 
                  icon: <Cloud className="text-orange-500" />,
                  color: "border-orange-500/20 bg-orange-500/5"
                },
                { 
                  title: "AWS Academy ML", 
                  org: "Amazon Web Services", 
                  icon: <Cpu className="text-blue-500" />,
                  color: "border-blue-500/20 bg-blue-500/5"
                },
                { 
                  title: "CISCO Cyber Security", 
                  org: "Cisco Networking Academy", 
                  icon: <ShieldCheck className="text-emerald-500" />,
                  color: "border-emerald-500/20 bg-emerald-500/5"
                }
              ].map((cert, i) => (
                <a 
                  key={i} 
                  href="https://www.credly.com/users/lavu-rupa/edit#credly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-6 rounded-2xl border ${cert.color} flex items-center gap-4 transition-transform hover:-translate-y-1 hover:border-slate-600`}
                >
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white leading-tight">{cert.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{cert.org}</p>
                  </div>
                </a>
              ))}
            </div>
          </BentoCard>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Interview Assistant",
                desc: "Leveraging NLP and ML to provide real-time feedback and analysis for technical interviews.",
                tech: ["Python", "NLP", "Scikit-Learn"],
                icon: <Cpu size={24} className="text-blue-500" />
              },
              {
                title: "AI Visa Eligibility Screening",
                desc: "Swift-based mobile application using AI to predict and screen visa eligibility based on multiple parameters.",
                tech: ["Swift", "CoreML", "iOS"],
                icon: <ShieldCheck size={24} className="text-purple-500" />
              },
              {
                title: "Placement Prep Website",
                desc: "A comprehensive platform for students to prepare for technical placements with curated resources.",
                tech: ["React", "Tailwind", "Node.js"],
                icon: <Briefcase size={24} className="text-emerald-500" />
              }
            ].map((project, i) => (
              <BentoCard key={i} className="flex flex-col h-full" delay={0.5 + (i * 0.1)}>
                <div className="mb-6 p-3 bg-slate-950 w-fit rounded-2xl border border-slate-800">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-800 text-slate-400 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href="https://github.com/RUPA-9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group w-fit"
                >
                  View Project <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <footer className="mt-24 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-slate-400 max-w-md mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <a href="mailto:lavurupa9@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                    <Mail size={20} />
                  </div>
                  lavurupa9@gmail.com
                </a>
                <a href="tel:+919392709379" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                    <Phone size={20} />
                  </div>
                  +91 9392709379
                </a>
              </div>
            </div>
            <div className="text-left lg:text-right">
              <p className="text-sm text-slate-500 mb-4 uppercase tracking-widest">Social Presence</p>
              <div className="flex lg:justify-end gap-4">
                <a href="https://github.com/RUPA-9" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-all">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/lavu-rupa-2105b7358" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
              <p className="mt-12 text-xs text-slate-600">
                &copy; {new Date().getFullYear()} Lavu Rupa. Built with React & Tailwind.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
