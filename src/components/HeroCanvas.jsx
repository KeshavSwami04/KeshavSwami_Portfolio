import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, el.clientWidth / el.clientHeight, 0.1, 200);
    camera.position.set(0, 0.5, 6.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // ── PARALLAX STAR LAYERS ──
    const starLayers = [];
    [
      { count:400, spread:60, size:0.022, z:-12, spd:0.2 },
      { count:180, spread:35, size:0.038, z:-5,  spd:0.55 },
      { count:70,  spread:20, size:0.06,  z:-1,  spd:1.0 },
    ].forEach(cfg => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(cfg.count * 3);
      const col = new Float32Array(cfg.count * 3);
      for (let i = 0; i < cfg.count; i++) {
        pos[i*3]   = (Math.random()-0.5)*cfg.spread;
        pos[i*3+1] = (Math.random()-0.5)*cfg.spread*0.55;
        pos[i*3+2] = cfg.z + (Math.random()-0.5)*2;
        const ice  = Math.random() > 0.3;
        col[i*3]   = ice ? 0.427 : 1;
        col[i*3+1] = ice ? 0.812 : 1;
        col[i*3+2] = ice ? 0.937 : 1;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color",    new THREE.BufferAttribute(col, 3));
      const pts = new THREE.Points(geo,
        new THREE.PointsMaterial({ size: cfg.size, vertexColors: true, transparent: true, opacity: 0.55 + cfg.spd * 0.2 }));
      pts.userData.spd = cfg.spd;
      scene.add(pts);
      starLayers.push(pts);
    });

    // ── WAVE PLANES ──
    const PLANE_Y = -2.2;

    const planeGeo = new THREE.PlaneGeometry(28, 28, 110, 110);
    planeGeo.rotateX(-Math.PI / 2);
    const planeMesh = new THREE.Mesh(planeGeo,
      new THREE.MeshStandardMaterial({ color: 0x020210, transparent: true, opacity: 0.96, side: THREE.DoubleSide }));
    planeMesh.position.y = PLANE_Y;
    scene.add(planeMesh);

    const wGeo = new THREE.PlaneGeometry(28, 28, 42, 42);
    wGeo.rotateX(-Math.PI / 2);
    const wMesh = new THREE.Mesh(wGeo,
      new THREE.MeshBasicMaterial({ color: 0x6DCFEF, wireframe: true, transparent: true, opacity: 0.055 }));
    wMesh.position.y = PLANE_Y + 0.02;
    scene.add(wMesh);

    const wGeo2 = new THREE.PlaneGeometry(28, 28, 14, 14);
    wGeo2.rotateX(-Math.PI / 2);
    const wMesh2 = new THREE.Mesh(wGeo2,
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.022 }));
    wMesh2.position.y = PLANE_Y + 0.04;
    scene.add(wMesh2);

    // ── ICOSAHEDRON ──
    const ICO_R = 1.55;
    const icoGeo = new THREE.IcosahedronGeometry(ICO_R, 0);

    const shell = new THREE.Mesh(icoGeo,
      new THREE.MeshPhysicalMaterial({
        color: 0x6DCFEF, transparent: true, opacity: 0.045,
        roughness: 0, metalness: 0, transmission: 0.97,
        thickness: 0.8, side: THREE.DoubleSide,
      }));
    scene.add(shell);

    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(icoGeo),
      new THREE.LineBasicMaterial({ color: 0x6DCFEF, transparent: true, opacity: 0.78 }));
    scene.add(edges);

    const icoGeo2 = new THREE.IcosahedronGeometry(ICO_R * 0.62, 0);
    const innerEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(icoGeo2),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.20 }));
    scene.add(innerEdges);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.32, 1),
      new THREE.MeshStandardMaterial({
        color: 0xffffff, emissive: 0x6DCFEF, emissiveIntensity: 2.8,
        transparent: true, opacity: 0.75,
      }));
    scene.add(core);

    // ── ARMILLARY RINGS ──
    const mkRing = (r, ox, oy, opacity) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.004, 6, 120),
        new THREE.MeshBasicMaterial({ color: 0x6DCFEF, transparent: true, opacity, side: THREE.DoubleSide }));
      m.rotation.x = ox; m.rotation.y = oy;
      scene.add(m); return m;
    };
    const ring1 = mkRing(ICO_R * 1.35, Math.PI/2, 0,         0.38);
    const ring2 = mkRing(ICO_R * 1.35, Math.PI/3, Math.PI/4, 0.22);
    const ring3 = mkRing(ICO_R * 1.62, Math.PI/6, Math.PI/5, 0.12);

    // ── LIGHTS ──
    scene.add(new THREE.AmbientLight(0x050518, 4));
    const keyLight = new THREE.DirectionalLight(0x6DCFEF, 3.8);
    keyLight.position.set(-4, 5, 3);
    scene.add(keyLight);
    const fill = new THREE.PointLight(0x6DCFEF, 1.5, 12);
    fill.position.set(4, -2, -2);
    scene.add(fill);
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.7);
    rimLight.position.set(2, 2, -5);
    scene.add(rimLight);

    // ── INPUT ──
    const mouse = { x:0, y:0, tx:0, ty:0 };
    let scrollY = 0;
    const onMouse  = e => { mouse.tx = (e.clientX/window.innerWidth-0.5)*2; mouse.ty = -(e.clientY/window.innerHeight-0.5)*2; };
    const onScroll = () => { scrollY = window.scrollY; };
    const onResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll",    onScroll, { passive: true });
    window.addEventListener("resize",    onResize);

    // ── ANIMATE ──
    const clock = new THREE.Clock();
    let raf;
    const icoGroup = [shell, edges, innerEdges, core, ring1, ring2, ring3];

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      // Parallax stars — move opposite to scroll
      starLayers.forEach(l => {
        l.position.x = -mouse.x * 0.18 * l.userData.spd;
        l.position.y = -mouse.y * 0.10 * l.userData.spd + scrollY * 0.0004 * l.userData.spd;
      });

      // Wave animation
      [planeGeo, wGeo, wGeo2].forEach((g, gi) => {
        const amp = gi === 0 ? 1 : gi === 1 ? 0.85 : 0.65;
        const pos = g.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i), z = pos.getZ(i);
          pos.setY(i,
            (Math.sin(x*0.5 + t*0.5)*0.18 +
             Math.sin(z*0.4 + t*0.38)*0.14 +
             Math.sin((x+z)*0.25 + t*0.45)*0.09) * amp);
        }
        pos.needsUpdate = true;
        if (gi === 0) g.computeVertexNormals();
      });

      // Icosahedron — mouse-reactive tilt + slow drift
      const tRX = mouse.y * 0.26;
      const tRY = mouse.x * 0.26 + t * 0.10;
      shell.rotation.x += (tRX - shell.rotation.x) * 0.035;
      shell.rotation.y += (tRY - shell.rotation.y) * 0.035;
      edges.rotation.copy(shell.rotation);
      innerEdges.rotation.x = shell.rotation.x * -0.6;
      innerEdges.rotation.y = t * 0.18;
      core.rotation.y = t * 0.55;
      core.rotation.x = t * 0.3;

      // Float
      const fy = Math.sin(t * 0.5) * 0.12;
      icoGroup.forEach(m => { m.position.y = fy; });

      // Rings orbit
      ring1.rotation.z = t * 0.08;
      ring2.rotation.z = -t * 0.06;
      ring3.rotation.y = t * 0.04;

      // Key light slow orbit
      keyLight.position.x = Math.sin(t * 0.25) * 4 - 2;
      keyLight.position.z = Math.cos(t * 0.25) * 3 + 2;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll",    onScroll);
      window.removeEventListener("resize",    onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none" }} />;
}
