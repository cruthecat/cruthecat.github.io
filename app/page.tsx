'use client';

import { ArrowUpRight, Check, Code2, Copy, Sparkles } from 'lucide-react';
import { useState } from 'react';

const details = [
  { number: '01', label: 'Kod', text: 'prosto, szybko, bez zbędnego hałasu' },
  { number: '02', label: 'Design', text: 'charakter zamiast gotowych schematów' },
  { number: '03', label: 'Eksperymenty', text: 'bo najlepsze rzeczy zaczynają się od „a co jeśli?”' },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyHandle = async () => {
    await navigator.clipboard.writeText('cruthecat');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <nav className="topbar" aria-label="Główna nawigacja">
        <a className="wordmark" href="#top" aria-label="cruthecat — początek strony">
          cruthecat<span>.</span>
        </a>
        <div className="status"><span aria-hidden="true" /> somewhere online</div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} aria-hidden="true" /> internet creature / 2026</p>
          <h1>
            Robię rzeczy<br />
            <span>w sieci.</span>
          </h1>
          <p className="intro">
            Kod, design i odrobina kontrolowanego chaosu. Buduję rzeczy,
            które dobrze wyglądają i jeszcze lepiej działają.
          </p>
          <div className="actions">
            <a className="primary-button" href="https://github.com/cruthecat" target="_blank" rel="noreferrer">
              <Code2 size={19} aria-hidden="true" /> Zobacz GitHub <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <button className="copy-button" type="button" onClick={copyHandle} aria-live="polite">
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              {copied ? 'Skopiowano!' : 'Kopiuj nick'}
            </button>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Portret czarnego kota — znak cruthecat">
          <div className="portrait-frame">
            <img src="./cruthecat.png" alt="Czarny kot z neonowym zielonym okiem" />
            <span className="portrait-tag">keep it curious</span>
          </div>
          <span className="orbit orbit-one" aria-hidden="true" />
          <span className="orbit orbit-two" aria-hidden="true" />
        </div>
      </section>

      <section className="details" aria-label="O cruthecat">
        {details.map((item) => (
          <article className="detail-card" key={item.number}>
            <span className="detail-number">{item.number}</span>
            <div>
              <h2>{item.label}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <footer>
        <p>cruthecat © 2026</p>
        <p>built after midnight <span aria-hidden="true">↗</span></p>
      </footer>
    </main>
  );
}
