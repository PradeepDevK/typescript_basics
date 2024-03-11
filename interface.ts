let draw = (x:number, y: number) => {
    //..
}
draw(1, 2);

let draw2 = (point) => {
    //point.x
    //..
}
draw2({x: 1, y:2, z: 3})

let draw3 = (point:{x:number, y: number, z: number}) => {
    //point.x
    //..
}
draw3({x: 1, y:2, z: 3})

interface point1 {
    x: number,
    y: number,
    z: number,
    draw: () => void
}

let someFunction = () => {

}

let drawRect = (point: point1) => {
    point.draw();

}
drawRect({x: 1, y:2, z: 3, draw: someFunction});