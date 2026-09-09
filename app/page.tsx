import { ArrowRight, Code2, Layers3, Workflow, Zap } from 'lucide-react';
import Image from 'next/image';

const areas = [
  {
    icon: <Workflow aria-hidden="true" />,
    number: '01',
    title: 'Automatyzacje',
    text: 'Mniej ręcznej pracy. Więcej rzeczy, które dzieją się same.',
    className: 'area-card area-violet',
  },
  {
    icon: <Layers3 aria-hidden="true" />,
    number: '02',
    title: 'Low-code',
    text: 'Szybkie aplikacje dopasowane do prawdziwego procesu.',
    className: 'area-card area-lime',
  },
  {
    icon: <Zap aria-hidden="true" />,
    number: '03',
    title: 'Prosty UX',
    text: 'Interfejs, którego nie trzeba tłumaczyć instrukcją.',
    className: 'area-card area-coral',
  },
];

export default function Home() {
  return (
    <main id="top">
      <div className="shell">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="cruthecat — początek strony">
            <span className="brand-icon"><Code2 aria-hidden="true" /></span>
            <span>cruthecat</span>
          </a>
          <nav aria-label="Nawigacja strony">
            <a href="#about">O mnie</a>
            <a href="#areas">Obszary</a>
            <a className="github-link" href="https://github.com/cruthecat" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>

        <section className="bento-hero" aria-labelledby="hero-title">
          <article className="hero-card">
            <div className="hero-card-top">
              <p><span /> Low-Code Developer</p>
              <span>PL</span>
            </div>
            <div>
              <p className="hero-note">Cześć, jestem cruthecat.</p>
              <h1 id="hero-title">Buduję<br /><em>prościej.</em></h1>
            </div>
            <div className="hero-bottom">
              <p>Porządkuję procesy i zamieniam je w lekkie, działające narzędzia.</p>
              <a className="round-button" href="#areas" aria-label="Zobacz obszary pracy">
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="portrait-card">
            <Image src="/cruthecat.png" width={900} height={900} priority alt="Czarny kot — znak cruthecat" />
            <div className="portrait-shade" />
            <div className="portrait-label">
              <span>CRUTHECAT</span>
              <span>LOW-CODE / UX</span>
            </div>
          </article>

          <article className="signal-card">
            <span className="signal-pulse" aria-hidden="true" />
            <p>TRYB PRACY</p>
            <strong>Pomysł → prototyp → działające rozwiązanie</strong>
          </article>

          <article className="focus-card">
            <div className="focus-head">
              <span>AKTUALNY FOCUS</span>
              <Code2 aria-hidden="true" />
            </div>
            <div className="focus-tags">
              <span>automatyzacja</span>
              <span>workflow</span>
              <span>low-code</span>
              <span>integracje</span>
            </div>
          </article>
        </section>

        <section className="areas" id="areas">
          <div className="section-heading">
            <p>CO ROBIĘ</p>
            <h2>Trzy obszary.<br />Jeden cel.</h2>
          </div>
          <div className="area-grid">
            {areas.map((area) => (
              <article className={area.className} key={area.number}>
                <div className="area-top">
                  {area.icon}
                  <span>{area.number}</span>
                </div>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-grid" id="about">
          <article className="about-card">
            <p className="card-kicker">O MNIE</p>
            <h2>Technologia ma zdejmować problemy z głowy.</h2>
            <p className="about-copy">
              Łączę logikę, narzędzia low-code i wyczucie interfejsu. Najbardziej
              lubię moment, w którym chaotyczny proces zaczyna działać jak prosty system.
            </p>
          </article>

          <article className="rule-card">
            <p className="card-kicker">ZASADA</p>
            <blockquote>Jeśli rozwiązanie trzeba długo tłumaczyć, nadal można je uprościć.</blockquote>
            <div className="rule-line"><span /><span /><span /></div>
          </article>
        </section>

        <section className="contact-card" id="contact">
          <div>
            <p className="card-kicker">MASZ POMYSŁ?</p>
            <h2>Zbudujmy coś,<br />co robi robotę.</h2>
          </div>
          <a className="contact-button" href="https://github.com/cruthecat" target="_blank" rel="noreferrer">
            Otwórz GitHub <ArrowRight aria-hidden="true" />
          </a>
        </section>

        <footer>
          <a className="brand footer-brand" href="#top"><span>cruthecat</span></a>
          <p>Low-Code Developer · © 2026</p>
          <a href="#top">Do góry ↑</a>
        </footer>
      </div>
    </main>
  );
}
