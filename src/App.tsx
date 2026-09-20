import { useState } from 'react';

const skills = [
  {
    icon: 'code',
    title: 'Rozwiązania low-code',
    text: 'Buduję lekkie aplikacje i narzędzia, które rozwiązują konkretny problem bez niepotrzebnego komplikowania.',
    items: ['Aplikacje wewnętrzne', 'Panele i formularze', 'Szybkie prototypy'],
  },
  {
    icon: 'layers',
    title: 'Automatyzacje',
    text: 'Łączę systemy i upraszczam powtarzalne zadania, żeby codzienna praca zajmowała mniej czasu.',
    items: ['Integracje', 'Przepływy danych', 'Automatyzacja pracy'],
  },
  {
    icon: 'spark',
    title: 'Lepsze procesy',
    text: 'Porządkuję chaotyczne działania i przekładam je na prosty, czytelny proces dla zespołu.',
    items: ['Analiza procesu', 'Projektowanie rozwiązań', 'Optymalizacja'],
  },
];

function Icon({ name }: { name: string }) {
  if (name === 'layers') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m12 3-9 5 9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </svg>
    );
  }

  if (name === 'spark') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function App() {
  const [light, setLight] = useState(false);

  return (
    <div className={light ? 'theme-light min-h-screen' : 'min-h-screen'}>
      <main id="top" className="page-shell min-h-screen overflow-hidden bg-[var(--page)] text-[var(--text)]">
        <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--nav)] backdrop-blur-xl">
          <nav className="mx-auto flex h-[72px] w-[min(1040px,calc(100%-32px))] items-center justify-between" aria-label="Główna nawigacja">
            <a href="#top" className="group flex items-center gap-2.5 font-bold tracking-tight" aria-label="cruthecat — początek strony">
              <span className="grid size-8 place-items-center rounded-lg bg-[var(--accent)] text-sm font-black text-white shadow-[0_0_24px_var(--accent-glow)]">C</span>
              <span className="text-lg">cruthecat<span className="text-[var(--accent-soft)]">.dev</span></span>
            </a>

            <div className="flex items-center gap-1 sm:gap-6">
              <a href="#about" className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)] sm:block">O mnie</a>
              <a href="#skills" className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)] sm:block">Co robię</a>
              <a href="https://github.com/cruthecat" target="_blank" rel="noreferrer" className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)] md:block">GitHub</a>
              <button
                type="button"
                onClick={() => setLight((value) => !value)}
                className="grid size-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[var(--accent)]"
                aria-label={light ? 'Włącz ciemny motyw' : 'Włącz jasny motyw'}
              >
                {light ? '☀' : '☾'}
              </button>
            </div>
          </nav>
        </header>

        <section className="hero-grid relative border-b border-[var(--line)]">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex min-h-[680px] w-[min(1040px,calc(100%-32px))] items-center py-20 sm:min-h-[720px]">
            <div className="w-full max-w-4xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="avatar-ring grid size-20 shrink-0 place-items-center rounded-full sm:size-24">
                  <div className="grid size-[calc(100%-6px)] place-items-center rounded-full bg-[var(--page)] text-2xl font-black text-[var(--text)] sm:text-3xl">CT</div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-sm font-semibold text-[var(--muted)]">
                  <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                  Dostępny do współpracy
                </span>
              </div>

              <h1 className="max-w-4xl text-[clamp(3.1rem,7.3vw,5.6rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">
                Hej, jestem <span className="gradient-text">cruthecat.</span><br />
                Low-Code Developer
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
                Projektuję proste narzędzia, automatyzacje i procesy. Łączę technologię z dobrym doświadczeniem użytkownika, żeby rzeczy po prostu działały.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#skills" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 text-sm font-bold text-white shadow-[0_12px_34px_var(--accent-glow)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]">
                  Zobacz, co robię <Arrow />
                </a>
                <a href="https://github.com/cruthecat" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-6 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-24 sm:py-32">
          <div className="mx-auto w-full max-w-[1040px]">
            <p className="section-kicker">O MNIE</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
              <h2 className="text-[clamp(2.35rem,5vw,4.25rem)] font-extrabold leading-[1.07] tracking-[-0.045em]">
                Buduję cyfrowe rozwiązania, które są <span className="gradient-text">proste w użyciu.</span>
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                <p>Najpierw rozumiem problem, dopiero później dobieram narzędzia. Dzięki temu rozwiązanie wspiera pracę zamiast dodawać kolejną warstwę chaosu.</p>
                <p>Lubię czytelne interfejsy, dobrze poukładane procesy i automatyzacje, których efekt naprawdę widać.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-[var(--line)] bg-[var(--section)] px-4 py-24 sm:py-32">
          <div className="mx-auto w-full max-w-[1040px]">
            <div className="max-w-2xl">
              <p className="section-kicker">CO ROBIĘ</p>
              <h2 className="mt-5 text-[clamp(2.35rem,5vw,4.25rem)] font-extrabold leading-tight tracking-[-0.045em]">Od pomysłu do działającego rozwiązania</h2>
              <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">Skupiam się na trzech obszarach, które pomagają pracować szybciej, prościej i wygodniej.</p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {skills.map((skill) => (
                <article key={skill.title} className="skill-card group rounded-2xl border border-[var(--line)] bg-[var(--card)] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
                  <div className="mb-7 grid size-12 place-items-center rounded-xl bg-[var(--accent-dim)] text-[var(--accent-soft)] transition group-hover:scale-105">
                    <Icon name={skill.icon} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{skill.title}</h3>
                  <p className="mt-4 leading-relaxed text-[var(--muted)]">{skill.text}</p>
                  <ul className="mt-7 space-y-3 border-t border-[var(--line)] pt-6 text-sm font-semibold text-[var(--text-soft)]">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-[var(--accent-soft)]" />{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:py-32">
          <div className="contact-panel relative mx-auto overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--card)] px-6 py-14 sm:px-12 sm:py-16 lg:flex lg:max-w-[1040px] lg:items-end lg:justify-between lg:gap-12">
            <div className="contact-glow" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="section-kicker">KONTAKT</p>
              <h2 className="mt-5 text-[clamp(2.3rem,5vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.045em]">Masz pomysł? Porozmawiajmy.</h2>
              <p className="mt-5 text-lg text-[var(--muted)]">Zajrzyj na mój profil i odezwij się przez GitHub.</p>
            </div>
            <a href="https://github.com/cruthecat" target="_blank" rel="noreferrer" className="relative mt-9 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] lg:mt-0">
              Otwórz GitHub <Arrow />
            </a>
          </div>
        </section>

        <footer className="border-t border-[var(--line)] px-4 py-8">
          <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p><span className="font-bold text-[var(--text)]">cruthecat.dev</span> · Low-Code Developer</p>
            <p>© 2026 · Zbudowane z dbałością o prostotę.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
