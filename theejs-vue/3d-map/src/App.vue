<template>
  <div ref="sceneContainer" class="scene-container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const sceneContainer = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 10);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  sceneContainer.value.appendChild(renderer.domElement);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const textureLoader = new THREE.TextureLoader();
  const terrainTexture = textureLoader.load("./assets/textures/TerrainNodeMaterial_baseColor.jpeg", undefined, undefined, (error) => {
    console.error("An error happened while loading the texture", error);
  });

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 5, 5).normalize();
  scene.add(directionalLight);

  const loader = new GLTFLoader();
  loader.load("./assets/scene.gltf", (gltf) => {
    const model = gltf.scene;
    console.log(gltf);

    model.traverse((child) => {
      if (child.isMesh) {
        if (child.material) {
          child.material.map = terrainTexture;
          child.material.needsUpdate = true;
          child.material.side = THREE.DoubleSide;
          child.material.color.set(0xffffff);
        } else {
          child.material = new THREE.MeshBasicMaterial({ map: terrainTexture });
        }
      }
    });

    scene.add(model);
    renderer.render(scene, camera);
  });

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();
});

</script>

<style scoped>
.scene-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: none;
}
</style>
