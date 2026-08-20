import { profile } from '../data';

// The second full-height screen, set on the angled brown band so it reads as a
// distinct panel rather than a continuation of the hero.
export default function About({ nav }) {
  return (
    <section id="about" className="about band">
      <div className="about-inner">
        <div className="about-status">
          <span className="about-status-dot" aria-hidden="true" />
          {profile.available}
        </div>

        <p className="about-bio">{profile.bio}</p>

        <div className="about-links">
          <a href="#projects" onClick={nav.projects}>View Projects</a>
          <a href="#blog" onClick={nav.blog}>Read Blog</a>
          <a href="#contact" onClick={nav.contact}>Connect</a>
        </div>
      </div>
    </section>
  );
}
