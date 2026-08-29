import { useEffect, useState } from 'react'

import type { Project } from './types/project'
import { projects } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'

const navItems = ['about', 'expertise', 'projects', 'experience', 'education', 'contact']

const expertise = [
  { icon: '☁', title: 'Cloud & Infrastructure', text: 'AWS EC2, RDS, S3, VPC, Route 53, ELB/ALB, WAF, IAM, CloudWatch, CloudTrail; Azure; GCP' },
  { icon: '⚙', title: 'DevOps & Automation', text: 'GitHub Actions, Bitbucket Pipelines, Jenkins, GitLab CI/CD, Terraform, Ansible, Bash and Git' },
  { icon: '◫', title: 'Containers & Orchestration', text: 'Docker, Docker Compose, Kubernetes, k0s, Helm, Harbor and multi-node cluster operations' },
  { icon: '▱', title: 'Databases & Data', text: 'MySQL 5.7/8.0, AWS RDS, PostgreSQL, SQL Server, MariaDB, Redis, replication, tuning and recovery' },
  { icon: '⌘', title: 'Systems & Networking', text: 'Ubuntu/Linux, Windows Server, VMware, Hyper-V, DNS, TCP/IP, VPN, firewalls, reverse proxy and load balancing' },
  { icon: '◉', title: 'Observability', text: 'Prometheus, Grafana, PMM, Loki, CloudWatch, metrics, dashboards, logs, alerts and incident analysis' },
  { icon: '</>', title: 'Software & Integration', text: 'Laravel/PHP, React, TypeScript, Node.js, Express, REST APIs, systems integration and legacy modernization' },
  { icon: 'AI', title: 'Analytics & AI', text: 'Python, pandas, NumPy, statistics, regression, hypothesis testing, visualization and ML fundamentals' },
]

