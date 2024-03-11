var PointNew = /** @class */ (function () {
    function PointNew(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.draw = function () {
            console.log('Draw', _this.x, _this.y, _this.z);
        };
        this.drawRect = function () {
            console.log('Drawing Rectangle');
            _this.draw();
        };
    }
    Object.defineProperty(PointNew.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return PointNew;
}());
var myShape = new PointNew(1, 2, 3);
myShape.z = 10;
myShape.X = 8;
console.log('x', myShape.X);
myShape.drawRect();
