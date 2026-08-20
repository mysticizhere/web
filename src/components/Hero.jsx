import ThreeHero from './ThreeHero';
import { profile } from '../data';

export default function Hero({ show3D = true, onNavAbout }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-greeting">Hello, I&apos;m</div>
      <h1 className="hero-name">{profile.name}</h1>
      <div className="hero-role">{profile.role}</div>

      {show3D ? <ThreeHero /> : <div className="hero-orb" aria-hidden="true" />}

      <a href="#about" onClick={onNavAbout} className="hero-scroll">
        Know more
        <span className="hero-scroll-arrow" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
