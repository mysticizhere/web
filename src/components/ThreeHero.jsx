import { useEffect, useRef } from 'react';

// Terracotta --color-accent and sage --color-accent-2, as hex for three.js.
const ACCENT = 0xc67139;
const ACCENT_2 = 0x7a8a5e;

function buildScene(THREE, canvas) {
  const width = canvas.clientWidth || 220;
  const height = canvas.clientHeight || 220;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 6);

  const group = new THREE.Group();
  const solid = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.5, 0),
    new THREE.MeshStandardMaterial({
      color: ACCENT,
      flatShading: true,
      roughness: 0.55,
      metalness: 0.1,
    })
  );
  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.95, 1),
    new THREE.MeshBasicMaterial({ color: ACCENT_2, wireframe: true })
  );
  group.add(solid, wire);
  scene.add(group);

  scene.add(new THREE.AmbientLight(0xffffff, 0.75));
  const key = new THREE.DirectionalLight(0xffffff, 0.8);
  key.position.set(3, 4, 5);
  scene.add(key);

  // Pointer position as an offset from the canvas centre, so the solid leans
  // toward the cursor instead of just spinning.
  let mouseX = 0;
  let mouseY = 0;
  const onMouseMove = (e) => {
    const r = canvas.getBoundingClientRect();
    mouseX = (e.clientX - r.left) / r.width - 0.5;
    mouseY = (e.clientY - r.top) / r.height - 0.5;
  };
  window.addEventListener('mousemove', onMouseMove);

  let frame;
  const animate = () => {
    group.rotation.y += 0.004 + mouseX * 0.02;
    group.rotation.x += (mouseY * 0.6 - group.rotation.x) * 0.05;
    renderer.render(scene, camera);
    frame = requestAnimationFrame(animate);
  };
  animate();

  const onResize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  window.addEventListener('resize', onResize);

  return () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    cancelAnimationFrame(frame);
    [solid, wire].forEach((mesh) => {
      mesh.geometry.dispose();
      mesh.material.dispose();
    });
    renderer.dispose();
  };
}

export default function ThreeHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let cancelled = false;
    let cleanup = null;

    // Loaded lazily so three.js stays out of the initial bundle.
    import('three')
      .then((THREE) => {
        if (cancelled) return;
        cleanup = buildScene(THREE, canvas);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
