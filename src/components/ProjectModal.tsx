import type { Project } from '../types/project'

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-black/75 p-4 backdrop-blur-sm md:p-8"
      onMouseDown={(event) => { if (event.currentTarget === event.target) onClose() }}
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-700 bg-[#091523] shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-[#091523]/95 px-6 py-4 backdrop-blur">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-400">Case study</p>
            <h2 className="mt-1 font-bold text-white">{project.title}</h2>
          </div>
          <button onClick={onClose} className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:border-slate-500 hover:text-white">
            Close ×
          </button>
        </div>

        {project.gallery?.length ? (
          <div className="grid border-b border-slate-800 md:grid-cols-2">
            {project.gallery.map((img, index) => (
              <img
                key={img}
                src={img}
                alt={`${project.title} view ${index + 1}`}
                className={`h-72 w-full object-cover object-top ${index > 1 ? 'md:hidden' : ''}`}
              />
            ))}
          </div>
        ) : null}

        <div className="grid gap-10 p-6 md:p-9 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">Overview</p>
            <p className="mt-3 leading-7 text-slate-300">{project.summary}</p>

            <h3 className="mt-8 font-bold text-white">Engineering challenge</h3>
            <p className="mt-3 leading-7 text-slate-400">{project.challenge}</p>

            <h3 className="mt-8 font-bold text-white">Outcome</h3>
            <p className="mt-3 leading-7 text-slate-400">{project.outcome}</p>
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
                <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex rounded-xl bg-sky-400 px-4 py-2.5 text-sm font-bold text-[#07111f] hover:bg-sky-300">
                  Visit live system ↗
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-bold text-white hover:border-sky-400/50">
                  View source ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
