import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

// Build the filter list from the data so it never goes out of date.
const allTechnologies = [
  "All",
  ...new Set(projects.flatMap((project) => project.technologies)),
];

function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");

  const visibleProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTech)
        );

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>

        <div className="filters" role="group" aria-label="Filter projects">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              type="button"
              className={`filter ${selectedTech === tech ? "is-selected" : ""}`}
              aria-pressed={selectedTech === tech}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
