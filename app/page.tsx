import Image from "next/image";

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
          <img src="/images/itagra-logo.png" alt="Itagra Parcelas de Agrado" width="194" height="80" />
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
            <img src="/images/itagra-mark.png" alt="Símbolo Itagra" width="126" height="126" />
          </div>
        </div>
      </section>

      <section className="project" id="proyecto">
        <div className="project-photo">
          <Image src="/images/pircas-fields.jpeg" alt="Parcelas planas en Pircas de Lliu Lliu" fill sizes="(max-width: 900px) 100vw, 55vw" />
          <p>Limache · V Región</p>
        </div>
        <div className="project-info">
          <p className="eyebrow"><span /> Proyectos · 01 activo</p>
          <div className="project-number">01</div>
          <img className="pircas-logo" src="/images/pircas-logo.png" alt="Pircas de Lliu Lliu" width="270" height="91" />
          <h2>Entre la naturaleza<br />y la ciudad.</h2>
          <p>Parcelas planas de 5.000 m² en Limache, con rol propio, agua, luz y una ubicación conectada con la ciudad.</p>
          <div className="project-tags"><span>Limache</span><span>V Región</span><span>Desde 2.250 UF</span></div>
          <a className="text-link" href="https://pircasdelliulliu.cl" target="_blank" rel="noreferrer">Ver más en Pircas de Lliu Lliu <span>↗</span></a>
        </div>
      </section>

      <section className="parcel-plan" id="plano">
        <div className="parcel-plan-copy">
          <p className="eyebrow"><span /> Pircas de Lliu Lliu</p>
          <p className="kicker">Disponibilidad del proyecto</p>
          <h2>Conoce el plano<br />de las parcelas.</h2>
          <p>Revisa la distribución y el estado referencial de cada parcela. La disponibilidad puede cambiar, por lo que te recomendamos confirmarla directamente con nuestro equipo.</p>
          <div className="plan-actions">
            <a href="/images/plano-pircas-actualizado.png" target="_blank" rel="noreferrer">Abrir plano completo <span>↗</span></a>
            <a href="https://pircasdelliulliu.cl" target="_blank" rel="noreferrer">Ver más del proyecto <span>↗</span></a>
          </div>
        </div>
        <a className="parcel-plan-image" href="/images/plano-pircas-actualizado.png" target="_blank" rel="noreferrer" aria-label="Abrir plano actualizado de Pircas de Lliu Lliu a tamaño completo">
          <Image src="/images/plano-pircas-actualizado.png" alt="Plano actualizado de disponibilidad de parcelas de Pircas de Lliu Lliu" fill sizes="(max-width: 900px) 100vw, 58vw" />
          <span>Plano actualizado · Abrir ↗</span>
        </a>
      </section>

      <section className="project-future" aria-label="Próximos proyectos de Itagra">
        <p>Portafolio Itagra</p>
        <h2>Este es el comienzo.</h2>
        <div><span>01 proyecto disponible</span><span>Próximamente nuevos lugares</span></div>
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

      <section className="contact" id="contacto">
        <Image src="/images/pircas-view.jpeg" alt="Paisaje natural de Lliu Lliu" fill sizes="100vw" />
        <div className="contact-overlay" />
        <div className="contact-content">
          <div className="contact-intro">
            <p className="eyebrow light"><span /> Contacto</p>
            <h2>Conversemos sobre<br />tu próximo lugar.</h2>
          </div>
          <div className="contact-details">
            <div><small>Proyecto disponible</small><strong>Pircas de Lliu Lliu</strong></div>
            <div><small>Ubicación</small><strong>Limache · V Región</strong></div>
            <div><small>Correo</small><a href="mailto:info@itagra.cl">info@itagra.cl</a></div>
            <div><small>Teléfono</small><a href="tel:+56948544996">+56 9 4854 4996</a></div>
            <a href="https://pircasdelliulliu.cl/contacto/" target="_blank" rel="noreferrer">Ir a contacto <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <img src="/images/itagra-logo.png" alt="Itagra Parcelas de Agrado" width="220" height="91" />
          <p>Proyectos para vivir con más<br />naturaleza, espacio y propósito.</p>
          <div className="footer-links">
            <a href="mailto:info@itagra.cl">info@itagra.cl</a>
            <a href="tel:+56948544996">+56 9 4854 4996</a>
            <a href="#proyecto">Ver proyectos</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Itagra</span><span>Limache · Región de Valparaíso</span></div>
      </footer>
    </main>
  );
}
