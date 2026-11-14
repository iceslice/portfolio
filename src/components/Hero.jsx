import { PERSON } from "../data/siteData.js";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__greeting">Hi, I am</p>
          <h1 className="hero__name">{PERSON.name}</h1>
          <p className="hero__title">{PERSON.title}</p>
          <p className="hero__intro">{PERSON.intro}</p>
          <div className="hero__buttons">
            <a className="btn btn--primary" href={PERSON.cvUrl} download>
              Download CV
            </a>
            <a className="btn btn--ghost" href="#projects">
              View projects
            </a>
          </div>
        </div>
        <img
          className="hero__photo"
          src="/images/profile.svg"
          alt={`Portrait of ${PERSON.name}`}
          width="320"
          height="320"
        />
      </div>
    </section>
  );
}

export default Hero;
