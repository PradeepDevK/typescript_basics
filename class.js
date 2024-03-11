var Point = /** @class */ (function () {
    function Point() {
        var _this = this;
        this.draw = function () {
            console.log('Draw', _this.x, _this.y, _this.z);
        };
        this.drawRect = function () {
            _this.draw();
        };
    }
    return Point;
}());
var shape = new Point();
shape.x = 1;
shape.y = 2;
shape.z = 3;
shape.draw();
var shape2 = new Point();
shape2.x = 6;
shape2.y = 12;
shape2.z = 18;
shape2.draw();