const experience = [
  { years: 'Apr 2023 — Present', role: 'System Development & System Administration Manager', company: 'CLIMBS Life and General Insurance Cooperative', detail: 'Lead software development, systems administration, database operations, cloud infrastructure, DevOps, security and production support while remaining hands-on technically.' },
  { years: 'Jun 2023 — Dec 2023', role: 'Part-time Cloud Server Administrator', company: 'Xtendly Philippines Inc.', detail: 'Created, deployed, maintained and monitored cloud infrastructure across AWS, Azure and GCP; administered Linux and Windows servers and supported production reliability.' },
  { years: 'Jan 2010 — Mar 2023', role: 'IT Manager', company: 'CLIMBS Life and General Insurance Cooperative', detail: 'Directed enterprise IT strategy and operations across infrastructure, databases, software delivery, security, systems integration, business continuity and vendor coordination.' },
  { years: 'Apr 2007 — Dec 2009', role: 'System Developer', company: 'CLIMBS Life and General Insurance Cooperative', detail: 'Developed database-driven enterprise applications, designed data structures and SQL, and supported testing, deployment and production issue investigation.' },
  { years: 'Apr 2009 — Present', role: 'Part-time Instructor', company: 'University of Science and Technology of Southern Philippines', detail: 'Teach database management, software engineering, systems integration & architecture, data structures & algorithms, web development and integrative programming.' },
]


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-200">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="text-sm font-black tracking-[.16em] text-white">CYFRED<span className="text-sky-400">.TECH</span></a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map(item => <a key={item} href={`#${item}`} className="capitalize transition hover:text-sky-400">{item}</a>)}
          </nav>
          <div className="hidden md:block"><a href="./assets/Cyfred_Odarve_Master_IT_Resume.pdf" target="_blank" className="rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-400/15">Resume ↗</a></div>
          <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-slate-700 px-3 py-2 text-sm md:hidden">{menuOpen ? 'Close' : 'Menu'}</button>
        </div>
        {menuOpen && <div className="border-t border-slate-800 bg-[#07111f] px-5 py-4 md:hidden">{navItems.map(item => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="block py-2 capitalize text-slate-300">{item}</a>)}<a href="./assets/Cyfred_Odarve_Master_IT_Resume.pdf" target="_blank" className="mt-2 block py-2 font-semibold text-sky-400">Open Resume ↗</a></div>}
      </header>

      <main>
        <section id="home" className="grid-bg relative overflow-hidden pt-28">
          <div className="pointer-events-none absolute left-[8%] top-28 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[5%] top-44 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-16 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:pb-32 lg:pt-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.8)]" /> Open to remote senior technical & leadership roles</div>
              <p className="text-sm font-bold uppercase tracking-[.24em] text-sky-400">Cloud · DevOps · Databases · Infrastructure</p>
              <h1 className="mt-4 text-5xl font-black leading-[1.02] tracking-[-.035em] text-white sm:text-6xl lg:text-7xl">Cyfred Odarve</h1>
              <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-slate-200 md:text-3xl">IT Infrastructure, Cloud, DevOps & Database Engineering Leader</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">I design, modernize, automate and operate business-critical platforms across cloud and on-premises environments — combining engineering depth with technical leadership.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-sky-400 px-5 py-3 font-bold text-[#07111f] transition hover:bg-sky-300">Explore my work</a>
                <a href="./assets/Cyfred_Odarve_Master_IT_Resume.pdf" target="_blank" className="rounded-xl border border-slate-700 bg-slate-950/40 px-5 py-3 font-semibold text-white transition hover:border-sky-400/60">View Resume</a>
                <a href="#contact" className="rounded-xl px-5 py-3 font-semibold text-slate-300 hover:text-white">Contact me →</a>
              </div>
              <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[['19+', 'Years in IT'], ['16+', 'Years leadership'], ['500GB+', 'Database environments'], ['Hybrid', 'Cloud + on-prem']].map(([value, label]) => <div key={label} className="glass rounded-2xl p-5"><div className="text-2xl font-black text-white">{value}</div><div className="mt-1 text-sm text-slate-400">{label}</div></div>)}
              </div>
            </div>
            <aside className="self-center rounded-[2rem] border border-slate-800 bg-slate-950/55 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-5"><div><p className="text-xs uppercase tracking-[.2em] text-slate-500">Engineering profile</p><p className="mt-1 font-semibold text-white">Hands-on technical leadership</p></div><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-red-400/80"/><i className="h-2.5 w-2.5 rounded-full bg-amber-300/80"/><i className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"/></div></div>
              <div className="mt-6 space-y-5 font-mono text-sm"><p><span className="text-sky-400">$</span> <span className="text-slate-300">focus --current</span></p><p className="pl-4 text-slate-400">AWS · Linux · Kubernetes · MySQL/RDS · CI/CD</p><p><span className="text-sky-400">$</span> <span className="text-slate-300">build --platform</span></p><p className="pl-4 text-slate-400">UMS-AI · Cooperative Apps · Web Platforms</p><p><span className="text-sky-400">$</span> <span className="text-slate-300">operate --production</span></p><p className="pl-4 text-slate-400">Reliability · Security · Monitoring · Incident Response</p><p><span className="text-emerald-400">✓</span> <span className="text-slate-300">ready for the next challenge</span></p></div>
            </aside>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div><SectionEyebrow>About me</SectionEyebrow><h2 className="section-title">From systems developer to engineering leader — without leaving the terminal behind.</h2><p className="mt-6 text-lg leading-8 text-slate-400">I have spent more than 19 years building, operating and improving technology environments. My career began in software development and expanded into IT management, cloud infrastructure, DevOps, database engineering, production operations, cybersecurity and architecture.</p><p className="mt-4 text-lg leading-8 text-slate-400">Today I lead software development and systems administration while staying hands-on with AWS, Linux, Windows Server, databases, containers, networking, CI/CD, observability and complex production incidents.</p></div>
            <div className="glass rounded-3xl p-7 md:p-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">What I bring</p><div className="mt-6 space-y-5">{['Translate business needs into reliable technical architecture','Lead teams while troubleshooting deep infrastructure issues','Modernize legacy environments without losing operational continuity','Connect application, database, network and cloud layers during incidents','Build automation, monitoring and engineering practices that scale'].map((item, i) => <div className="flex gap-4" key={item}><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-xs font-bold text-sky-300">0{i+1}</span><p className="leading-7 text-slate-300">{item}</p></div>)}</div></div>
          </div>
        </section>

        <section id="expertise" className="border-y border-slate-800/80 bg-slate-950/30 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionEyebrow>Technical expertise</SectionEyebrow><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="section-title max-w-2xl">Engineering across the complete platform stack.</h2><p className="max-w-lg text-sm leading-6 text-slate-500">Infrastructure, applications, data and operations are interconnected. My work frequently spans all four.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{expertise.map(item => <div key={item.title} className="glass rounded-2xl p-6 transition hover:border-sky-400/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 font-mono text-sm font-bold text-sky-300">{item.icon}</div><h3 className="mt-5 font-bold text-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p></div>)}</div></div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionEyebrow>Selected engineering work</SectionEyebrow><h2 className="section-title">Systems I have built, modernized and operated.</h2><p className="mt-4 max-w-3xl leading-7 text-slate-400">The case studies focus on engineering scope and outcomes. Sensitive production details, private infrastructure information and proprietary implementation data are intentionally generalized.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">{projects.map(project => <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />)}</div>
        </section>

        <section id="experience" className="border-y border-slate-800/80 bg-slate-950/30 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionEyebrow>Career timeline</SectionEyebrow><h2 className="section-title">19+ years across development, infrastructure and leadership.</h2><div className="relative mt-12 space-y-5 before:absolute before:bottom-6 before:left-[7px] before:top-6 before:w-px before:bg-slate-800 md:before:left-[188px]">{experience.map((item) => <div key={`${item.years}-${item.role}`} className="relative grid gap-3 pl-8 md:grid-cols-[160px_1fr] md:gap-8 md:pl-0"><div className="text-sm font-semibold text-sky-400">{item.years}</div><div className="relative rounded-2xl border border-slate-800 bg-[#091523] p-6 before:absolute before:-left-[189px] before:top-7 before:hidden before:h-3 before:w-3 before:rounded-full before:border-2 before:border-sky-400 before:bg-[#07111f] md:before:block"><h3 className="text-lg font-bold text-white">{item.role}</h3><p className="mt-1 text-sm font-medium text-slate-400">{item.company}</p><p className="mt-4 leading-7 text-slate-500">{item.detail}</p></div></div>)}</div></div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2"><div className="glass rounded-3xl p-8"><SectionEyebrow>Education</SectionEyebrow><div className="mt-6 space-y-7"><EducationItem title="Postgraduate Diploma, AI & Machine Learning" school="Asian Institute of Management (AIM)" years="2025–2026"/><EducationItem title="Master of Science in Information Technology" school="MSU–Iligan Institute of Technology" years="2008–2015"/><EducationItem title="Bachelor of Science in Information Technology" school="University of Science and Technology of Southern Philippines" years="2004–2007"/></div></div><div className="glass rounded-3xl p-8"><SectionEyebrow>Training & development</SectionEyebrow><div className="mt-6 space-y-5"><Training label="352 hours" text="DevOps & Automation Training"/><Training label="138 hours" text="Full-Stack Developer Training"/><Training label="Security" text="Ethical Hacking & Pentesting"/><Training label="Additional" text="Web Application Architecture · UI/UX with Figma · Android Development"/><div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4"><p className="text-xs font-bold uppercase tracking-[.18em] text-amber-300">Certification status</p><p className="mt-2 font-semibold text-white">AWS Certification — Currently in Progress</p></div></div></div></div>
        </section>

        <section id="contact" className="px-5 pb-24 lg:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/10 via-slate-950/70 to-indigo-500/10 p-8 md:p-12"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><SectionEyebrow>Let’s connect</SectionEyebrow><h2 className="mt-2 text-3xl font-black tracking-tight text-white md:text-5xl">Building reliable systems is what I do.</h2><p className="mt-5 max-w-3xl leading-7 text-slate-400">Open to senior individual-contributor, lead and management opportunities across cloud infrastructure, DevOps, systems administration, database engineering, platform engineering, solutions engineering and technical operations.</p><div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400"><span>Cagayan de Oro, Philippines</span><span>Remote / International teams</span></div></div><div className="flex flex-wrap gap-3"><a href="mailto:cyfredodarve@gmail.com" className="rounded-xl bg-sky-400 px-5 py-3 font-bold text-[#07111f] hover:bg-sky-300">Email me</a><a href="./assets/Cyfred_Odarve_Master_IT_Resume.pdf" target="_blank" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white hover:border-sky-400/50">Resume ↗</a></div></div></div></section>
      </main>

      <footer className="border-t border-slate-800 py-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-sm text-slate-500 sm:flex-row lg:px-8"><p>© {new Date().getFullYear()} Cyfred Odarve.</p><p>React · TypeScript · Vite · Tailwind CSS · GitHub Pages</p></div></footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) { return <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-sky-400">{children}</p> }
function EducationItem({title, school, years}: {title:string; school:string; years:string}) { return <div><div className="flex flex-wrap items-start justify-between gap-2"><h3 className="font-bold text-white">{title}</h3><span className="text-xs font-semibold text-sky-400">{years}</span></div><p className="mt-1 text-sm text-slate-400">{school}</p></div> }
function Training({label, text}: {label:string; text:string}) { return <div className="flex gap-4"><span className="w-20 shrink-0 text-xs font-bold uppercase tracking-wide text-sky-400">{label}</span><p className="text-slate-300">{text}</p></div> }

export default App
