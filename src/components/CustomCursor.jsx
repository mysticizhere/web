import { useEffect, useRef, useState } from 'react';

const INTERACTIVE = 'a,button,input,textarea,[data-cursor-hover]';

// A dot that tracks the pointer exactly plus a ring that swells over anything
// interactive. Only mounts for a fine pointer — touch has no cursor to replace.
export default function CustomCursor({ enabled = true }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [finePointer, setFinePointer] = useState(
    () => window.matchMedia('(pointer: fine)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const onChange = (e) => setFinePointer(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const active = enabled && finePointer;

  useEffect(() => {
    if (!active) return undefined;

    document.body.classList.add('custom-cursor');

    const onMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const toggleHover = (on) => (e) => {
      if (!e.target.closest?.(INTERACTIVE)) return;
      ringRef.current?.classList.toggle('is-hovering', on);
    };
    const onOver = toggleHover(true);
    const onOut = toggleHover(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.body.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
