import { messages, type Locale } from "./i18n";
import type { ProjectDossierContent } from "./portfolio-data";

type ProjectDossierProps = {
  dossier: ProjectDossierContent;
  locale: Locale;
};

export function ProjectDossier({ dossier, locale }: ProjectDossierProps) {
  const copy = messages[locale].project;

  return (
    <section aria-labelledby="project-dossier-title" className="project-dossier container">
      <div className="project-dossier-panel">
        <h2 className="project-dossier-title" id="project-dossier-title">
          {copy.dossierTitle}
        </h2>
        <dl className="project-dossier-grid">
          <div>
            <dt>{copy.project}</dt>
            <dd>{dossier.project}</dd>
          </div>
          <div>
            <dt>{copy.location}</dt>
            <dd>{dossier.location}</dd>
          </div>
          <div>
            <dt>{copy.roleScope}</dt>
            <dd>{dossier.roleScope}</dd>
          </div>
          <div>
            <dt>{copy.status}</dt>
            <dd>{dossier.status}</dd>
          </div>
          <div className="project-dossier-description">
            <dt>{copy.description}</dt>
            <dd>{dossier.description}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
