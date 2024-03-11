let count = 'B'; //type is string
count = 'A';

let count1; //type is any, that's why TS not showing an error
count1 = 1;
count1 = 'A';

let a:number;
let b:string;
let c:Boolean;
let d:any;
let e:number[] = [1, 2, 3];
let f:any[] = [1, 'A', true]; //you should avoid this any type


const colorRed = 0;
const colorBlue = 1;
const colorGreen = 2;

enum Color { Red = 101, Blue = 102, Green = 103 }
let backgroundColor = Color.Blue;