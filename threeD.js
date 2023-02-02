// Import the necessary libraries for orbiting and loading 3D models

import {OrbitControls} from "../three/OrbitControls.js";
import {GLTFLoader} from "../three/GLTFLoader.js";

// Create a new instance of the GLTFloader, camera, and three.js scene with optional camera position and background settings
var loader = new GLTFLoader();

var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000fff);

var camera = new THREE.PerspectiveCamera(6, window.innerWidth / window.innerHeight, .01, 10000 );
    camera.position.set(-100,60,75);
    //camera.lookAt(new THREE.Vector3(-200,0,0))
    // camera.lookAt(-200,1000,50)
    console.log(camera.position);

var renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setClearColor( 0x000000, 0 ); // the default
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set(0,1,0);
    scene.add( directionalLight );

var obj;
loader.load("City_1.glb",function(gltf){
  obj = gltf.scene;
  var newMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false}); // set object color
  var light1 = new THREE.PointLight( 0xff0040,.1,50 ); // light color, intensity and position
  var light2 = new THREE.PointLight( 0x0040ff,.1,50 ); // light color, intensity and position
  var light3 = new THREE.PointLight( 0xff80ff,.1,50 ); // light color, intensity and position
  scene.add( light1,light2,light3 ); // turn on point lights
  obj.traverse((o) => {
    if (o.isMesh || o.isLight) {o.castShadow = true, o.material = newMaterial;} // 
  });      
  gltf.scene.castShadow = true;
  gltf.scene.recieveShadow = true;
  gltf.scene.position.x = -5;
  gltf.scene.position.y = 0;
  scene.add(gltf.scene);
});

var obj2;
loader.load("City_2.glb",function(gltf){
  obj2 = gltf.scene;
  var newMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false}); // set object color
  var light1 = new THREE.PointLight( 0xff0040,.1,50 ); // light color, intensity and position
  var light2 = new THREE.PointLight( 0x0040ff,.1,50 ); // light color, intensity and position
  var light3 = new THREE.PointLight( 0xff80ff,.1,50 ); // light color, intensity and position
  scene.add( light1,light2,light3 ); // turn on point lights
  obj2.traverse((o) => {
    if (o.isMesh || o.isLight) {o.castShadow = true, o.material = newMaterial;} // 
  });      
  gltf.scene.castShadow = true;
  gltf.scene.recieveShadow = true;
  gltf.scene.position.x = -9;
  gltf.scene.position.y = 0;
  scene.add(gltf.scene);
});

var obj3;
loader.load("City_3.glb",function(gltf){
  obj3 = gltf.scene;
  var newMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false}); // set object color
  var light1 = new THREE.PointLight( 0xff0040,.1,50 ); // light color, intensity and position
  var light2 = new THREE.PointLight( 0x0040ff,.1,50 ); // light color, intensity and position
  var light3 = new THREE.PointLight( 0xff80ff,.1,50 ); // light color, intensity and position
  scene.add( light1,light2,light3 ); // turn on point lights
  obj3.traverse((o) => {
    if (o.isMesh || o.isLight) {o.castShadow = true, o.material = newMaterial;} // 
  });      
  gltf.scene.castShadow = true;
  gltf.scene.recieveShadow = true;
  gltf.scene.position.x = -13;
  gltf.scene.position.y = 0;
  gltf.scene.position.z = -2;

  scene.add(gltf.scene);
});

var obj3;
loader.load("City_3.glb",function(gltf){
  obj3 = gltf.scene;
  var newMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false}); // set object color
  var light1 = new THREE.PointLight( 0xff0040,.1,0); // light color, intensity and position
  var light2 = new THREE.PointLight( 0x0040ff,.1,0 ); // light color, intensity and position
  var light3 = new THREE.PointLight( 0xff80ff,.1,0 ); // light color, intensity and position
  scene.add( light1,light2,light3 ); // turn on point lights
  obj3.traverse((o) => {
    if (o.isMesh || o.isLight) {o.castShadow = true, o.material = newMaterial;} // 
  });      
  gltf.scene.castShadow = true;
  gltf.scene.recieveShadow = true;
  gltf.scene.position.x = -5;
  gltf.scene.position.y = 0;
  gltf.scene.position.z = 7;

  scene.add(gltf.scene);
});

var obj4;
loader.load("City_4.glb",function(gltf){
  obj4 = gltf.scene;
  var newMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false}); // set object color
  var light1 = new THREE.PointLight( 0xff0040,.1,50 ); // light color, intensity and position
  var light2 = new THREE.PointLight( 0x0040ff,.1,50 ); // light color, intensity and position
  var light3 = new THREE.PointLight( 0xff80ff,.1,50 ); // light color, intensity and position
  scene.add( light1,light2,light3 ); // turn on point lights
  obj4.traverse((o) => {
    if (o.isMesh || o.isLight) {o.castShadow = true, o.material = newMaterial;} // 
  });      
  gltf.scene.castShadow = true;
  gltf.scene.recieveShadow = true;
  gltf.scene.position.x = -10;
  gltf.scene.position.y = 0;
  gltf.scene.position.z = -7;

  scene.add(gltf.scene);
});

function addLight(){
    var ambientLight = new THREE.AmbientLight( 0xcccccc );
    scene.add( ambientLight );
  };
  
addLight();
  
function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    //obj.rotation.y += .001;
    //obj2.rotation.x += .001;
    //obj3.rotation.y += .001;
      // required if controls.enableDamping or controls.autoRotate are set to true
    //controls.update();
    // draw();
  }

animate();
// var obj2;
// loader.load("City_1.glb",function(gltf){
//   obj2 = gltf.scene;
//   gltf.scene.position.x = -2;
//   gltf.scene.position.y = -7;
//   scene.add(gltf.scene);
// });

// var obj3;
// loader.load("City_1.glb",function(gltf){
//   obj3 = gltf.scene;
//   gltf.scene.position.x = -6;
//   gltf.scene.position.y = -7;
//   scene.add(gltf.scene);
// });

//light = new THREE.AmbientLight( 0xffffff ); // soft white light
//scene.add( light );


//hemiLight = new THREE.HemisphereLight(0xffeeb1,0x080820,.5);
//scene.add(hemiLight)


//Add light
//var light = new THREE.AmbientLight(0x000fff,0.5);
//scene.add(light);

//let hemiLight;
//hemiLight = new THREE.HemisphereLight(0xffeeb1,0x080820,.5);
//scene.add(hemiLight)

// function revolve(){
//   var time = Date.now() * 1000;
  
//   light1.position.x = Math.sin( time * 0.7) * 30;
//   light1.position.y = Math.cos( time * 0.5) * 40;
//   light1.position.z = Math.cos( time * 0.3) * 30;

//   light2.position.x = Math.cos( time * 0.3) * 30;
//   light2.position.y = Math.sin( time * 0.5) * 40;
//   light2.position.z = Math.sin( time * 0.7) * 30;

//   light3.position.x = Math.sin( time * 0.7) * 30;
//   light3.position.y = Math.cos( time * 0.3) * 40;
//   light3.position.z = Math.sin( time * 0.5) * 30;
// }