import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import URDFLoader from 'urdf-loader';

const URDFViewer = ({ 
    urdfUrl= "src/2dofhover/urdf/2dofhover.urdf"
 }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const loader = new URDFLoader();
    loader.load(urdfUrl, robot => {
      scene.add(robot);
      const box = new THREE.Box3().setFromObject(robot);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs((maxDim / 2) / Math.tan(fov / 2));
      camera.position.set(center.x, center.y, cameraZ * 1.5);
      camera.lookAt(center);
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

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [urdfUrl]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default URDFViewer;
