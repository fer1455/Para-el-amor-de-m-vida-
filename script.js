alert("Script iniciado");

import * as THREE from "https://unpkg.com/three@0.170.0/build/three.module.js";

// ======================
// ESCENA
// ======================

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000010);

// ======================
// CÁMARA
// ======================

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
);

camera.position.set(0, 8, 45);

// ======================
// RENDER
// ======================

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// ======================
// LUCES
// ======================

const ambient = new THREE.AmbientLight(0xffffff,1.5);
scene.add(ambient);

const point = new THREE.PointLight(0xff88cc,10,500);

point.position.set(0,0,0);

scene.add(point);

// ======================
// REDIMENSIONAR
// ======================

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});// ======================
// GALAXIA ESPIRAL
// ======================

const galaxyGroup = new THREE.Group();
scene.add(galaxyGroup);

const galaxyGeometry = new THREE.BufferGeometry();

const galaxyCount = 30000;

const positions = new Float32Array(galaxyCount * 3);
const colors = new Float32Array(galaxyCount * 3);

const colorInside = new THREE.Color("#ff7ac8");
const colorOutside = new THREE.Color("#7a6bff");

for(let i = 0; i < galaxyCount; i++){

    const i3 = i * 3;

    const radius = Math.random() * 40;

    const spin = radius * 0.4;

    const branch = (i % 5) * ((Math.PI * 2) / 5);

    positions[i3] =
        Math.cos(branch + spin) * radius + (Math.random() - 0.5);

    positions[i3 + 1] =
        (Math.random() - 0.5) * 2;

    positions[i3 + 2] =
        Math.sin(branch + spin) * radius + (Math.random() - 0.5);

    const mixedColor = colorInside.clone();

    mixedColor.lerp(colorOutside, radius / 40);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

}

galaxyGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
);

galaxyGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(colors, 3)
);

const galaxyMaterial = new THREE.PointsMaterial({

    size:0.18,

    vertexColors:true,

    transparent:true,

    depthWrite:false,

    blending:THREE.AdditiveBlending

});

const galaxy = new THREE.Points(
    galaxyGeometry,
    galaxyMaterial
);

galaxyGroup.add(galaxy);
function animate(){

    requestAnimationFrame(animate);

    galaxyGroup.rotation.y += 0.0008;

    renderer.render(scene,camera);

}document.getElementById("loading").classList.add("oculto");

console.log("Three.js cargó correctamente");

animate();
