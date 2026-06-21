import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function GlobalCanvas() {
  const mountRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const scene  = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030308, 0.08);

    const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.set(0, 0.5, 7.5);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const PLANE_Y = -2.3;

    // ── QUANTUM NEBULAE (VORTEX HELIX PARTICLE SYSTEM) ──
    const particleCount = 1200;
    const partGeo = new THREE.BufferGeometry();
    const partPos = new Float32Array(particleCount * 3);
    const partColors = new Float32Array(particleCount * 3);
    const particleData = [];

    const colorTeal = new THREE.Color(0x00f0ff);
    const colorViolet = new THREE.Color(0x9d4edd);

    for (let i = 0; i < particleCount; i++) {
      const theta = (i / particleCount) * Math.PI * 36; 
      const radius = 1.0 + (i / particleCount) * 8.5; 
      const y = (Math.random() - 0.5) * 8.0;
      
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      partPos[i*3] = x;
      partPos[i*3+1] = y;
      partPos[i*3+2] = z;

      particleData.push({
        angle: theta,
        radius: radius,
        y: y,
        speed: 0.15 + Math.random() * 0.25,
      });

      const ratio = i / particleCount;
      const mixedColor = colorTeal.clone().lerp(colorViolet, ratio);
      partColors[i*3] = mixedColor.r;
      partColors[i*3+1] = mixedColor.g;
      partColors[i*3+2] = mixedColor.b;
    }

    partGeo.setAttribute("position", new THREE.BufferAttribute(partPos, 3));
    partGeo.setAttribute("color", new THREE.BufferAttribute(partColors, 3));

    const partMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // ── DEFORMING CYBERNETIC GROUND GRID ──
    const bendFactor = 0.012;
    const gridGeo = new THREE.PlaneGeometry(35, 35, 60, 60);
    gridGeo.rotateX(-Math.PI / 2);

    const posAttr = gridGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      posAttr.setY(i, Math.pow(x, 2) * bendFactor);
    }
    gridGeo.computeVertexNormals();

    const gridMesh = new THREE.Mesh(gridGeo,
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.05 }));
    gridMesh.position.y = PLANE_Y;
    scene.add(gridMesh);

    const gridMesh2 = new THREE.Mesh(gridGeo,
      new THREE.MeshBasicMaterial({ color: 0x9d4edd, wireframe: true, transparent: true, opacity: 0.025 }));
    gridMesh2.position.set(0, PLANE_Y + 0.03, 0);
    scene.add(gridMesh2);

    // ── LIGHTS ──
    scene.add(new THREE.AmbientLight(0x080914, 2.5));
    
    const tealLight = new THREE.DirectionalLight(0x00f0ff, 4.0);
    tealLight.position.set(-4, 5, 2);
    scene.add(tealLight);

    const violetLight = new THREE.DirectionalLight(0x9d4edd, 3.5);
    violetLight.position.set(4, -3, 2);
    scene.add(violetLight);

    // ── SCROLL & INPUT ──
    const mouse = { x:0, y:0, tx:0, ty:0 };
    const mouseNormalized = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    
    let scrollY = 0;
    let lastScrollY = 0;
    let scrollVelocity = 0;

    const onMouse = e => { 
      mouse.tx = (e.clientX/window.innerWidth-0.5)*2; 
      mouse.ty = -(e.clientY/window.innerHeight-0.5)*2; 
      mouseNormalized.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNormalized.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
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

    // ── ANIMATION LOOP ──
    const clock = new THREE.Clock();
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      const scrollDiff = Math.abs(scrollY - lastScrollY);
      scrollVelocity += (scrollDiff - scrollVelocity) * 0.08;
      lastScrollY = scrollY;

      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 100);
      const scrollRatio = Math.min(scrollY / Math.min(maxScroll, 1200), 1.0);

      if (!reducedMotion) {
        const targetCamY = 0.5 + scrollRatio * 1.8 + mouse.y * 0.25;
        const targetCamX = scrollRatio * 0.6 + mouse.x * 0.25;
        const targetCamZ = 7.5 - scrollRatio * 2.2;
        
        camera.position.y += (targetCamY - camera.position.y) * 0.05;
        camera.position.x += (targetCamX - camera.position.x) * 0.05;
        camera.position.z += (targetCamZ - camera.position.z) * 0.05;
        camera.lookAt(0.3 - scrollRatio * 0.3, 0.1 - scrollRatio * 0.5, 0);
      } else {
        camera.position.set(0, 0.5, 7.5);
        camera.lookAt(0, 0, 0);
      }

      // ── PARTICLE HELIX DRIFT ──
      const pPosAttr = particles.geometry.attributes.position;
      
      if (!reducedMotion) {
        particles.rotation.y = t * 0.04 + scrollY * 0.0003;
        for (let i = 0; i < particleCount; i++) {
          const data = particleData[i];
          const currRadius = data.radius + Math.sin(t * 1.4 + i) * 0.05;
          const x = Math.cos(data.angle + t * 0.04 * data.speed) * currRadius;
          const z = Math.sin(data.angle + t * 0.04 * data.speed) * currRadius;
          pPosAttr.setXYZ(i, x, data.y + Math.sin(t * 0.4 + i) * 0.06, z);
        }
        pPosAttr.needsUpdate = true;
      } else {
        particles.rotation.y = t * 0.01;
      }

      // ── GROUND GRID WAVE DEFORMATION ──
      raycaster.setFromCamera(mouseNormalized, camera);
      const intersects = raycaster.intersectObject(gridMesh);
      let hitPoint = null;
      if (intersects.length > 0) {
        hitPoint = intersects[0].point;
      }

      if (!reducedMotion) {
        [gridGeo].forEach((g) => {
          const pos = g.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i), z = pos.getZ(i);
            let height = Math.pow(x, 2) * bendFactor;
            
            height += (Math.sin(x * 0.42 + t * 0.45) * 0.12 +
                       Math.sin(z * 0.35 + t * 0.35) * 0.08);

            if (hitPoint) {
              const dx = x - hitPoint.x;
              const dz = z - hitPoint.z;
              const dist = Math.sqrt(dx*dx + dz*dz);
              if (dist < 4.5) {
                const strength = (1.0 - dist / 4.5);
                const ripple = Math.sin(dist * 2.5 - t * 8.0) * 0.12 * strength;
                height += ripple;
              }
            }
            pos.setY(i, height);
          }
          pos.needsUpdate = true;
          g.computeVertexNormals();
        });
      }

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
  }, [reducedMotion]);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: "fixed", 
        inset: 0, 
        zIndex: -1, 
        pointerEvents: "none",
        background: "transparent"
      }} 
    />
  );
}
