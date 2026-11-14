import { ABOUT } from "../data/siteData.js";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About me</h2>
        <div className="about__grid">
          <div>
            <p className="about__lead">{ABOUT.description}</p>

            <h3 className="about__subtitle">Education</h3>
            <ul className="education">
              {ABOUT.education.map((item) => (
                <li key={item.degree}>
                  <strong>{item.degree}</strong>
                  <span>
                    {item.school}, {item.years}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="about__subtitle">Career goals</h3>
            <p>{ABOUT.goals}</p>
          </div>

          <dl className="profile-card">
            {ABOUT.profile.map((item) => (
              <div key={item.label} className="profile-card__row">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
