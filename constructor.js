var Point = /** @class */ (function () {
    function Point(x, y, z) {
        var _this = this;
        this.draw = function () {
            console.log('Draw', _this.x, _this.y, _this.z);
        };
        this.drawRect = function () {
            _this.draw();
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Point;
}());
var shape = new Point();
shape.draw();
var shape2 = new Point(6, 12, 18);
shape2.draw();
