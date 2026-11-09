import Link from "next/link";

export type BreadcrumbLink = Readonly<{ label: string; href: string }>;

export function BreadcrumbTrail({ items }: { items: readonly BreadcrumbLink[] }) {
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index < items.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function QuestionList({
  heading,
  items,
}: {
  heading: string;
  items: readonly Readonly<{ question: string; answer: string }>[];
}) {
  return (
    <section className="editorial-section container" aria-labelledby="questions-title">
      <div className="editorial-section-heading">
        <p className="eyebrow">FAQ</p>
        <h2 id="questions-title">{heading}</h2>
      </div>
      <div className="question-list">
        {items.map((item) => (
          <article className="question-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
