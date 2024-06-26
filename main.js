import * as THREE from 'three';

// Creating the Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// Creating the renderer and adding it to the HTML DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creating our geometry and material, then merging it together into our shape, then adding the shape to the scene
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// adjusting the camera position to view the shape
camera.position.z = 5;

// animation loop: This will create a loop that causes the renderer to draw the scene every time the screen is refreshed
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );