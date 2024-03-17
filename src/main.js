import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { loading } from './loadingScreen';
import { scroll } from './scroll';

loading();
scroll();

// //making gltf loader
// const loader = new GLTFLoader();

// loader.load( './concerto/scene.gltf', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

// // grab canvas from tag
// let canvas = document.querySelector("#c");

// //create a renderer
// let renderer = new THREE.WebGLRenderer({antialias: true, canvas});

// //create a perspective camera
// const fov = 75;
// const aspect = 2;
// const near = 0.1;
// const far = 5;
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// //move camera away from orgin on z axis
// camera.position.z = 5;


// //create a scene
// const scene = new THREE.Scene();

// //create our shapes/geometry
// const boxWidth = 1;
// const boxHeight = 1;
// const boxDepth = 1;
// const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

// //create our shape's clothes/material
// const material = new THREE.MeshPhongMaterial({color: 0x44aa88});

// //merge our shape and material into a mesh 
// const cube = new THREE.Mesh(geometry, material);

// //add the shape to the scene
// // scene.add(cube);

// //rerender the page using reqAnimFrame
// function render(time) {
// 	time *= 0.001;  // convert time to seconds

// 	//if page size shrinks canvas resize canvas
// 	const canvas = renderer.domElement;
// 	camera.aspect = canvas.clientWidth / canvas.clientHeight;
// 	camera.updateProjectionMatrix();

// 	//resize resolution of canvas if canvas is resized
// 	if (resizeRendererToDisplaySize(renderer)) {
// 		const canvas = renderer.domElement;
// 		camera.aspect = canvas.clientWidth / canvas.clientHeight;
// 		camera.updateProjectionMatrix();
// 	}

// 	//moving our cube
// 	// cube.rotation.x = time;
// 	// cube.rotation.y = time;

// 	//move the camera
// 	camera.rotateY(0.001);

// 	//render our scene and camera w our renderer
// 	renderer.render(scene, camera);

// 	requestAnimationFrame(render);
// }
// requestAnimationFrame(render);


// //create a directional light to the scene
// const color = 0xFFFFFF;
// const intensity = 3;
// const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(-1, 2, 4);
// scene.add(light);


// //function to resize internal canvas size if page is resized
// function resizeRendererToDisplaySize(renderer) {
// 	const canvas = renderer.domElement;
// 	const width = canvas.clientWidth;
// 	const height = canvas.clientHeight;
// 	const needResize = canvas.width !== width || canvas.height !== height;
// 	if (needResize) {
// 		renderer.setSize(width, height, false);
// 	}
// 	return needResize;
// }