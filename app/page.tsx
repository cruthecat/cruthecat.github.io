import { ArrowRight, Code2, Workflow } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    number: '01',
    title: 'Automatyzacje',
    text: 'Łączę narzędzia i usuwam powtarzalne kroki z codziennej pracy.',
  },
  {
    number: '02',
    title: 'Aplikacje low-code',
    text: 'Buduję lekkie rozwiązania, które szybko przechodzą od pomysłu do użycia.',
  },
  {
    number: '03',
    title: 'Dobry przepływ',
    text: 'Porządkuję procesy tak, aby były zrozumiałe dla ludzi i łatwe w utrzymaniu.',
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="cruthecat — początek strony">
          <span className="brand-mark"><Code2 aria-hidden="true" /></span>
          cruthecat<span>.</span>
        </a>
        <nav aria-label="Nawigacja strony">
          <a href="#about">O mnie</a>
          <a href="#work">Co robię</a>
          <a className="nav-cta" href="#contact">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Low-Code Developer</p>
          <h1>Proste rozwiązania.<br /><em>Mniej klikania.</em></h1>
          <p className="hero-lead">
            Zamieniam złożone procesy w czytelne narzędzia, automatyzacje
            i aplikacje, z których po prostu dobrze się korzysta.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Zobacz, co robię <ArrowRight aria-hidden="true" />
            </a>
            <a className="text-link" href="https://github.com/cruthecat" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="portrait-card">
          <div className="portrait-top">
            <span>CRUTHECAT</span>
            <span>PL / 2026</span>
          </div>
          <div className="portrait-frame">
            <Image src="/cruthecat.png" width={900} height={900} priority alt="Czarny kot — znak cruthecat" />
          </div>
          <div className="portrait-bottom">
            <span className="status-dot" />
            <p>Buduję rzeczy, które upraszczają pracę.</p>
          </div>
        </div>
      </section>

      <div className="skill-strip" aria-label="Obszary pracy">
        <span>LOW-CODE</span><i>+</i><span>AUTOMATION</span><i>+</i>
        <span>WORKFLOWS</span><i>+</i><span>UX</span><i>+</i><span>API</span>
      </div>

      <section className="about section" id="about">
        <div className="section-label">01 / O MNIE</div>
        <div className="about-content">
          <h2>Technologia ma pomagać.<br />Nie przeszkadzać.</h2>
          <div className="about-text">
            <p>
              Lubię brać na warsztat procesy, które są zbyt długie, chaotyczne
              albo zależne od ręcznej pracy — i układać je od nowa.
            </p>
            <p>
              Łączę logikę, low-code i wyczucie interfejsu. Efekt ma być prosty,
              szybki i gotowy do użycia, a nie tylko dobrze wyglądać na prezentacji.
            </p>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-label">02 / CO ROBIĘ</div>
        <div className="work-heading">
          <h2>Od pomysłu<br />do działania.</h2>
          <Workflow aria-hidden="true" />
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ArrowRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow"><span /> Masz pomysł?</p>
        <h2>Zróbmy z niego<br /><em>działające rozwiązanie.</em></h2>
        <a className="button button-dark" href="https://github.com/cruthecat" target="_blank" rel="noreferrer">
          Napisz do mnie na GitHubie <ArrowRight aria-hidden="true" />
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span>cruthecat.</span></a>
        <p>Low-Code Developer · Polska</p>
        <a href="#top">Do góry ↑</a>
      </footer>
    </main>
  );
}
