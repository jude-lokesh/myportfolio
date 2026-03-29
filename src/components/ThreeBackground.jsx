import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camara = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const startGeometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = -Math.random() * 1000;

      vertices.push(x, y, z);
    }

    startGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(startGeometry, starMaterial);
    scene.add(stars);
    camara.position.z = 1;

    const animationLoop = () => {
      stars.rotation.x += 0.0002;
      stars.rotation.y += 0.0002;
      renderer.render(scene, camara);
      requestAnimationFrame(animationLoop);
    };
    animationLoop();

    const onWindowResize = () => {
      camara.aspect = container.clientWidth / container.clientHeight;
      camara.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement);
      startGeometry.dispose();
      starMaterial.dispose();
      stars.geometry.dispose();
      stars.material.dispose();
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{ overflow: "hidden" }}
    />
  );
};

export default ThreeBackground;
