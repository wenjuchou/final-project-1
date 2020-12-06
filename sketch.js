let world, myModel, bling;
let sky = '#sky';
let dancer ="dancing";
//let flakes = []; 
let szChange = 0.01;
// var mymodel;
// var allImages = ['#sky'];
// var flakes = [];
// var bling;

function preload() {
  //bling = loadSound('images/sound.mp3');
}

function setup() {
	noCanvas();
	world = new World('VRScene');
	makeGround();
	makeTrees();
	//makeStage();
}



function draw() {
  //move the user
	move();
}
	function makeGround(){
		//create a plane
		var g = new Plane({
		  x:0, y:0, z:0, 
		  width:50, height:50, 
		  asset: 'snow',
		  repeatX: 100,
		  repeatY: 100,
		  rotationX:-90, 
		  metalness:0.2
	  });
	}

  world.add(g);

  let sky = select('#theSky');
  sky.attribute('src', sky);
  
  function move(){
	if (mouseIsPressed || touchIsDown) {
		world.moveUserForward(0.03);
	}

	var pos = world.getUserPosition();
	
	if (pos.x > 25) {
		world.setUserPosition(-25, pos.y, pos.z);
	}
	else if (pos.x < -25) {
		world.setUserPosition(25, pos.y, pos.z);
	}
	if (pos.z > 25) {
		world.setUserPosition(pos.x, pos.y, -50);
	}
	else if (pos.z < -25) {
		world.setUserPosition(pos.x, pos.y, 50);
	}
}
