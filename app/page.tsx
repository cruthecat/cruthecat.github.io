'use client';

import { ArrowDownRight, ArrowUpRight, Check, Copy, MoveRight } from 'lucide-react';
import { useState } from 'react';

const specialties = [
  {
    index: '01',
    title: 'Low-Code',
    text: 'Pomysły szybko zamieniam w działające rozwiązania — bez zbędnego komplikowania.',
  },
  {
    index: '02',
    title: 'Integracje',
    text: 'Łączę narzędzia i procesy tak, żeby technologia po prostu robiła swoją robotę.',
  },
  {
    index: '03',
    title: 'Dobry UX',
    text: 'Dbam o jasny przepływ, czytelny interfejs i detale, które robią różnicę.',
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyHandle = async () => {
    await navigator.clipboard.writeText('cruthecat');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main id="top">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="cruthecat — początek strony">
          <span className="brand-mark">C/</span>
          <span>cruthecat</span>
        </a>
        <div className="nav-meta">
          <span className="available"><i aria-hidden="true" /> online</span>
          <a href="#profil">profil</a>
          <a href="#specjalizacje">specjalizacje</a>
        </div>
      </header>

      <section className="hero" id="profil">
        <aside className="hero-rail" aria-hidden="true">
          <span>LOW—CODE / DIGITAL BUILDER</span>
          <span>2026</span>
        </aside>

        <div className="hero-copy">
          <div className="kicker">
            <span className="prompt">~/</span>
            <span>Low-Code Developer</span>
          </div>
          <h1 aria-label="cruthecat">
            <span>CRUTHE</span>
            <span className="accent-line">CAT<i>.</i></span>
          </h1>
          <p className="lead">
            Projektuję i buduję cyfrowe rozwiązania, które są
            <strong> szybkie, konkretne i przyjemne w użyciu.</strong>
          </p>
          <div className="actions">
            <a className="cta" href="https://github.com/cruthecat" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <button className="copy-action" type="button" onClick={copyHandle} aria-live="polite">
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              {copied ? 'Nick skopiowany' : 'Kopiuj @cruthecat'}
            </button>
          </div>
        </div>

        <div className="visual">
          <div className="visual-code" aria-hidden="true">IMG_001<br />SUBJECT: CAT<br />STATUS: ACTIVE</div>
          <figure className="portrait">
            <img src="./cruthecat.png" alt="Czarny kot z neonowym zielonym okiem" />
            <div className="scanline" aria-hidden="true" />
            <figcaption>
              <span>IDENTITY / 01</span>
              <span>KEEP IT CURIOUS</span>
            </figcaption>
          </figure>
          <div className="cross cross-a" aria-hidden="true" />
          <div className="cross cross-b" aria-hidden="true" />
        </div>

        <a className="scroll-cue" href="#specjalizacje">
          przewiń <ArrowDownRight size={18} aria-hidden="true" />
        </a>
      </section>

      <section className="specialties" id="specjalizacje">
        <div className="section-heading">
          <p><span>//</span> jak pracuję</p>
          <h2>Mniej tarcia.<br />Więcej efektu.</h2>
        </div>

        <div className="specialty-list">
          {specialties.map((item) => (
            <article className="specialty" key={item.index}>
              <span className="specialty-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <MoveRight className="specialty-arrow" size={28} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="footer-link" href="https://github.com/cruthecat" target="_blank" rel="noreferrer">
          ZNAJDŹ MNIE NA GITHUBIE <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="footer-meta">
          <span>cruthecat © 2026</span>
          <span>built in the dark</span>
        </div>
      </footer>
    </main>
  );
}
