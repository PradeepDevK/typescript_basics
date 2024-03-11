var count = 'B'; //type is string
count = 'A';
var count1; //type is any, that's why TS not showing an error
count1 = 1;
count1 = 'A';
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, 'A', true]; //you should avoid this any type
var colorRed = 0;
var colorBlue = 1;
var colorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 101] = "Red";
    Color[Color["Blue"] = 102] = "Blue";
    Color[Color["Green"] = 103] = "Green";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
