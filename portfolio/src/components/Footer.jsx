import { PERSON } from "../data/siteData.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">{PERSON.name}</p>
        <ul className="footer__social">
          <li>
            <a href={PERSON.social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={PERSON.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={PERSON.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
        </ul>
        <p className="footer__copy">
          &copy; {year} {PERSON.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
