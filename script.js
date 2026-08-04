import * as THREE from "https://unpkg.com/three@0.170.0/build/three.module.js";

const scene = new THREE.Scene();
// Fondo negro del espacio
scene.background = new THREE.Color(0x000011);

// Cámara
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 30;

// Renderizador
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
// ==========================
// ESTRELLAS 3D
// ==========================

const starsGeometry = new THREE.BufferGeometry();

const starsCount = 6000;
const positions = [];

for (let i = 0; i < starsCount; i++) {

    positions.push((Math.random() - 0.5) * 2000);
    positions.push((Math.random() - 0.5) * 2000);
    positions.push((Math.random() - 0.5) * 2000);

}

starsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
);

const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1.5
});

const stars = new THREE.Points(
    starsGeometry,
    starsMaterial
);

scene.add(stars);
// ==========================
// ANIMACIÓN
// ==========================

function animate() {

    requestAnimationFrame(animate);

    stars.rotation.y += 0.0003;

    renderer.render(scene, camera);
galaxyCore.rotation.y += 0.01;
galaxyCore.rotation.x += 0.005;
    galaxy.rotation.y += 0.0015;
}// ==========================
// NÚCLEO DE LA GALAXIA
// ==========================

const galaxyGeometry = new THREE.SphereGeometry(2.5, 64, 64);

const galaxyMaterial = new THREE.MeshBasicMaterial({
    color: 0xff4fa3
});

const galaxyCore = new THREE.Mesh(
    galaxyGeometry,
    galaxyMaterial
);

scene.add(galaxyCore);
// ==========================
// BRAZOS DE LA GALAXIA
// ==========================

const galaxyGeometry2 = new THREE.BufferGeometry();

const galaxyCount = 25000;

const galaxyPositions = [];

for(let i = 0; i < galaxyCount; i++){

    const radius = Math.random() * 40;

    const angle = radius * 0.4;

    galaxyPositions.push(
        Math.cos(angle) * radius + (Math.random()-0.5)*2,
        (Math.random()-0.5)*2,
        Math.sin(angle) * radius + (Math.random()-0.5)*2
    );

}

galaxyGeometry2.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(galaxyPositions,3)
);

const galaxyMaterial2 = new THREE.PointsMaterial({
    color:0xff99ff,
    size:0.18
});

const galaxy = new THREE.Points(
    galaxyGeometry2,
    galaxyMaterial2
);

scene.add(galaxy);
animate();
