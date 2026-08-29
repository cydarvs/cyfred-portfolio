import type { Project } from '../types/project'

type Props = {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className={`group overflow-hidden rounded-3xl border bg-slate-950/55 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-950/30 ${project.featured ? 'border-sky-400/30 lg:col-span-2' : 'border-slate-800/90 hover:border-sky-400/35'}`}>
      {project.image && (
        <div className={`relative overflow-hidden border-b border-slate-800 bg-slate-900 ${project.featured ? 'h-64 md:h-80' : 'h-56'}`}>
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />
        </div>
      )}

      <div className="p-7 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.badge && <span className="pill-accent">{project.badge}</span>}
          {project.status && (
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-bold text-emerald-300">
              {project.status}
            </span>
          )}
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-sky-400">{project.kicker}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">{project.title}</h3>
        <p className="mt-4 max-w-4xl leading-7 text-slate-400">{project.summary}</p>

        {project.metrics?.length ? (
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {project.metrics.slice(0, 6).map((metric) => (
              <div key={metric} className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs font-semibold text-slate-300">
                {metric}
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 rounded-lg font-semibold text-sky-400 outline-none transition hover:text-sky-300 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
          >
            View case study <span aria-hidden>→</span>
          </button>
          {project.href && (
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 hover:text-white">
              Production system ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 hover:text-white">
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
