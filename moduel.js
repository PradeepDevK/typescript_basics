"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accessModifiers_1 = require("./accessModifiers");
var shape = new accessModifiers_1.Point(1, 2, 3);
shape.z = 10;
shape.X = 8;
console.log('x', shape.X);
shape.drawRect();
