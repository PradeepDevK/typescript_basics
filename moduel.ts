import { Point } from "./accessModifiers";

let shape = new Point(1, 2, 3);
shape.z = 10;
shape.X = 8;
console.log('x', shape.X);
shape.drawRect()