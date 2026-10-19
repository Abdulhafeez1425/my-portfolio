import type { Project } from './projects'

export default function ProjectPage({ project }: { project: Project | undefined }) {
  if (!project) {
    return (
      <main className="grid min-h-screen place-items-center px-6 text-center">
        <div>
          <p className="section-label justify-center">Project not found</p>
          <h1 className="section-title mt-5">This page isn’t here.</h1>
          <a className="mt-8 inline-flex rounded-full bg-[#5551e7] px-6 py-3 font-bold text-white" href="/projects">Back to all projects</a>
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[#10162f]">
      <header className="border-b border-[#10162f]/8 bg-white/80">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-3" aria-label="Abdulhafeez Olabisi — home">
            <span className="grid size-9 place-items-center rounded-xl bg-[#5551e7] font-heading text-sm font-bold text-white">AO</span>
            <span className="font-heading text-sm font-bold">Abdulhafeez Olabisi <span className="block text-[10px] font-medium tracking-[.14em] text-[#6b6f80]">PORTFOLIO</span></span>
          </a>
          <a href="/projects" className="text-sm font-bold text-[#5551e7] hover:text-[#10162f]">All projects <span aria-hidden="true">→</span></a>
        </div>
      </header>

      <main id="main-content">
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-28">
          <a href="/projects" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#686c7c] transition hover:text-[#5551e7]"><span aria-hidden="true">←</span> Back to projects</a>
          <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="section-label">{project.category}</p>
              <h1 className="mt-5 font-heading text-[clamp(2.8rem,6vw,5.2rem)] font-bold leading-[.98] tracking-[-.06em]">{project.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#686c7c]">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-[#5551e7]/10 bg-white px-3.5 py-2 text-xs font-bold text-[#4743bd]">{tag}</span>)}</div>
              <a href={project.url} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#5551e7] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(85,81,231,.22)] transition hover:-translate-y-0.5">Visit live project <span aria-hidden="true">↗</span></a>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-[#10162f]/8 bg-white p-2 shadow-[0_24px_70px_rgba(30,35,65,.1)]">
              {project.image ? (
                <img src={project.image} alt={`${project.title} interface`} className="block w-full rounded-[1.2rem] object-cover object-top" />
              ) : (
                <div className="project-visual flex aspect-[1.45] items-end overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-[#dedcff] via-[#f3f1ff] to-[#c9c6ff] p-8 sm:p-12">
                  <div className="w-full rounded-2xl border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur">
                    <p className="text-xs font-bold uppercase tracking-[.15em] text-[#5551e7]">Project preview</p>
                    <p className="mt-3 font-heading text-3xl font-bold tracking-[-.04em]">{project.title}</p>
                    <div className="mt-6 grid grid-cols-3 gap-3">{[0, 1, 2].map((item) => <span key={item} className="h-16 rounded-xl bg-[#5551e7]/10" />)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="border-y border-[#10162f]/6 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.6fr_1.4fr] lg:px-12 lg:py-24">
            <div><p className="section-label">Project notes</p><h2 className="section-title mt-5 text-4xl sm:text-5xl">The thinking<br />behind the work.</h2></div>
            <div className="grid gap-10 sm:grid-cols-2">
              <article><h3 className="font-heading text-xl font-bold">The challenge</h3><p className="mt-4 leading-7 text-[#686c7c]">{project.challenge}</p></article>
              <article><h3 className="font-heading text-xl font-bold">The approach</h3><p className="mt-4 leading-7 text-[#686c7c]">{project.approach}</p></article>
              <article className="sm:col-span-2"><h3 className="font-heading text-xl font-bold">Highlights</h3><ul className="mt-4 grid gap-3 sm:grid-cols-3">{project.highlights.map((highlight) => <li key={highlight} className="rounded-2xl bg-[#f5f4ff] p-5 text-sm font-semibold leading-6 text-[#4743bd]">{highlight}</li>)}</ul></article>
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-12 sm:px-8 lg:px-12">
          <p className="font-heading text-xl font-bold">Have a similar idea in mind?</p>
          <a href="/contact" className="rounded-full border border-[#10162f]/15 bg-white px-6 py-3 text-sm font-bold transition hover:border-[#5551e7] hover:text-[#5551e7]">Let’s talk <span aria-hidden="true">→</span></a>
        </div>
      </main>
    </div>
  )
}
