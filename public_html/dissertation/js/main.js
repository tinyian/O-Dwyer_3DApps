import * as THREE from '../node_modules/.vite/deps/three.js?v=734c07de';
import { OrbitControls } from '../node_modules/.vite/deps/three_examples_jsm_controls_OrbitControls.js?v=46295345';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('../dissertation/assets/images/bedroom.jpg');
scene.background = spaceTexture;

// Avatar

const batTexture = new THREE.TextureLoader().load('../dissertation/assets/images/bat.jpg');

const bat = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: batTexture }));

scene.add(bat);

// paper

const paperTexture = new THREE.TextureLoader().load('../dissertation/assets/images/paper.jpg');
const normalTexture = new THREE.TextureLoader().load('../dissertation/assets/images/normal.jpg');

const paper = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: paperTexture,
    normalMap: normalTexture,
  })
);

scene.add(paper);

paper.position.z = 30;
paper.position.setX(-10);

bat.position.z = -5;
bat.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  paper.rotation.x += 0.05;
  paper.rotation.y += 0.075;
  paper.rotation.z += 0.05;

  bat.rotation.y += 0.01;
  bat.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  paper.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();

