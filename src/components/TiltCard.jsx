import { useCallback, useRef } from 'react';

const MAX_TILT = 12; // degrees at the far edge

// Tilts its contents in 3D toward the pointer. The angles ride on CSS custom
// properties so the transform itself stays declarative in app.css.
export default function TiltCard({ className = '', children }) {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--tilt-x', `${(-py * MAX_TILT).toFixed(2)}deg`);
    el.style.setProperty('--tilt-y', `${(px * MAX_TILT).toFixed(2)}deg`);
    el.classList.add('is-tilting');
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    // drop the fast transition first so the card eases back flat
    el.classList.remove('is-tilting');
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  }, []);

  return (
    <div
      ref={ref}
      className={`tilt ${className}`.trim()}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
