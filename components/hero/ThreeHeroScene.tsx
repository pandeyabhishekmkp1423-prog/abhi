"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import * as THREE from "three";
import { HeroFallback } from "./HeroFallback";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export const ThreeHeroScene: React.FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [webGLAvailable] = useState(() => checkWebGLSupport());

  useEffect(() => {
    if (prefersReducedMotion || !webGLAvailable) return;

    const container = containerRef.current;
    if (!container) return;

    let isVisible = true;
    let animationFrameId: number;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // 2. Main Group for unified mouse rotation
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Crystalline Core (Faceted Polyhedron with emissive glow)
    const innerGeo = new THREE.DodecahedronGeometry(1.25, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x2563eb,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.45,
      roughness: 0.1,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.94
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer Geometric Wireframe Lattice
    const outerGeo = new THREE.IcosahedronGeometry(1.9, 1);
    const wireframeGeo = new THREE.WireframeGeometry(outerGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5
    });
    const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
    coreGroup.add(wireframe);

    // Glowing Lattice Vertices (Nodes)
    const pointsMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.11,
      transparent: true,
      opacity: 1.0
    });
    const points = new THREE.Points(outerGeo, pointsMat);
    coreGroup.add(points);

    // Orbital Ring 1 (Tilted Equator)
    const ring1Geo = new THREE.TorusGeometry(2.45, 0.022, 16, 80);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x1e40af,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.75
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.6;
    ring1.rotation.y = Math.PI / 6;
    scene.add(ring1);

    // Orbital Ring 2 (Counter-tilted Outer Loop)
    const ring2Geo = new THREE.TorusGeometry(2.85, 0.016, 16, 96);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.z = Math.PI / 4;
    scene.add(ring2);

    // 3. Floating Glowing Ambient Particles (Data Halo)
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8.0;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8.0;
      particlePositions[i + 2] = (Math.random() - 0.5) * 5.0;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.75
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 4. Vibrant Multi-Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x2563eb, 5.0, 15);
    blueLight.position.set(4, 5, 4);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4.0, 15);
    cyanLight.position.set(-4, -3, 3);
    scene.add(cyanLight);

    const indigoRimLight = new THREE.PointLight(0x6366f1, 4.5, 12);
    indigoRimLight.position.set(0, 4, -3);
    scene.add(indigoRimLight);

    // 5. Mouse Parallax & Smooth Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetX = ((x / rect.width) * 2 - 1) * 0.8;
      targetY = (-(y / rect.height) * 2 + 1) * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 6. Intersection Observer to Pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // 8. Dynamic Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth interpolation for mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate central core
      coreGroup.rotation.y = elapsed * 0.22 + mouseX;
      coreGroup.rotation.x = Math.sin(elapsed * 0.15) * 0.12 + mouseY;

      innerMesh.rotation.y = -elapsed * 0.4;
      innerMesh.rotation.z = Math.cos(elapsed * 0.25) * 0.25;

      // Orbiting rings
      ring1.rotation.z = elapsed * 0.2;
      ring1.rotation.y = Math.sin(elapsed * 0.1) * 0.25 + mouseX * 0.35;

      ring2.rotation.z = -elapsed * 0.14;
      ring2.rotation.x = -Math.PI / 3 + mouseY * 0.35;

      // Particle subtle halo drift
      particleSystem.rotation.y = elapsed * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resource Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      pointsMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion, webGLAvailable]);

  if (prefersReducedMotion || !webGLAvailable) {
    return <HeroFallback className={className} />;
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[400px] lg:min-h-[480px] flex items-center justify-center ${className}`}
      aria-hidden="true"
    />
  );
};

export default ThreeHeroScene;
