import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroCanvas3D() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── 3D CORE STRUCTURE GROUP ──
    const group = new THREE.Group();
    scene.add(group);

    // Core faceted polyhedron (solid)
    const coreGeo = new THREE.IcosahedronGeometry(1.0, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x060710,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x7b2cbf,
      emissiveIntensity: 0.22,
      flatShading: true,
      transparent: true,
      opacity: 0.9
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Wireframe outer cage
    const cageGeo = new THREE.IcosahedronGeometry(1.15, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    group.add(cageMesh);

    // Outer orbital diagnostic ring
    const ringGeo = new THREE.RingGeometry(1.35, 1.37, 40);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x9d4edd,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    group.add(ringMesh);

    // ── LIGHTING ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const pointLightTeal = new THREE.PointLight(0x00f0ff, 4.0, 8);
    pointLightTeal.position.set(2, 2, 2);
    scene.add(pointLightTeal);

    const pointLightViolet = new THREE.PointLight(0x9d4edd, 3.5, 8);
    pointLightViolet.position.set(-2, -2, 2);
    scene.add(pointLightViolet);

    // ── INTERACTION STATES & PHYSIC ──
    let isMouseDown = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    // Inertia rotation speeds
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationVelocityX = 0;
    let rotationVelocityY = 0;

    const onPointerDown = e => {
      isMouseDown = true;
      setIsDragging(true);
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const onPointerMove = e => {
      if (!isMouseDown) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      // Set rotational velocity based on drag delta
      rotationVelocityY = deltaMove.x * 0.005;
      rotationVelocityX = deltaMove.y * 0.005;

      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const onPointerUpOrLeave = () => {
      isMouseDown = false;
      setIsDragging(false);
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUpOrLeave);

    // Responsive resize inside flex container
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // ── ANIMATE LOOP ──
    const clock = new THREE.Clock();
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Breathing scale pulse
      const pulse = 1.0 + Math.sin(elapsed * 2.0) * 0.04;
      coreMesh.scale.set(pulse, pulse, pulse);
      cageMesh.scale.set(pulse, pulse, pulse);

      // Apply default constant drift rotation when NOT dragging
      if (!isMouseDown) {
        rotationVelocityY += (0.003 - rotationVelocityY) * 0.05;
        rotationVelocityX += (0.001 - rotationVelocityX) * 0.05;
      }

      // Rotate group by current velocity
      group.rotation.y += rotationVelocityY;
      group.rotation.x += rotationVelocityX;

      // Spin orbital ring and cage slightly faster in opposite direction
      cageMesh.rotation.y = -elapsed * 0.2;
      ringMesh.rotation.z = elapsed * 0.4;

      // Friction damping to decelerate spin
      rotationVelocityX *= 0.94;
      rotationVelocityY *= 0.94;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUpOrLeave);
      resizeObserver.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="clickable"
      style={{ 
        width: "100%", 
        height: "280px", 
        cursor: isDragging ? "grabbing" : "grab",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10
      }} 
    >
      {/* Decorative HUD target lines around the interactive canvas */}
      <div style={{
        position: "absolute",
        width: "70%",
        height: "70%",
        border: "1px dashed rgba(0, 240, 255, 0.12)",
        borderRadius: "50%",
        pointerEvents: "none",
        animation: "twinkle 6s infinite alternate"
      }} />
      <div style={{
        position: "absolute",
        width: "2px",
        height: "14px",
        background: "var(--teal)",
        top: "8%",
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        width: "2px",
        height: "14px",
        background: "var(--teal)",
        bottom: "8%",
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        width: "14px",
        height: "2px",
        background: "var(--teal)",
        left: "8%",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        width: "14px",
        height: "2px",
        background: "var(--teal)",
        right: "8%",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none"
      }} />
    </div>
  );
}
