import { useEffect, useState, type FormEvent } from 'react'
import ProjectPage from './ProjectPage'
import { projects } from './projects'
import profileImage from './assets/profile-img.png'

type IconName = 'arrow' | 'code' | 'external' | 'github' | 'linkedin' | 'mail' | 'pen' | 'people' | 'pin' | 'spark'

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    code: <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-3-9-2 12" />,
    external: <path d="M15 3h6v6m0-6L10 14M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.6S18.2.2 15 2a13.4 13.4 0 0 0-7 0C4.8.2 3.7.6 3.7.6A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4-2" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    spark: <path d="m12 3-1.4 3.8A6 6 0 0 1 7 10.4L3 12l4 1.4a6 6 0 0 1 3.6 3.6l1.4 4 1.4-4a6 6 0 0 1 3.6-3.6l4-1.4-4-1.6a6 6 0 0 1-3.6-3.6Z" />,
  }
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

const navItems = ['Home', 'About', 'Projects', 'Community']
const skills = ['JavaScript', 'Frontend Development', 'Product Research', 'PRD Writing', 'GitHub', 'UI Development', 'Education', 'Writing']
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnResize = () => window.innerWidth >= 768 && setMenuOpen(false)
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(String(data.get('subject') || 'Portfolio enquiry'))
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`)
    window.location.href = `mailto:abdulhafeezolabisi972@gmail.com?subject=${subject}&body=${body}`
  }

  const projectRoute = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)
  if (projectRoute) {
    return <ProjectPage project={projects.find((project) => project.slug === decodeURIComponent(projectRoute[1]))} />
  }

  const activePage = window.location.pathname.replace(/^\/|\/$/g, '') || 'home'
  if (!['home', 'about', 'projects', 'community', 'contact'].includes(activePage)) {
    return (
      <main className="grid min-h-screen place-items-center px-6 text-center text-[#10162f]">
        <div>
          <p className="section-label justify-center">Page not found</p>
          <h1 className="section-title mt-5">This page isn’t here.</h1>
          <a className="mt-8 inline-flex rounded-full bg-[#5551e7] px-6 py-3 font-bold text-white" href="/">Back to home</a>
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbfaf8] text-[#10162f]">
      <a href="#main-content" className="sr-only z-[100] bg-white px-4 py-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#111936]/8 bg-[#fbfaf8]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-3" aria-label="Abdulhafeez Olabisi — home">
            <span className="grid size-9 place-items-center rounded-xl bg-[#5551e7] font-heading text-sm font-bold text-white shadow-[0_6px_18px_rgba(85,81,231,.25)]">AO</span>
            <span className="font-heading text-[15px] font-bold leading-tight tracking-[-.02em]">Abdulhafeez Olabisi <span className="block text-[11px] font-medium tracking-[.14em] text-[#6b6f80]">PORTFOLIO</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} aria-current={activePage === item.toLowerCase() ? 'page' : undefined} className="text-sm font-semibold text-[#565a6a] transition-colors hover:text-[#5551e7]">{item}</a>)}
            <a href="/contact" aria-current={activePage === 'contact' ? 'page' : undefined} className="rounded-full bg-[#10162f] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5551e7]">Contact</a>
          </nav>
          <button type="button" className="grid size-11 place-items-center rounded-xl border border-[#10162f]/10 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            <span className="relative block h-4 w-5"><span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} /><span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} /><span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} /></span>
          </button>
        </div>
        <div id="mobile-menu" className={`grid overflow-hidden bg-[#fbfaf8] transition-[grid-template-rows] duration-300 md:hidden ${menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <nav className="min-h-0" aria-label="Mobile navigation"><div className="flex flex-col gap-1 px-5 pb-5">{[...navItems, 'Contact'].map((item) => <a key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-[#5551e7]/8 hover:text-[#5551e7]">{item}</a>)}</div></nav>
        </div>
      </header>

      <main id="main-content">
        {activePage === 'home' && (
        <section id="home" className="relative mx-auto grid min-h-175.5 max-w-7xl items-center gap-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.17fr_.83fr] lg:px-12 lg:pt-28">
          <div className="relative z-10 animate-reveal">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#5551e7]/15 bg-white px-3.5 py-2 text-xs font-bold text-[#5551e7] shadow-sm"><Icon name="spark" className="size-3.5" />Frontend Developer <span className="text-[#aaa8ce]">•</span> Educator <span className="text-[#aaa8ce]">•</span> Writer</div>
            <p className="mb-4 font-heading text-lg font-semibold text-[#5551e7]">Hello, I’m Abdulhafeez Olabisi.</p>
            <h1 className="max-w-4xl font-heading text-[clamp(3rem,6.4vw,5.8rem)] font-bold leading-[.98] tracking-[-.06em]">Building useful web experiences with thoughtful <span className="text-[#5551e7]">product research.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#616575] sm:text-lg">I turn ideas and user insights into clear product requirements and accessible interfaces—while helping others learn how to build for the web.</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#494e61]"><Icon name="pin" className="size-4 text-[#5551e7]" />University of Ilorin, Nigeria</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/projects" className="group inline-flex items-center gap-3 rounded-full bg-[#5551e7] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(85,81,231,.28)] transition hover:-translate-y-1">View Projects <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#10162f]/15 bg-white px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1 hover:border-[#5551e7] hover:text-[#5551e7]">Contact Me</a>
            </div>
          </div>
          <div className="hero-illustration relative mx-auto w-full max-w-117.5 animate-reveal [animation-delay:150ms]">
            <div className="hero-glow absolute -inset-10 rounded-full bg-[#e4e1ff] blur-3xl" />
            <div className="relative rotate-2 rounded-[2.2rem] border border-white bg-[#e9e7ff] p-3 shadow-[0_30px_80px_rgba(42,38,110,.17)]">
              <div className="relative aspect-[4/4.35] overflow-hidden rounded-[1.65rem] bg-[#5551e7]">
                <img
                  src={profileImage}
                  alt="Image of Abdulhafeez Olabisi"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#10162f]/90 via-[#10162f]/5 to-transparent" />
                <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-[#10162f]/45 px-4 py-2 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
                  <span className="mt-0.5 block text-[10px] font-bold tracking-[.14em] text-white">Abdulhafeez Olabisi</span>
                  <span className="block text-[6px] font-normal uppercase tracking-[.2em] text-white/60">Frontend Developer</span>

                </div>
                <div className="absolute inset-x-8 bottom-8 z-10 text-white">
                  <p className="font-heading text-3xl font-bold leading-tight">Ideas, made useful.</p>
                  <p className="mt-2 text-xs text-white/70">Frontend · Product · People</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {activePage === 'about' && (
        <section id="about" className="border-y border-[#10162f]/6 bg-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32">
            <div><p className="section-label">01 / About me</p><h2 className="section-title mt-5">Curious about<br />people and <span className="text-[#5551e7]">products.</span></h2></div>
            <div className="lg:pt-8">
              <p className="max-w-2xl font-heading text-2xl font-medium leading-relaxed tracking-[-.025em] text-[#242b46] sm:text-3xl">I’m Abdulhafeez Olabisi—a frontend developer who enjoys understanding the “why” before writing the code.</p>
              <p className="mt-7 max-w-2xl leading-8 text-[#686c7c]">I use JavaScript and modern frontend practices to build approachable interfaces. My work also extends into product research and PRD writing: translating market context and user needs into a clear path for development. Away from the editor, I teach, write, collaborate on GitHub, and help new builders grow.</p>
              <div className="mt-9 flex flex-wrap gap-2.5" aria-label="Skills">{skills.map((skill) => <span key={skill} className="rounded-full border border-[#5551e7]/12 bg-[#f5f4ff] px-4 py-2 text-xs font-bold text-[#4743bd]">{skill}</span>)}</div>
            </div>
          </div>
        </section>
        )}

        {activePage === 'projects' && (
        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="section-label">02 / Selected projects</p><h2 className="section-title mt-5">Built with intention.</h2></div><p className="max-w-sm text-sm leading-6 text-[#6b6f80]">Frontend experiments and product work that turn practical ideas into usable experiences.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className={`project-card group flex flex-col overflow-hidden rounded-[1.75rem] border border-[#10162f]/7 bg-white shadow-[0_12px_35px_rgba(30,35,65,.05)] ${project.featured ? 'md:col-span-2 lg:col-span-2 lg:grid lg:grid-cols-[1.08fr_.92fr]' : ''}`}>
                <div className={`project-visual relative aspect-[1.65] overflow-hidden ${project.featured ? 'lg:aspect-auto lg:min-h-[370px]' : ''} ${project.image ? 'bg-white' : 'bg-gradient-to-br from-[#dedcff] via-[#f3f1ff] to-[#c9c6ff]'}`}>
                  {project.image ? <img src={project.image} alt={`${project.title} interface preview`} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]" /> : <div className="absolute inset-x-6 bottom-0 rounded-t-2xl border-x-[6px] border-t-[6px] border-[#242b46] bg-white p-5 shadow-xl sm:inset-x-10 sm:p-7"><span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#5551e7]">{project.category}</span><p className="mt-3 font-heading text-xl font-bold sm:text-2xl">{project.title}</p><div className="mt-5 grid grid-cols-3 gap-2">{[1,2,3].map((item) => <span key={item} className="h-12 rounded-lg bg-[#5551e7]/10" />)}</div></div>}
                  {project.featured && <span className="absolute left-6 top-6 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em]">Featured project</span>}
                </div>
                <div className={`flex flex-1 flex-col p-7 ${project.featured ? 'justify-center sm:p-9' : ''}`}>
                  <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#777a89]">{project.category}</p><h3 className="mt-3 font-heading text-2xl font-bold tracking-[-.03em]">{project.title}</h3><p className="mt-3 text-sm leading-6 text-[#6b6f80]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-[#f4f3f0] px-3 py-1.5 text-[10px] font-bold text-[#626675]">{tag}</span>)}</div>
                  <a href={`/projects/${project.slug}`} className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#5551e7] transition hover:gap-3" aria-label={`Read about ${project.title}`}>View case study <Icon name="arrow" className="size-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </section>
        )}

        {activePage === 'community' && (
        <section id="community" className="bg-[#121831] text-white">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="section-label !text-[#aaa7ff]">03 / Community</p><h2 className="section-title mt-5 !text-white">Learning<br />in public.</h2><p className="mt-7 max-w-md leading-8 text-white/60">Meaningful technology grows from participation, shared knowledge, and strong local communities.</p></div>
              <ol className="relative space-y-5 border-l border-white/15 pl-7 sm:pl-10">
                <li className="relative rounded-[1.75rem] bg-[#5551e7] p-7 sm:p-8"><span className="absolute -left-[2.25rem] top-9 size-3 rounded-full bg-[#aaa7ff] ring-[6px] ring-[#121831] sm:-left-[2.75rem]" /><p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/60">Coordination · Youth education</p><h3 className="mt-3 font-heading text-2xl font-bold">Skill Them Young participant assessment</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">Coordinated a participant assessment process, supporting a structured and fair learning experience for young people building practical skills.</p></li>
                <li className="relative rounded-[1.75rem] bg-white/7 p-7 ring-1 ring-white/8 sm:p-8"><span className="absolute -left-[2.25rem] top-9 size-3 rounded-full bg-[#f4aa70] ring-[6px] ring-[#121831] sm:-left-[2.75rem]" /><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f4aa70]">Community · Creative technology</p><h3 className="mt-3 font-heading text-2xl font-bold">Osogbo Game Dev &amp; 3D Creators Network launch</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">Attended the network launch and connected with developers and 3D creators growing the creative technology ecosystem in Osogbo.</p></li>
              </ol>
            </div>
          </div>
        </section>
        )}

        {activePage === 'contact' && (
        <section id="contact" className="relative overflow-hidden">
          <div className="absolute -left-32 top-0 size-80 rounded-full bg-[#e9e7ff] blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32">
            <div><p className="section-label">04 / Contact</p><h2 className="section-title mt-5">Let’s make something <span className="text-[#5551e7]">useful.</span></h2><p className="mt-7 max-w-md leading-7 text-[#6b6f80]">Have a project, research question, or learning initiative in mind? Send a message and let’s start a thoughtful conversation.</p>
              <div className="mt-9 space-y-3">
                <a href="mailto:abdulhafeezolabisi972@gmail.com" className="contact-link"><Icon name="mail" /> <span>abdulhafeezolabisi972@gmail.com</span></a>
                <a href="https://github.com/Abdulhafeez1425" target="_blank" rel="noreferrer" className="contact-link"><Icon name="github" /> <span>github.com/Abdulhafeez1425</span></a>
                <a href="https://www.linkedin.com/in/abdulhafeez-olabisi-07241a244" target="_blank" rel="noreferrer" className="contact-link"><Icon name="linkedin" /> <span>Connect on LinkedIn</span></a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#10162f]/7 bg-white p-6 shadow-[0_24px_70px_rgba(30,35,65,.09)] sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Name<input className="form-input" type="text" name="name" autoComplete="name" required placeholder="Your name" /></label><label className="form-label">Email<input className="form-input" type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
              <label className="form-label mt-5">Subject<input className="form-input" type="text" name="subject" required placeholder="What would you like to discuss?" /></label>
              <label className="form-label mt-5">Message<textarea className="form-input min-h-36 resize-y" name="message" required placeholder="Tell me a little about your idea..." /></label>
              <button type="submit" className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#5551e7] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(85,81,231,.22)] transition hover:-translate-y-1 hover:bg-[#4541ce]">Send Message <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></button>
              <p className="mt-4 text-xs leading-5 text-[#858894]">Submitting opens your email app with your message ready to send.</p>
            </form>
          </div>
        </section>
        )}
      </main>

      <footer className="border-t border-[#10162f]/8 bg-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 text-center sm:px-8 md:flex-row md:text-left lg:px-12"><div><p className="font-heading text-sm font-bold">Abdulhafeez Olabisi</p><p className="mt-1 text-xs text-[#858894]">Frontend Developer · Educator · Writer</p></div><div className="flex gap-3"><a href="https://github.com/Abdulhafeez1425" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="social-link"><Icon name="github" className="size-4" /></a><a href="https://www.linkedin.com/in/abdulhafeez-olabisi-07241a244" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="social-link"><Icon name="linkedin" className="size-4" /></a><a href="mailto:abdulhafeezolabisi972@gmail.com" aria-label="Email Abdulhafeez Olabisi" className="social-link"><Icon name="mail" className="size-4" /></a></div><p className="text-xs text-[#858894]">© {new Date().getFullYear()} Abdulhafeez Olabisi</p></div></footer>
    </div>
  )
}
