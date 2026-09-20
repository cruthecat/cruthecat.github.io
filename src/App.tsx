const services = [
  {
    id: '01',
    title: 'AUTOMATYZACJE',
    text: 'Łączę narzędzia i usuwam powtarzalne czynności z codziennej pracy.',
    style: 'bg-[#0b0d12] text-white',
    badge: 'bg-[#e9ff66] text-[#0b0d12]',
  },
  {
    id: '02',
    title: 'APLIKACJE',
    text: 'Buduję lekkie rozwiązania low-code dopasowane do realnego procesu.',
    style: 'bg-[#e9ff66] text-[#0b0d12]',
    badge: 'bg-[#0b0d12] text-white',
  },
  {
    id: '03',
    title: 'PROCESY',
    text: 'Porządkuję przepływy tak, żeby były prostsze dla ludzi i biznesu.',
    style: 'bg-white text-[#0b0d12]',
    badge: 'bg-[#345cff] text-white',
  },
];

const ticker = ['LOW-CODE', 'AUTOMATION', 'WORKFLOWS', 'UX', 'INTEGRATIONS'];

function Arrow() {
  return <span aria-hidden="true" className="text-xl leading-none">↗</span>;
}

export default function App() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#345cff] text-[#0b0d12] selection:bg-[#e9ff66]">
      <div className="grid-bg">
        <header className="mx-auto flex min-h-24 w-[min(1320px,calc(100%-32px))] items-center justify-between gap-6 border-b-2 border-[#0b0d12]">
          <a href="#top" className="flex items-center gap-3 font-black tracking-[-0.04em]" aria-label="cruthecat — początek strony">
            <span className="grid size-11 place-items-center bg-[#0b0d12] text-sm text-[#e9ff66]">CT</span>
            <span className="text-lg">cruthecat</span>
          </a>
          <nav className="flex items-center gap-3 text-sm font-bold" aria-label="Nawigacja strony">
            <a href="#about" className="hidden px-3 py-3 hover:underline sm:block">O MNIE</a>
            <a href="#services" className="hidden px-3 py-3 hover:underline sm:block">USŁUGI</a>
            <a href="https://github.com/cruthecat" target="_blank" rel="noreferrer" className="flex items-center gap-3 border-2 border-[#0b0d12] bg-white px-5 py-3 shadow-[4px_4px_0_#0b0d12] transition-transform hover:-translate-y-1">
              GITHUB <Arrow />
            </a>
          </nav>
        </header>

        <section className="mx-auto grid w-[min(1320px,calc(100%-32px))] gap-8 py-14 lg:grid-cols-[1.35fr_.65fr] lg:items-end lg:py-24">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs font-bold tracking-[0.16em]">
              <span className="size-3 animate-pulse rounded-full bg-[#e9ff66] ring-4 ring-[#0b0d12]" />
              LOW-CODE DEVELOPER / POLSKA
            </div>
            <h1 className="display text-[clamp(4.1rem,11.5vw,10.5rem)] leading-[0.76] tracking-[-0.085em]">
              ROBIĘ<br />RZECZY
              <span className="mt-3 block w-fit -rotate-2 bg-[#e9ff66] px-4 pb-3 pt-1 text-[0.61em] leading-none shadow-[9px_9px_0_#0b0d12]">PROŚCIEJ.</span>
            </h1>
          </div>

          <aside className="border-2 border-[#0b0d12] bg-white p-6 shadow-[10px_10px_0_#0b0d12] lg:mb-1 lg:p-8">
            <div className="mb-12 flex items-start justify-between font-mono text-xs font-bold">
              <span>PROFILE_01</span>
              <span className="bg-[#0b0d12] px-3 py-1 text-white">ONLINE</span>
            </div>
            <p className="text-xl font-bold leading-snug sm:text-2xl">
              Zamieniam skomplikowane procesy w proste narzędzia, automatyzacje i aplikacje.
            </p>
            <a href="#services" className="mt-9 flex min-h-14 items-center justify-between border-t-2 border-[#0b0d12] pt-5 text-sm font-black">
              ZOBACZ, CO ROBIĘ <Arrow />
            </a>
          </aside>
        </section>
      </div>

      <div className="overflow-hidden border-y-2 border-[#0b0d12] bg-[#0b0d12] py-4 text-white" aria-label="Obszary specjalizacji">
        <div className="ticker-track flex w-max items-center gap-8 font-mono text-sm font-bold tracking-[0.14em]">
          {[...ticker, ...ticker].map((item, index) => (
            <span className="flex items-center gap-8" key={`${item}-${index}`}>
              {item}<i className="not-italic text-[#e9ff66]">✦</i>
            </span>
          ))}
        </div>
      </div>

      <section id="about" className="bg-[#f3f0e8] px-4 py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1320px] gap-14 lg:grid-cols-[.55fr_1.45fr]">
          <div className="font-mono text-xs font-bold tracking-[0.16em]">01 / O MNIE</div>
          <div>
            <h2 className="display max-w-5xl text-[clamp(3.1rem,7vw,7.5rem)] leading-[0.87] tracking-[-0.075em]">
              TECHNOLOGIA MA POMAGAĆ, <span className="text-[#345cff]">NIE PRZESZKADZAĆ.</span>
            </h2>
            <div className="mt-14 grid gap-8 border-t-2 border-[#0b0d12] pt-8 text-base leading-relaxed text-[#44464d] sm:grid-cols-2 sm:text-lg">
              <p>Porządkuję chaotyczne procesy i skracam drogę od pomysłu do działającego rozwiązania.</p>
              <p>Łączę logikę, low-code i dobry UX. Bez zbędnych warstw, prezentacji i komplikowania.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f3f0e8] px-4 pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="mb-10 flex items-end justify-between gap-6 border-b-2 border-[#0b0d12] pb-6">
            <p className="font-mono text-xs font-bold tracking-[0.16em]">02 / CO ROBIĘ</p>
            <p className="max-w-sm text-right text-sm font-semibold text-[#56585f]">Trzy obszary, w których najczęściej zamieniam chaos w konkretny efekt.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.id} className={`${service.style} flex min-h-[390px] flex-col justify-between border-2 border-[#0b0d12] p-7 shadow-[7px_7px_0_#0b0d12] transition-transform hover:-translate-y-2 sm:p-9`}>
                <div className="flex items-start justify-between">
                  <span className={`${service.badge} px-3 py-2 font-mono text-xs font-bold`}>{service.id}</span>
                  <span className="text-3xl" aria-hidden="true">✦</span>
                </div>
                <div>
                  <h3 className="display text-4xl tracking-[-0.06em] sm:text-5xl">{service.title}</h3>
                  <p className="mt-5 max-w-sm text-base font-semibold leading-relaxed opacity-75">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9ff66] px-4 py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1320px] gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-8 font-mono text-xs font-bold tracking-[0.16em]">03 / KONTAKT</p>
            <h2 className="display text-[clamp(3.5rem,9vw,9rem)] leading-[0.82] tracking-[-0.085em]">MASZ POMYSŁ?<br />ZRÓBMY GO.</h2>
          </div>
          <a href="https://github.com/cruthecat" target="_blank" rel="noreferrer" className="flex min-h-20 min-w-64 items-center justify-between gap-8 border-2 border-[#0b0d12] bg-[#345cff] px-7 font-black text-white shadow-[8px_8px_0_#0b0d12] transition-transform hover:-translate-y-2">
            OTWÓRZ GITHUB <Arrow />
          </a>
        </div>
      </section>

      <footer className="bg-[#0b0d12] px-4 py-8 text-white">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-5 text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="text-lg font-black">cruthecat.</a>
          <p className="m-0 text-[#8f939f]">LOW-CODE DEVELOPER · © 2026</p>
          <a href="#top" className="hover:text-[#e9ff66]">DO GÓRY ↑</a>
        </div>
      </footer>
    </main>
  );
}
