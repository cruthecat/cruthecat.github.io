'use client';

import { ArrowRight, Check, Code2, Copy, Mail, Workflow } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ticker = [
  'LOW-CODE', 'AUTOMATION', 'API', 'WORKFLOWS', 'UX', 'INTEGRATIONS',
  'LOW-CODE', 'AUTOMATION', 'API', 'WORKFLOWS', 'UX', 'INTEGRATIONS',
];

const services = [
  {
    icon: <Workflow aria-hidden="true" />,
    title: 'Procesy, które płyną',
    text: 'Porządkuję kroki, łączę narzędzia i zamieniam ręczną pracę w sprawny workflow.',
  },
  {
    icon: <Code2 aria-hidden="true" />,
    title: 'Rozwiązania low-code',
    text: 'Buduję szybkie, praktyczne aplikacje bez dokładania technologii tam, gdzie nie jest potrzebna.',
  },
  {
    icon: <ArrowRight aria-hidden="true" />,
    title: 'Prosty dobry UX',
    text: 'Każdy ekran i każda akcja mają jasny cel — użytkownik nie musi się niczego domyślać.',
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
    <main id="home">
      <header className="navbar">
        <a className="logo" href="#home" aria-label="cruthecat — początek strony">
          <Code2 aria-hidden="true" /> <span>cruthecat</span>
        </a>
        <nav aria-label="Nawigacja strony">
          <a href="#about">O mnie</a>
          <a href="#skills">Specjalizacje</a>
          <a href="#projects">Projekty</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="hello">Hello World! Jestem</p>
          <h1>cruthecat<span>.</span></h1>
          <p className="hero-lead">
            Low-Code Developer, który łączy technologię, automatyzację i dobry UX.
            Zamieniam złożone procesy w proste, działające rozwiązania.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="#projects">
              <Code2 size={18} aria-hidden="true" /> Zobacz projekty
            </a>
            <a className="button button-outline" href="https://github.com/cruthecat" target="_blank" rel="noreferrer">
              <Code2 size={18} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <div className="workspace-wrap" aria-label="Cyfrowy workspace cruthecat">
          <span className="glow glow-purple" aria-hidden="true" />
          <span className="glow glow-green" aria-hidden="true" />
          <div className="workspace-window">
            <div className="window-bar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>cruthecat@lowcode-workspace</span>
              <span className="window-state">● connected</span>
            </div>
            <div className="workspace-body">
              <div className="terminal-pane">
                <div className="avatar-shell">
                  <Image src="/cruthecat.png" width={400} height={400} alt="Czarny kot z neonowym zielonym okiem" />
                </div>
                <div className="terminal-profile">
                  <p><span>user</span> cruthecat</p>
                  <p><span>role</span> Low-Code Developer</p>
                  <p><span>status</span> building things</p>
                  <p><span>mode</span> curious</p>
                </div>
              </div>
              <div className="code-pane" aria-label="Przykładowy opis pracy">
                <div><b>01</b><span className="code-pink">const</span> builder = {'{'}</div>
                <div><b>02</b>&nbsp;&nbsp;focus: <span className="code-yellow">{"'useful products'"}</span>,</div>
                <div><b>03</b>&nbsp;&nbsp;tools: [<span className="code-yellow">{"'low-code'"}</span>, <span className="code-yellow">{"'APIs'"}</span>],</div>
                <div><b>04</b>&nbsp;&nbsp;approach: <span className="code-yellow">{"'keep it simple'"}</span>,</div>
                <div><b>05</b>&nbsp;&nbsp;ship: <span className="code-blue">true</span></div>
                <div><b>06</b>{'}'};</div>
                <div className="code-empty"><b>07</b></div>
                <div><b>08</b><span className="code-green">{'// idea → working solution'}</span><i className="cursor" /></div>
              </div>
            </div>
          </div>
          <div className="workspace-base" aria-hidden="true" />
        </div>
      </section>

      <div className="ticker" aria-label="Obszary pracy">
        <div className="ticker-track">
          {ticker.map((item, index) => (
            <span key={`${item}-${index}`}><i aria-hidden="true">◆</i>{item}</span>
          ))}
        </div>
      </div>

      <section className="about" id="about">
        <div className="section-intro">
          <p className="section-kicker">{'// profile.md'}</p>
          <h2>O <span>mnie</span></h2>
          <p>Technologia ma zdejmować problemy z głowy, a nie tworzyć nowe.</p>
        </div>

        <div className="about-card">
          <div className="about-visual">
            <Image src="/cruthecat.png" width={900} height={900} alt="Portret czarnego kota — symbol cruthecat" />
            <div className="image-label"><span>CRUTHECAT</span><span>LOW-CODE DEV</span></div>
          </div>
          <div className="about-copy">
            <span className="comment">{'/* kim jestem */'}</span>
            <h3>Buduję szybciej.<br />Myślę szerzej.</h3>
            <p>
              Łączę logikę, narzędzia low-code i dobry design. Najbardziej lubię moment,
              w którym chaotyczny pomysł zaczyna działać jak prosty, dobrze ułożony system.
            </p>
            <p>
              Stawiam na konkret: mniej zbędnych warstw, krótsza droga od pomysłu do efektu
              i rozwiązania, które można naprawdę wykorzystać.
            </p>
            <button className="copy-nick" type="button" onClick={copyHandle} aria-live="polite">
              {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              {copied ? 'Skopiowano @cruthecat' : 'Kopiuj @cruthecat'}
            </button>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="section-intro compact">
          <p className="section-kicker">{'// services.json'}</p>
          <h2>Co <span>robię</span></h2>
          <p>Trzy rzeczy, które trzymają moje projekty w ryzach.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-intro projects-intro">
          <p className="section-kicker">{'// selected-work.ts'}</p>
          <h2>Wybrany <span>projekt</span></h2>
          <p>Rzeczy, które wyszły poza etap pomysłu i trafiły do użytkowników.</p>
        </div>

        <article className="project-card">
          <div className="project-preview" aria-hidden="true">
            <div className="project-preview-top">
              <span>WPP</span>
              <span>ADDON / PL</span>
            </div>
            <div className="project-mark">
              <span>WoW</span>
              <strong>Po Polsku</strong>
              <b>2.0</b>
            </div>
            <div className="project-console">
              <span>locale</span><strong>pl_PL</strong>
              <span>status</span><strong>online</strong>
            </div>
          </div>

          <div className="project-copy">
            <div className="project-meta">
              <span>01 / FEATURED</span>
              <span className="live-dot">Aktywny projekt</span>
            </div>
            <h3>WoW Po Polsku <span>2.0</span></h3>
            <p>
              Polski projekt tłumaczeniowy dla World of Warcraft. Miejsce dla graczy,
              którzy chcą odkrywać Azeroth po polsku i być blisko rozwoju projektu.
            </p>
            <div className="project-tags" aria-label="Kategorie projektu">
              <span>World of Warcraft</span>
              <span>Polska lokalizacja</span>
              <span>Community</span>
            </div>
            <a className="project-link" href="https://pl.wowtranslateproject.org/" target="_blank" rel="noreferrer">
              Odwiedź WoW Po Polsku <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </article>
      </section>

      <section className="contact" id="contact">
        <div className="contact-code" aria-hidden="true">while (idea) {'{'} build(); test(); improve(); {'}'}</div>
        <h2>Masz pomysł?<br /><span>Zbudujmy go.</span></h2>
        <p>Najłatwiej znajdziesz mnie na GitHubie.</p>
        <a className="button button-solid contact-button" href="https://github.com/cruthecat" target="_blank" rel="noreferrer">
          <Mail size={18} aria-hidden="true" /> Otwórz profil <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>

      <footer>
        <a className="logo footer-logo" href="#home"><Code2 aria-hidden="true" /> cruthecat</a>
        <p>Low-Code Developer · © 2026</p>
        <a href="#home">Wróć na górę ↑</a>
      </footer>
    </main>
  );
}
