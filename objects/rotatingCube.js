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