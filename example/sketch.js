// Declaración de variables 
var canvas;
var click1;
var click2;
var click3;
var clickImg;

function preload(){
    clickImg = loadImage('./logo.png');  // Carga local de imagen
}
function setup() {
  //createCanvas(400, 400);
   createCanvas(displayWidth, displayHeight);
	
  click1 = new Clickable();
  click1.cornerRadius = 5 ; 
  click1.locate(100, 80); 
  click1.onHover   = function () {
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
    this.text = "Señalado!";
  }
  click1.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "No señalado ";
    this.textColor = "#000000";
  }
  click1.onPress   = function () {
     this.stroke = "#FF0000";
  }
  click1.onRelease = function () {
   // this.x += 10;
  }

  click2 = new Clickable();
  click2.cornerRadius = 0;
  click2.textScaled = true;
  click2.text = "Boton 2";
  click2.locate(210, 80);
  click2.resize(100, 50);
  click2.onOutside = function () {
    this.color = "#FFFFFF";
  }
  click2.onHover = function () {
    this.color = "#AA33AA";
  }
  click2.onPress = function () {
    alert("Mensaje superior : Movilcenter Lab");
	  
  }

  click3 = new Clickable();
  //click3.image = clickImg;
  click3.locate(280,250);
  click3.resize(100,100);
  click3.text = "";
  click3.onHover = function () {
    this.color = "#AA33AA";
    this.noTint = false;
    this.tint = "#FF0000";
  }
  click3.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  }

  // image will stretch to fill button by default
  click4 = new Clickable();
  //click4.image = clickImg;
  click4.imageScale = 1;
  click4.text = "";
  click4.locate(10, 200);
  click4.resize(120, 90);
  click4.onHover = function () {
    click4.imageScale = 1.1;
  }
  click4.onOutside = function () {
    click4.imageScale = 1;
  }

  // centered and fitted
  click5 = new Clickable();
  //click5.image = clickImg;
  click5.fitImage = true; // no stretching!
  click5.imageScale = 1;
  click5.text = "";
  click5.locate(140, 200);
  click5.resize(120, 90);
  click5.onHover = function () {
    click5.imageScale = 1.1;
  }
  click5.onOutside = function () {
    click5.imageScale = 1;
  }
  
						
  						
}

function draw(){
 
  background(20); 
 
  // BORDE PANTALLA : 
  strokeWeight(2.0); stroke(0,140,200); noFill();
  rect(0,0,displayWidth-2, height -2);
	
  rect(0,0, windowWidth , windowHeight );
  strokeWeight(1.0);
	
	
  click1.draw();
  click2.draw();
  click3.draw();
  click4.draw();
  click5.draw();
	
	
}








































