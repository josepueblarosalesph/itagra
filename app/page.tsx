import Image from "next/image";

const projectFacts = [
  { value: "5.000", unit: "m²", label: "Parcelas totalmente planas" },
  { value: "30", unit: "min", label: "Desde Viña del Mar" },
  { value: "90", unit: "min", label: "Desde Santiago" },
  { value: "2.250", unit: "UF", label: "Valores desde" },
];

const qualities = [
  {
    number: "01",
    title: "Tierra que se proyecta",
    text: "Seleccionamos ubicaciones con potencial, conectividad y una relación auténtica con su entorno.",
  },
  {
    number: "02",
    title: "Certeza desde el origen",
    text: "Proyectos claros, con infraestructura resuelta y antecedentes que entregan tranquilidad al decidir.",
  },
  {
    number: "03",
    title: "Una mejor forma de habitar",
    text: "Espacios para vivir con más calma, naturaleza y libertad, sin renunciar a la cercanía de la ciudad.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Itagra, inicio">
          <Image src="/images/itagra-logo.png" alt="Itagra Parcelas de Agrado" width={194} height={80} priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#itagra">Nosotros</a>
          <a href="#proyecto">Proyecto</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="https://pircasdelliulliu.cl" target="_blank" rel="noreferrer">
          Conocer Pircas <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><span></span><span></span></summary>
          <nav aria-label="Navegación móvil">
            <a href="#itagra">Nosotros</a>
            <a href="#proyecto">Proyecto</a>
            <a href="#contacto">Contacto</a>
            <a href="https://pircasdelliulliu.cl" target="_blank" rel="noreferrer">Conocer Pircas ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <Image className="hero-image" src="/images/pircas-aerial.jpeg" alt="Vista aérea de los terrenos y cerros de Lliu Lliu" fill priority sizes="100vw" />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow light"><span /> Parcelas de agrado · Región de Valparaíso</p>
          <h1>Tierra para vivir<br />lo que importa.</h1>
          <p className="hero-copy">Desarrollamos proyectos que conectan naturaleza, tranquilidad y futuro en lugares elegidos con propósito.</p>
          <a className="circle-link" href="#proyecto" aria-label="Descubrir primer proyecto">
            <span>Descubrir<br />proyecto</span><b aria-hidden="true">↓</b>
          </a>
        </div>
        <div className="hero-index"><span>Primer proyecto</span><strong>01</strong></div>
      </section>

      <section className="intro" id="itagra">
        <div className="section-label"><span>01</span><p>Quiénes somos</p></div>
        <div className="intro-copy">
          <p className="kicker">Una mirada distinta sobre la tierra</p>
          <h2>En Itagra creemos que elegir dónde vivir es también elegir <em>cómo queremos vivir.</em></h2>
          <div className="intro-bottom">
            <p>Creamos parcelas de agrado con identidad, infraestructura y una conexión honesta con el paisaje. Proyectos pensados para disfrutar hoy y proyectarse hacia mañana.</p>
            <Image src="/images/itagra-mark.png" alt="Símbolo Itagra" width={126} height={126} />
          </div>
        </div>
      </section>

      <section className="project" id="proyecto">
        <div className="project-photo">
          <Image src="/images/pircas-fields.jpeg" alt="Parcelas planas en Pircas de Lliu Lliu" fill sizes="(max-width: 900px) 100vw, 55vw" />
          <p>Limache · V Región</p>
        </div>
        <div className="project-info">
          <p className="eyebrow"><span /> Proyecto destacado</p>
          <div className="project-number">01</div>
          <Image className="pircas-logo" src="/images/pircas-logo.png" alt="Pircas de Lliu Lliu" width={270} height={91} />
          <h2>Entre la naturaleza<br />y la ciudad.</h2>
          <p>Parcelas planas en el valle de Limache, rodeadas de espinos, boldos y quillayes. Un lugar donde la calma se encuentra con una ubicación privilegiada.</p>
          <a className="text-link" href="https://pircasdelliulliu.cl" target="_blank" rel="noreferrer">Explorar el proyecto <span>↗</span></a>
        </div>
      </section>

      <section className="facts" aria-label="Características de Pircas de Lliu Lliu">
        {projectFacts.map((fact) => (
          <div className="fact" key={fact.label}>
            <p><strong>{fact.value}</strong> <span>{fact.unit}</span></p>
            <small>{fact.label}</small>
          </div>
        ))}
      </section>

      <section className="experience">
        <div className="experience-copy">
          <p className="eyebrow"><span /> Todo listo para comenzar</p>
          <h2>La tranquilidad de<br />elegir bien.</h2>
          <p>Cada parcela cuenta con rol propio, agua y luz canalizadas bajo tierra, caminos interiores trabajados y portón de acceso.</p>
          <ul>
            <li><span>01</span> Rol propio individual</li>
            <li><span>02</span> Agua y luz operativas</li>
            <li><span>03</span> Accesos consolidados</li>
          </ul>
        </div>
        <div className="experience-image">
          <Image src="/images/pircas-nature.jpg" alt="Vegetación nativa en Pircas de Lliu Lliu" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="principles">
        <div className="section-label"><span>02</span><p>Nuestra forma de hacer</p></div>
        <div className="principles-content">
          <h2>Proyectos con<br /><em>propósito.</em></h2>
          <div className="quality-list">
            {qualities.map((quality) => (
              <article key={quality.number}>
                <span>{quality.number}</span>
                <div><h3>{quality.title}</h3><p>{quality.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing" id="contacto">
        <Image src="/images/pircas-view.jpeg" alt="Paisaje natural de Lliu Lliu" fill sizes="100vw" />
        <div className="closing-overlay" />
        <div className="closing-content">
          <p className="eyebrow light"><span /> Tu próximo lugar</p>
          <h2>Hay decisiones que<br />cambian el paisaje.</h2>
          <p>Descubre Pircas de Lliu Lliu y agenda una visita para conocer el proyecto.</p>
          <a href="https://pircasdelliulliu.cl/contacto/" target="_blank" rel="noreferrer">Quiero conocer Pircas <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <Image src="/images/itagra-logo.png" alt="Itagra Parcelas de Agrado" width={220} height={91} />
          <p>Proyectos para vivir con más<br />naturaleza, espacio y propósito.</p>
          <div className="footer-links">
            <a href="#itagra">Nosotros</a><a href="#proyecto">Proyectos</a><a href="https://pircasdelliulliu.cl/contacto/" target="_blank" rel="noreferrer">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Itagra</span><span>Limache · Región de Valparaíso</span></div>
      </footer>
    </main>
  );
}
