import type { Project } from '../types/project'

type Props = {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-950/55 transition hover:-translate-y-1 hover:border-sky-400/35 hover:shadow-2xl hover:shadow-sky-950/30">
      {project.image && (
        <div className="relative h-56 overflow-hidden border-b border-slate-800 bg-slate-900">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-transparent" />
        </div>
      )}

      <div className="p-7">
        {project.badge && <span className="pill-accent">{project.badge}</span>}
        <p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-sky-400">{project.kicker}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
        <p className="mt-4 leading-7 text-slate-400">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 font-semibold text-sky-400 transition hover:text-sky-300"
          >
            View case study <span aria-hidden>→</span>
          </button>
          {project.href && (
            <a href={project.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 hover:text-white">
              Live system ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 hover:text-white">
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
