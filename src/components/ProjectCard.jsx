function ProjectCard({ project }) {
  const { title, description, image, technologies, liveUrl, githubUrl } =
    project;

  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={image}
        alt={`Screenshot of ${title}`}
        loading="lazy"
        width="480"
        height="270"
      />
      <div className="project-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-card__buttons">
          <a
            className="btn btn--primary btn--small"
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live demo
          </a>
          <a
            className="btn btn--ghost btn--small"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
