// Set time parameters to control color interpolation
let time = 0; 

// Set the canvas to 800*800
function setup() {
  createCanvas(800, 800);
}

// Set the draw function and start drawing
function draw() {

// Add time parameters to achieve day and night alternation
time += 0.006;

// cos(time) returns -1 to 1, converted to 0 to 1
let t = (sin(time) + 1) / 2; 

// Define two colors, sky blue and dark blue, for the sky gradient
let fromColor = color(0, 51, 102);
let toColor = color(153, 204, 255);

// Calculate the current color according to the change of t, realizing the color changes within the interval

// *** Use the lerpColor() function, quoted from https://p5js.org/reference/#/p5/lerpColor ***

let currentColor = lerpColor(fromColor, toColor, t);

// Set background with currentColor
background(currentColor);

// Radius of circle
let radius = 250; 

// Use frameCount to set the movement trajectories of the sun and moon, and rotate them clockwise
let angle = map(1.5*frameCount, 0, width, PI, TWO_PI);

// Draw sun
// Angle is used to calculate x and y coordinates
let x1 = width / 2 + radius * cos(angle); 
let y1 = height / 2 + radius * sin(angle);

// The absolute value of the cos function adjusts the size of the circle
// The diameter of the Sun changes from 100 to 130 and back to 100
let diameter1 = map(abs(cos(angle - PI)), 0, 1, 100, 130); 

// Set sun ray size
let diameters1 = 35; 
let diameters2 = 20; 

// Set Sun color
fill("orange");
noStroke();
ellipse(x1, y1, diameter1); 

// Draw Sun ray
//Draws Sun ray based on sun position
let x4 = width / 2 + radius * cos(angle)+80;
let y4 = height / 2 + radius * sin(angle);
let diameter4 = diameters1; 

fill("orange"); 
noStroke();
ellipse(x4, y4, diameter4);

let x5 = width / 2 + radius * cos(angle)-80;
let y5 = height / 2 + radius * sin(angle);
let diameter5 = diameters1; 

fill("orange"); 
noStroke();
ellipse(x5, y5, diameter5);

let x6 = width / 2 + radius * cos(angle);
let y6 = height / 2 + radius * sin(angle)+80;
let diameter6 = diameters1; 

fill("orange"); 
noStroke();
ellipse(x6, y6, diameter6);

let x7 = width / 2 + radius * cos(angle);
let y7 = height / 2 + radius * sin(angle)-80;
let diameter7 = diameters1; 

fill("orange"); 
noStroke();
ellipse(x7, y7, diameter7);


let x8 = width / 2 + radius * cos(angle)+60;
let y8 = height / 2 + radius * sin(angle)+60;
// diameters2 is slightly smaller than diameters1 and has a sense of hierarchy
let diameter8 = diameters2; 

fill("orange"); 
noStroke();
ellipse(x8, y8, diameter8);

let x9 = width / 2 + radius * cos(angle)+60;
let y9 = height / 2 + radius * sin(angle)-60;
let diameter9 = diameters2; 

fill("orange"); 
noStroke();
ellipse(x9, y9, diameter9);

let x10 = width / 2 + radius * cos(angle)-60;
let y10 = height / 2 + radius * sin(angle)+60;
let diameter10 = diameters2; 

fill("orange"); 
noStroke();
ellipse(x10, y10, diameter10);

let x11 = width / 2 + radius * cos(angle)-60;
let y11 = height / 2 + radius * sin(angle)-60;
let diameter11 = diameters2;

fill("orange"); 
noStroke();
ellipse(x11, y11, diameter11);

// Draw stars
// The stars are "sandwiched" out of five circles

// First star
let x16 = width / 2 - radius * cos(angle)+70;
let y16 = height / 2 - radius * sin(angle)-70;
let diameter16 = diameter1/5; 

fill("white"); 
noStroke();
ellipse(x16, y16, diameter16);

let x12 = width / 2 - radius * cos(angle)+80;
let y12 = height / 2 - radius * sin(angle)-80;
let diameter12 = diameter1/5; 

fill(currentColor); 
noStroke();
ellipse(x12, y12, diameter12);

let x13 = width / 2 - radius * cos(angle)+60;
let y13 = height / 2 - radius * sin(angle)-80;
let diameter13 = diameter1/5; 

fill(currentColor); 
noStroke();
ellipse(x13, y13, diameter13);

let x14 = width / 2 - radius * cos(angle)+80;
let y14 = height / 2 - radius * sin(angle)-60;
let diameter14 = diameter1/5; 

fill(currentColor); 
noStroke();
ellipse(x14, y14, diameter14);

let x15 = width / 2 - radius * cos(angle)+60;
let y15 = height / 2 - radius * sin(angle)-60;
let diameter15 = diameter1/5; 

fill(currentColor); 
noStroke();
ellipse(x15, y15, diameter15);

//Second star
let x21 = width / 2 - radius * cos(angle)-72.5;
let y21 = height / 2 - radius * sin(angle)-42.5;
let diameter21 = diameter1/4; 

fill("white"); 
noStroke();
ellipse(x21, y21, diameter21);

let x17 = width / 2 - radius * cos(angle)-85;
let y17 = height / 2 - radius * sin(angle)-30;
let diameter17 = diameter1/4; 

fill(currentColor); 
noStroke();
ellipse(x17, y17, diameter17);

let x18 = width / 2 - radius * cos(angle)-60;
let y18 = height / 2 - radius * sin(angle)-30;
let diameter18 = diameter1/4; 

fill(currentColor); 
noStroke();
ellipse(x18, y18, diameter18);

let x19 = width / 2 - radius * cos(angle)-60;
let y19 = height / 2 - radius * sin(angle)-55;
let diameter19 = diameter1/4; 

fill(currentColor); 
noStroke();
ellipse(x19, y19, diameter19);

let x20 = width / 2 - radius * cos(angle)-85;
let y20 = height / 2 - radius * sin(angle)-55;
let diameter20 = diameter1/4; 

fill(currentColor); 
noStroke();
ellipse(x20, y20, diameter20);

// Third star
let x26 = width / 2 - radius * cos(angle)+40;
let y26 = height / 2 - radius * sin(angle)+40;
let diameter26 = diameter1/4; 

fill("white"); 
noStroke();
ellipse(x26, y26, diameter26);

let x22 = width / 2 - radius * cos(angle)+30;
let y22 = height / 2 - radius * sin(angle)+30;
let diameter22 = diameter1/5; 

fill(currentColor); 
noStroke();
ellipse(x22, y22, diameter22);

let x23 = width / 2 - radius * cos(angle)+50;
let y23 = height / 2 - radius * sin(angle)+30;
let diameter23 = diameter1/5; 

fill(currentColor); 
noStroke();
ellipse(x23, y23, diameter23);

let x24 = width / 2 - radius * cos(angle)+30;
let y24 = height / 2 - radius * sin(angle)+50;
let diameter24 = diameter1/5; 

fill(currentColor); 
noStroke();
ellipse(x24, y24, diameter24);

let x25 = width / 2 - radius * cos(angle)+50;
let y25 = height / 2 - radius * sin(angle)+50;
let diameter25 = diameter1/5; 

fill(currentColor); 
noStroke();
ellipse(x25, y25, diameter25);

// Draw moon
let x2 = width / 2 - radius * cos(angle);
let y2 = height / 2 - radius * sin(angle);
let diameter2 = diameter1; 

fill(255, 215, 0); 
noStroke();
ellipse(x2, y2, diameter2);

// Draw the crescent moon
let x3 = width / 2 - radius * cos(angle)+35;
let y3 = height / 2 - radius * sin(angle)-20;
let diameter3 = diameter1*2 / 3; 

fill(currentColor); 
noStroke();
ellipse(x3, y3, diameter3);

// Fouth star
let x27 = width / 2 - radius * cos(angle)+40;
let y27 = height / 2 - radius * sin(angle)-22.5;
let diameter27 = diameter1/5; 

fill("white"); 
noStroke();
ellipse(x27, y27, diameter27);

let x28 = width / 2 - radius * cos(angle)+30;
let y28 = height / 2 - radius * sin(angle)-30;
let diameter28 = diameter1/4; 

fill(currentColor); 
noStroke();
ellipse(x28, y28, diameter28);

let x29 = width / 2 - radius * cos(angle)+50;
let y29 = height / 2 - radius * sin(angle)-30;
let diameter29 = diameter1/4; 

fill(currentColor); 
noStroke();
ellipse(x29, y29, diameter29);

let x30 = width / 2 - radius * cos(angle)+50;
let y30 = height / 2 - radius * sin(angle)-5;
let diameter30 = diameter1/4; 

fill(currentColor); 
noStroke();
ellipse(x30, y30, diameter30);

let x31 = width / 2 - radius * cos(angle)+30;
let y31 = height / 2 - radius * sin(angle)-5;
let diameter31 = diameter1/4; 

fill(currentColor); 
noStroke();
ellipse(x31, y31, diameter31);

// Draw grass
fill(0, 102, 0); 
noStroke();
ellipse(400, 950, 1800, 1000); 
ellipse(200, 900, 1000, 1000); 

}