import { useCallback, useRef, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import PostDetail from './components/PostDetail';
import { useReveal } from './hooks/useReveal';
import { projects as allProjects, posts } from './data';

// Two views share one page: the long-scroll home and a blog post. Small enough
// that a route object beats pulling in a router.
export default function App({
  customCursor = true,
  show3DHero = true,
  featuredOnly = false,
}) {
  const [route, setRoute] = useState({ name: 'home', id: null });
  const homeScrollRef = useRef(0);

  useReveal(`${route.name}:${route.id}`);

  const navigate = useCallback(
    (next) => (e) => {
      e?.preventDefault();
      setRoute(next);
      window.scrollTo(0, 0);
    },
    []
  );

  // Remember where on the homepage the reader was, so "back to all posts"
  // returns them there instead of dumping them at the top.
  const openPost = useCallback(
    (id) => (e) => {
      e?.preventDefault();
      homeScrollRef.current = window.scrollY;
      setRoute({ name: 'post', id });
      window.scrollTo(0, 0);
    },
    []
  );

  const backToHome = useCallback((e) => {
    e?.preventDefault();
    setRoute({ name: 'home', id: null });
    setTimeout(() => window.scrollTo(0, homeScrollRef.current), 50);
  }, []);

  // From a detail view, jump home first and let it paint before scrolling.
  const goToSection = useCallback(
    (id) => (e) => {
      e?.preventDefault();
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
      };

      if (route.name !== 'home') {
        setRoute({ name: 'home', id: null });
        setTimeout(scroll, 50);
      } else {
        scroll();
      }
    },
    [route.name]
  );

  const nav = {
    hero: goToSection('hero'),
    about: goToSection('about'),
    projects: goToSection('projects'),
    blog: goToSection('blog'),
    contact: goToSection('contact'),
  };

  const visibleProjects = featuredOnly ? allProjects.slice(0, 2) : allProjects;
  const currentPost = posts.find((p) => p.id === route.id) ?? posts[0];

  return (
    <>
      <CustomCursor enabled={customCursor} />

      <div className="page">
        <div className="container">
          {route.name === 'home' && (
            <>
              <Hero show3D={show3DHero} onNavAbout={nav.about} />
              <About nav={nav} />
              <Projects projects={visibleProjects} />
              <Blog posts={posts} onOpenPost={openPost} />
              <Contact onNavHero={nav.hero} />
            </>
          )}

          {route.name === 'post' && <PostDetail post={currentPost} onBack={backToHome} />}
        </div>
      </div>
    </>
  );
}
