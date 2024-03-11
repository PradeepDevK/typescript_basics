"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y, z) {
        var _this = this;
        this.draw = function () {
            console.log('Draw', _this.x, _this.y, _this.z);
        };
        this.drawRect = function () {
            console.log('Drawing Rectangle');
            _this.draw();
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
// let shape = new Point(1, 2, 3);
// shape.z = 10;
// shape.X = 8;
// console.log('x', shape.X);
// shape.drawRect()
