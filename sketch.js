var colour = ["red","blue","green","purple","yellow","orange","black"];
var colour1 = ["red","red","red","red","red","red","red"];
var colour2 = ["blue","blue","blue","blue","blue","blue","blue"];
function draw() {
background("#E0F9FB");

var x1 = 50;
var y1=50;
var x2=400;
var y2=50

var x=220;
var y=30;
for (var k = 0; k < colour.length; k++) {
  fill(colour[k]);
  
 ellipse(x, y, 50, 50);
  y=y+50;
}
for (var i = 0; i < colour1.length; i++) {
 fill(colour1[i]);
  

  ellipse(x1, y1, 50, 50);
  x1 = x1 + 50;
  y1=y1+50;
}
  for (var j =0; j < colour2.length; j++) {
  fill(colour2[j]);
  
  
  ellipse(x2, y2, 50, 50);
  x2= x2-50;
  y2=y2+50;
}
}
