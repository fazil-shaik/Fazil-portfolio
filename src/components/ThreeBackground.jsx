import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = mountRef.current;
    if (!container) return;

    let scene, camera, renderer, particlesMesh, gridHelper;
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    try {
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x09090b, 0.0018);

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 240;
      camera.position.y = 30;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Create glowing orange particles / embers
      const particleCount = 180;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const scales = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 600;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 400 + 40;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 500;
        scales[i] = Math.random() * 2 + 1;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

      // Create round particle texture using canvas
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 165, 0, 1)');
      gradient.addColorStop(0.3, 'rgba(249, 115, 22, 0.7)');
      gradient.addColorStop(0.8, 'rgba(234, 88, 12, 0.15)');
      gradient.addColorStop(1, 'rgba(9, 9, 11, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);

      const texture = new THREE.CanvasTexture(canvas);

      const material = new THREE.PointsMaterial({
        size: 8,
        map: texture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      particlesMesh = new THREE.Points(geometry, material);
      scene.add(particlesMesh);

      // 3D Perspective Plane Grid (Architectural / Construction foundation)
      const size = 600;
      const divisions = 30;
      gridHelper = new THREE.GridHelper(size, divisions, 0xf97316, 0x27272a);
      gridHelper.position.y = -80;
      gridHelper.material.opacity = 0.25;
      gridHelper.material.transparent = true;
      scene.add(gridHelper);

      // Subtle mouse tracking
      const onMouseMove = (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });

      const onResize = () => {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onResize);

      // Animation loop
      let clock = new THREE.Clock();
      const animate = () => {
        if (!prefersReducedMotion) {
          const elapsedTime = clock.getElapsedTime();
          
          // Gently rotate particles
          if (particlesMesh) {
            particlesMesh.rotation.y = elapsedTime * 0.03;
            particlesMesh.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;
          }

          // Camera slight sway + mouse follow
          camera.position.x += (mouseX - camera.position.x) * 0.03;
          camera.position.y += (-mouseY + 30 - camera.position.y) * 0.03;
          camera.lookAt(0, 0, 0);

          if (gridHelper) {
            gridHelper.position.z = (elapsedTime * 6) % (size / divisions) - 80;
          }

          renderer.render(scene, camera);
          animationFrameId = requestAnimationFrame(animate);
        } else {
          // Render once for static presentation
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch (err) {
      console.warn("WebGL initialization failed, falling back to CSS background", err);
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
