import Link from "next/link";

const project = { title: "Quiet Luxury", type: "Residential · Istanbul", year: "2024", intro: "A warm, tactile residence shaped by natural light and deliberate restraint.", images: ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90"] };

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  await params;
  return <main className="project-page"><nav className="site-nav container"><Link href="/" className="brand">BORA<span>EVGAR</span></Link><Link href="/" className="back-link">← Back to work</Link><a className="nav-cta" href="mailto:hello@boraevgar.com">Start a project ↗</a></nav><header className="project-header container"><div><p className="eyebrow">{project.type} · {project.year}</p><h1>{project.title}</h1></div><p>{project.intro}</p></header><div className="gallery container">{project.images.map((image, index) => <div className={`gallery-image ${index === 0 ? "gallery-image--hero" : ""}`} style={{ backgroundImage: `url(${image})` }} key={image}><span>0{index + 1}</span></div>)}</div><div className="project-footer container"><span>© Bora Evgar Studio</span><Link href="/">View all projects ↗</Link></div></main>;
}
