import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./ConfigurePage.css";

const ModelViewer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, viewerRef.current.clientWidth / viewerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(viewerRef.current.clientWidth, viewerRef.current.clientHeight);
    viewerRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(
      "/Assets/porshe_911.glb",
      (gltf) => {
        const carModel = gltf.scene;
        carModel.scale.set(1, 1, 1);
        scene.add(carModel);
        console.log("Model loaded successfully!");
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      viewerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="model-viewer">
      <div ref={viewerRef} className="viewer"></div>
      <div className="customization-options">
        <h2 className="car-title">Porsche 911 Turbo</h2>
        <div className="tabs">
          <button className="tab active">Exterior</button>
          <button className="tab">Interior</button>
          <button className="tab">Customization</button>
        </div>
        <div className="options-grid">
          <div className="option">
            <h4>Power</h4>
            <p>Max Power: 565 hp</p>
            <p>0-60 mph: 2.5 s</p>
            <p>Top Speed: 205 mph</p>
          </div>
          <div className="option">
            <h4>Paint</h4>
            <div className="paint-options">
              <span className="color-option" style={{ backgroundColor: "#000000" }}></span>
              <span className="color-option" style={{ backgroundColor: "#ffffff" }}></span>
              <span className="color-option" style={{ backgroundColor: "#ff6f61" }}></span>
              <span className="color-option" style={{ backgroundColor: "#555555" }}></span>
            </div>
          </div>
          <div className="option">
            <h4>Wheels</h4>
            {/* Add wheel options here */}
          </div>
          <div className="option">
            <h4>Side Mirrors</h4>
            {/* Add side mirror options here */}
          </div>
        </div>
        <div className="total-price">
          <h3>Total: ₹2,87,00,000.00</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
