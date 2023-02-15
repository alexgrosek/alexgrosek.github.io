// Import the necessary libraries for orbiting and loading 3D models

const colors = new Array('aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 
'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 
'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 
'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 
'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 
'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 
'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 
'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 
'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 
'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 
'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 
'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 
'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 
'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 
'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 
'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 
'white', 'whitesmoke', 'yellow', 'yellowgreen');
//let word = random(colors);

//console.log(colors[0]);

//import { SkeletonUtils } from 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/jsm/utils/SkeletonUtils.js';
import { OrbitControls } from "../three/OrbitControls.js";
import { GLTFLoader } from "../three/GLTFLoader.js";
import { FlyControls } from "../three/FlyControls.js";
import { clone } from "../three/SkeletonUtils.js";

// Create a new instance of the GLTFloader, camera, and three.js scene with optional camera position and background settings
var loader = new GLTFLoader();

var scene = new THREE.Scene();
    scene.background = new THREE.Color('blue');

    // for (let i = 0; i<length(colors); i++ ) {
    //     scene.background = new THREE.Color(colors[i]);
    //     //if (i = length(colors)) { i = 0 };
    //     //}
    //   }
// random colors from list
//function rndclr(){
    //for (let i = 0; i<length(colors); i++ ) {
//scene.background = new THREE.Color(colors[50]);
        //if (i >= length(colors)) { i = 0 };
        //}
    //}

//rndclr();
// const textureloader = new THREE.TextureLoader();
// //textureloader.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg' , function(texture)
// //textureloader.load('Stephans-Quintet.jpg' , function(texture)
// //textureloader.load('Southern-Ring-Nebula.jpg' , function(texture)
// textureloader.load('Media/Cosmic-Cliffs.jpg' , function(texture)
//     {
//         scene.background = texture;  
//     });

var camera = new THREE.PerspectiveCamera(9.5, window.innerWidth / window.innerHeight, .01, 10000 );
    //camera.position.set(-100,90,100);
    //camera.lookAt(new THREE.Vector3(100,50,100));
    camera.position.set(-50,20,50);
    
    //console.log(camera.position);

var renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setClearColor( 0x000000, 0 ); // the default
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

// var flycontrols = new THREE.FlyControls( camera, render.domElement );
//     // flycontrols.movementSpeed = 100;
//     // flycontrols.rollSpeed = Math.PI / 24;
//     // flycontrols.autoForward = false;
//     // flycontrols.dragToLook = false;
//     flycontrols.update();

var controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

//var ambientLight = new THREE.AmbientLight( 0x000fff,1 );
var ambientLight = new THREE.AmbientLight( 'lightorange',.5 );
//var ambientLight = new THREE.AmbientLight( 0xcccccc,.2 );
    scene.add( ambientLight );

 var directionalLight = new THREE.DirectionalLight( 0x0040ff, .5,0 );
     directionalLight.position.set(-1,-1,0); // probably in radians?
     scene.add( directionalLight );

 var directionalLight2 = new THREE.DirectionalLight( 0x0040ff, .6,0 );
     directionalLight2.position.set(1,10,0);
     scene.add( directionalLight2 );

// var light1 = new THREE.PointLight( 0xff0040,.5,50 ); // light color, intensity and position R
// var light2 = new THREE.PointLight( 0x0040ff,.5,50 ); // light color, intensity and position B
// var light3 = new THREE.PointLight( 0xff80ff,.5,50 ); // light color, intensity and position Pink

var light1 = new THREE.PointLight( 'blue',.1,50 ); // light color, intensity and position
var light2 = new THREE.PointLight( 'red',1,50 ); // light color, intensity and position
var light3 = new THREE.PointLight( 'yellow',1,50 ); // light color, intensity and position

function revolve(){
  var time = Date.now()*.001;
  
  light1.position.x = Math.sin( time * 0.7) * 15//30;
  light1.position.y = Math.cos( time * 0.5) * 20//40;
  light1.position.z = Math.cos( time * 0.3) * 15//30;

  light2.position.x = Math.cos( time * 0.3) * 15//30;
  light2.position.y = Math.sin( time * 0.5) * 20//40;
  light2.position.z = Math.sin( time * 0.7) * 15//30;

  light3.position.x = Math.sin( time * 0.7) * 15//30;
  light3.position.y = Math.cos( time * 0.3) * 20//40;
  light3.position.z = Math.sin( time * 0.5) * 15//30;
}

function loadToScene(model,xval,yval,zval,rval){
    // Add original object
    //model.position.set(0,10,0);
    //scene.add(model);

    // Clone a copy
    var model2 = model.clone(true);
    model2.position.set(xval,yval,zval);
    model2.rotation.y += rval
    scene.add(model2);
}

function threeLoad(stag,file,xval,yval,zval,rval,clr,copy) {
    loader.load(file,function(gltf){
        const model = gltf.scene;
        var newMaterial = new THREE.MeshLambertMaterial({color: clr, wireframe: false}); // set object color
        scene.add( light1,light2,light3 ); // turn on point lights
        model.traverse((o) => {
          if (o.isMesh || o.isLight) {o.castShadow = true, o.material = newMaterial;} // 
        });      
        model.castShadow = true;
        model.recieveShadow = true;
        model.position.x = xval;
        model.position.y = yval;
        model.position.z = zval;
        model.rotation.y += rval;
        scene.add(model);
        if (copy == true){
            loadToScene(model,xval+7,yval,zval-7, Math.PI / 2)
        }
      });
}

let obj;
let obj2;
let obj3;
let obj4;
let obj5;

threeLoad(obj,"Models/City_1.glb",-0,-6,0,0,0xffffff,false);
//threeLoad(obj2,"Models/City_2.glb",-7.5,-5,0,0,0xffffff,true);
//threeLoad(obj3,"Models/City_3.glb",-11.5,-5,-2,0,0xffffff,true);
//threeLoad(obj4,"Models/City_3.glb",-5.5,-5,7,0,0xffffff,false);
//threeLoad(obj5,"Models/City_4.glb",-2.5,-5,5,0,0xcccccc,false);

function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    //scene.rotation.y += .001;
    //scene.rotation.x += .001;
    revolve();
  }

animate();