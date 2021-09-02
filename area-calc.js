/*
if you're reading this i hope you are having a good day

anyways, 


3 separate functions, each calculating the area of a different shape

parameters are always numbers

each function returns a number which represents the area of said shape

formulae: 

rect = l*w
tri = (b * h) * / 2
circle = pi * (radius squared)

if calculated area results in a negative, return "undefined"
*/

function calculateRectangleArea(length, width) {
  let area = length * width;
  if (!(area <= 0)) {
    return area;
  }

}
function calculateTriangleArea(base, height) {
  let area = (base * height) / 2;
  if (!(area <= 0)) {
    return area;
  }

}
function calculateCircleArea(radius) {
  let area = Math.PI * (radius * radius);
  if (!(radius <= 0)) {
    return area;
  }

}