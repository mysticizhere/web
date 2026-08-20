import { profile } from '../data';
import { MailIcon, GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onNavHero }) {
  return (
    <section id="contact" className="section contact">
      <div className="contact-inner" data-reveal="">
        <div className="kicker">Contact</div>
        <h2 className="contact-title">Let&apos;s build something</h2>
        <p className="contact-copy">
          Have a project in mind or just want to talk shop? My inbox is open.
        </p>

        <div className="contact-icons">
          <a
            href={`mailto:${profile.email}`}
            className="contact-icon"
            aria-label={`Email ${profile.email}`}
          >
            <MailIcon />
          </a>
          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="GitHub profile"
          >
            <GithubIcon />
          </a>
          <a
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>

      <footer className="footer">
        <span>© 2026 {profile.name}</span>
        <a href="#hero" onClick={onNavHero}>Back to top ↑</a>
      </footer>
    </section>
  );
}
