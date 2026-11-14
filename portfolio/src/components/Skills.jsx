import { skills } from "../data/skills.js";

function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill.id} className="skill">
              <div className="skill__head">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div
                className="skill__bar"
                role="progressbar"
                aria-label={skill.name}
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="skill__fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
