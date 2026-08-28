'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080a, 0.005);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 72);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 2.5, 180);
    cyanLight.position.set(-45, 30, 20);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0xc084fc, 2.2, 180);
    violetLight.position.set(45, -30, 20);
    scene.add(violetLight);

    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0, -26);
    scene.add(coreGroup);

    const outerGeo = new THREE.IcosahedronGeometry(18, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const outerCore = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerCore);

    const innerGeo = new THREE.OctahedronGeometry(11, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.06
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    const particleCount = window.innerWidth < 768 ? 2400 : 5200;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    const palette = [
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x818cf8),
      new THREE.Color(0xc084fc),
      new THREE.Color(0x94a3b8),
      new THREE.Color(0xffffff)
    ];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distFromCenter = 38 + Math.random() * 48;
      const height = (Math.random() - 0.5) * 65;
      const depth = (Math.random() - 0.5) * 35 - 10;

      const x = Math.cos(angle) * distFromCenter;
      const y = Math.sin(angle) * distFromCenter * 0.55 + height * 0.4;
      const z = depth;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      speeds[i] = 0.0008 + Math.random() * 0.002;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const makeParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 15);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
        grad.addColorStop(0.7, 'rgba(255, 255, 255, 0.1)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(16, 16, 15, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.75 : 0.85,
      vertexColors: true,
      map: makeParticleTexture(),
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    const shootingStarCount = 3;
    interface ShootingStar {
      line: THREE.Line;
      positions: Float32Array;
      geometry: THREE.BufferGeometry;
      material: THREE.LineBasicMaterial;
      active: boolean;
      startX: number;
      startY: number;
      startZ: number;
      curX: number;
      curY: number;
      curZ: number;
      vx: number;
      vy: number;
      length: number;
      life: number;
      maxLife: number;
      delay: number;
    }

    const shootingStars: ShootingStar[] = [];

    const resetStar = (star: ShootingStar) => {
      const fromLeft = Math.random() > 0.5;
      star.startX = fromLeft ? -65 - Math.random() * 25 : 20 + Math.random() * 35;
      star.startY = 35 + Math.random() * 30;
      star.startZ = -15 + Math.random() * 10;
      star.curX = star.startX;
      star.curY = star.startY;
      star.curZ = star.startZ;

      const angle = fromLeft ? -Math.PI / 4 + (Math.random() - 0.5) * 0.2 : -3 * Math.PI / 4 + (Math.random() - 0.5) * 0.2;
      const speed = 1.6 + Math.random() * 1.2;
      star.vx = Math.cos(angle) * speed;
      star.vy = Math.sin(angle) * speed;
      star.length = 8 + Math.random() * 10;
      star.maxLife = 40 + Math.random() * 30;
      star.life = 0;
      star.active = false;
      star.delay = Math.random() * 180 + 40;
    };

    for (let s = 0; s < shootingStarCount; s++) {
      const starPositions = new Float32Array(6);
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

      const starMat = new THREE.LineBasicMaterial({
        color: s % 2 === 0 ? 0xafeeff : 0xffffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        linewidth: 2
      });

      const line = new THREE.Line(starGeo, starMat);
      scene.add(line);

      const starObj: ShootingStar = {
        line,
        positions: starPositions,
        geometry: starGeo,
        material: starMat,
        active: false,
        startX: 0,
        startY: 0,
        startZ: 0,
        curX: 0,
        curY: 0,
        curZ: 0,
        vx: 0,
        vy: 0,
        length: 12,
        life: 0,
        maxLife: 60,
        delay: s * 90 + 30
      };

      resetStar(starObj);
      shootingStars.push(starObj);
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', onResize);

    let animationFrameId: number;
    let lastTime = performance.now();
    const startTime = performance.now();

    const animate = (currentTime: number = performance.now()) => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const time = (currentTime - startTime) / 1000;

      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      if (!reducedMotion) {
        coreGroup.rotation.y += delta * 0.06;
        coreGroup.rotation.x = THREE.MathUtils.lerp(coreGroup.rotation.x, mouseY * 0.15, 0.05);

        const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
        const posArr = posAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const curX = posArr[i3];
          const curZ = posArr[i3 + 2];
          const spd = speeds[i];
          const cosA = Math.cos(spd);
          const sinA = Math.sin(spd);

          posArr[i3] = curX * cosA - curZ * sinA;
          posArr[i3 + 2] = curX * sinA + curZ * cosA;
          posArr[i3 + 1] = originalPositions[i3 + 1] + Math.sin(time * 0.6 + i * 0.2) * 0.8;
        }
        posAttr.needsUpdate = true;

        shootingStars.forEach((star) => {
          if (!star.active) {
            star.delay -= 1;
            if (star.delay <= 0) {
              star.active = true;
            }
          } else {
            star.life += 1;
            star.curX += star.vx;
            star.curY += star.vy;

            star.positions[0] = star.curX;
            star.positions[1] = star.curY;
            star.positions[2] = star.curZ;

            const normVel = Math.hypot(star.vx, star.vy);
            const tailX = star.curX - (star.vx / normVel) * star.length;
            const tailY = star.curY - (star.vy / normVel) * star.length;
            star.positions[3] = tailX;
            star.positions[4] = tailY;
            star.positions[5] = star.curZ;

            const pos = star.geometry.attributes.position as THREE.BufferAttribute;
            pos.needsUpdate = true;

            const progress = star.life / star.maxLife;
            if (progress < 0.2) {
              star.material.opacity = (progress / 0.2) * 0.9;
            } else {
              star.material.opacity = (1 - progress) * 0.9;
            }

            if (star.life >= star.maxLife) {
              resetStar(star);
            }
          }
        });
      }

      camera.position.x = mouseX * 2.5;
      camera.position.y = mouseY * 1.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);

      particleGeo.dispose();
      particleMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      shootingStars.forEach((s) => {
        s.geometry.dispose();
        s.material.dispose();
      });
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-webgl-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
}
