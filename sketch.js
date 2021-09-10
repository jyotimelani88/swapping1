var a = prompt("enter the first variable");
var  b = prompt("Enter the second variable");
var c


function setup() {
  createCanvas(400, 400);

  c = createButton("SWAP THE NUMBERS");
  c.mouseClicked(swap)
}

function draw() {
  background(220);
}

function swap()
{
  [a,b] = [b,a]

  console.log("The first no after swapping: "+a)
  console.log("The second no after swapping: "+b)

}