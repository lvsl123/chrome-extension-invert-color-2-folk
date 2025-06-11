// invert document without inverting images

// Original lines: 
// document.body.style.backgroundColor = "black";
// document.body.style.filter = "invert(1)";

document.documentElement.style.filter += " invert(1)";
