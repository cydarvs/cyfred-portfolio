import { useEffect } from 'react'
import type { Project } from '../types/project'

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-black/75 p-4 backdrop-blur-sm md:p-8"
      onMouseDown={(event) => { if (event.currentTarget === event.target) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-700 bg-[#091523] shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-[#091523]/95 px-6 py-4 backdrop-blur">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-400">Case study</p>
            <h2 id={`project-${project.id}-title`} className="mt-1 font-bold text-white">{project.title}</h2>
          </div>
          <button onClick={onClose} className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 outline-none hover:border-slate-500 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400">
            Close ×
          </button>
        </div>

        {project.gallery?.length ? (
          <div className="border-b border-slate-800 bg-[#050b13]">
            <img
              src={project.gallery[0]}
              alt={`${project.title} architecture or primary project view`}
              loading="eager"
              className="max-h-[720px] w-full object-contain"
            />
            {project.gallery.length > 1 && (
              <div className="grid border-t border-slate-800 md:grid-cols-3">
                {project.gallery.slice(1, 4).map((img, index) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${project.title} dashboard screenshot ${index + 1}`}
                    loading="lazy"
                    className="h-72 w-full border-slate-800 object-cover object-top md:border-r last:md:border-r-0"
                  />
                ))}
              </div>
            )}
          </div>
        ) : null}

        <div className="p-6 md:p-9">
          <div className="flex flex-wrap gap-2">
            {project.status && <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-bold text-emerald-300">{project.status}</span>}
            {project.badge && <span className="pill-accent">{project.badge}</span>}
          </div>

          {project.metrics?.length ? (
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {project.metrics.map((metric) => (
                <div key={metric} className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4 text-sm font-semibold text-slate-200">{metric}</div>
              ))}
            </div>
          ) : null}

          {project.architecture?.length ? (
            <div className="mt-8 rounded-3xl border border-sky-400/20 bg-sky-400/[.03] p-5 md:p-7">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-400">Architecture flow</p>
              <div className="mt-5 flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
                {project.architecture.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-xl border border-slate-700 bg-[#07111f] px-4 py-3 text-sm font-semibold text-slate-200">{step}</span>
                    {index < project.architecture!.length - 1 && <span className="hidden text-sky-400 md:inline">→</span>}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">Overview</p>
              <p className="mt-3 leading-7 text-slate-300">{project.summary}</p>

              <h3 className="mt-8 font-bold text-white">Engineering challenge</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.challenge}</p>

              <h3 className="mt-8 font-bold text-white">Outcome</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.outcome}</p>

              {project.stages?.length ? (
                <div className="mt-8">
                  <h3 className="font-bold text-white">Development progression</h3>
                  <div className="mt-4 space-y-3">
                    {project.stages.map((stage, index) => (
                      <div key={stage.title} className="grid grid-cols-[36px_1fr] gap-3 rounded-2xl border border-slate-800 bg-slate-950/35 p-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/10 text-xs font-black text-sky-300">{index + 1}</span>
                        <div><p className="font-semibold text-white">{stage.title}</p><p className="mt-1 text-sm leading-6 text-slate-400">{stage.description}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-6">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">My contribution</p>
                <ul className="mt-5 space-y-4">
                  {project.contribution.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl bg-sky-400 px-4 py-2.5 text-sm font-bold text-[#07111f] hover:bg-sky-300">
                    Visit production system ↗
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-bold text-white hover:border-sky-400/50">
                    View source ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
