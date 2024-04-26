import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import URDFLoader from 'urdf-loader';
import "./style.css";

export const URDFViewer = ({ 
  urdfUrl,
  className
}) => {
const containerRef = useRef();

useEffect(() => {
  console.log("URDFViewer component mounted");

  const container = containerRef.current;

  if (!container) {
    console.log("Container not found, exiting useEffect");
    return;
  }

  console.log("Container found, setting up Three.js scene");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  console.log("Starting URDF loading");

  const loader = new URDFLoader();
  loader.load(urdfUrl, robot => {
    console.log("URDF file loaded successfully");
    scene.add(robot);
    const box = new THREE.Box3().setFromObject(robot);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs((maxDim / 2) / Math.tan(fov / 2));
    camera.position.set(center.x, center.y, cameraZ * 1.5);
    camera.lookAt(center);
  }, undefined, (error) => {
    console.error("Error loading URDF file:", error);
  });

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  const handleResize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  console.log("Adding resize event listener");
  window.addEventListener('resize', handleResize);

  return () => {
    console.log("Cleaning up URDFViewer component");
    window.removeEventListener('resize', handleResize);
  };
}, [urdfUrl]);

return (
  <div className={`urdf ${className}`} ref={containerRef} />
);
};
