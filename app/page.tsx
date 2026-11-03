import Link from "next/link";

const projects = [
  { slug: "quiet-luxury", title: "Quiet Luxury", type: "Residential · Istanbul", year: "2024", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90", className: "project-card project-card--wide" },
  { slug: "the-courtyard", title: "The Courtyard", type: "Hospitality · Bodrum", year: "2024", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90", className: "project-card" },
  { slug: "soft-geometry", title: "Soft Geometry", type: "Residential · London", year: "2023", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90", className: "project-card" },
  { slug: "afterlight", title: "Afterlight", type: "Commercial · Dubai", year: "2023", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90", className: "project-card project-card--wide" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <nav className="site-nav container">
        <Link href="/" className="brand" aria-label="Bora Evgar home">BORA<span>EVGAR</span></Link>
        <div className="nav-links"><a href="#work">Selected work</a><a href="#studio">Studio</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="https://wa.me/905555555555" target="_blank" rel="noreferrer">Start a project <Arrow /></a>
      </nav>

      <section className="hero container">
        <div className="hero-copy"><p className="eyebrow">Architectural visualization studio · Est. 2018</p><h1>Spaces, <em>imagined</em><br />with clarity.</h1><p className="hero-description">We create atmospheric architectural imagery for studios, developers and brands shaping the built environment.</p><a className="text-link" href="#work">Explore selected work <Arrow /></a></div>
        <div className="hero-image image-frame"><div className="image-overlay"><span>01 — 04</span><span>Scroll to explore ↓</span></div></div>
      </section>

      <section className="statement container" id="studio"><p className="eyebrow">Bora Evgar Studio</p><p className="statement-copy">We translate architecture into <em>feeling</em> — balancing precision, materiality and a quiet sense of atmosphere.</p><div className="statement-meta"><span>Based in Istanbul</span><span>Working worldwide</span><span>Available for 2025 — 26</span></div></section>

      <section className="work-section container" id="work"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>A study in <em>space.</em></h2></div><div className="filters"><button className="active">All work</button><button>Residential</button><button>Hospitality</button><button>Commercial</button></div></div><div className="project-grid">{projects.map((project) => <Link href={`/projects/${project.slug}`} className={project.className} key={project.slug}><div className="project-image" style={{ backgroundImage: `url(${project.image})` }} /><div className="project-info"><div><h3>{project.title}</h3><p>{project.type}</p></div><div className="project-year"><span>{project.year}</span><Arrow /></div></div></Link>)}</div></section>

      <section className="services container"><p className="eyebrow">What we do</p><div className="services-grid"><h2>From first sketch<br />to <em>final frame.</em></h2><div className="service-list"><div><span>01</span><strong>Still imagery</strong><p>High-end interior and exterior visuals with a strong point of view.</p></div><div><span>02</span><strong>Animation & film</strong><p>Moving images that make an audience feel the space before it exists.</p></div><div><span>03</span><strong>Art direction</strong><p>A considered visual language for projects that deserve to be remembered.</p></div></div></div></section>

      <section className="contact container" id="contact"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make something<br /><em>remarkable.</em></h2><div className="contact-row"><a className="button" href="mailto:hello@boraevgar.com">Request a proposal <Arrow /></a><a className="whatsapp" href="https://wa.me/905555555555" target="_blank" rel="noreferrer">WhatsApp us directly <Arrow /></a></div></section>

      <footer className="site-footer container"><Link href="/" className="brand">BORA<span>EVGAR</span></Link><p>© 2025 Bora Evgar Studio</p><div><a href="mailto:hello@boraevgar.com">hello@boraevgar.com</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <Arrow /></a></div></footer>
    </main>
  );
}
