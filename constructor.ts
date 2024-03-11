class Point {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number) {
        this.x = x;
        this.y = y;
        this.z = z;   
    }    
    draw = ():any => {
        console.log('Draw', this.x, this.y, this.z);
    }
    drawRect = () => {
        this.draw()
    }
}

let shape = new Point();
shape.draw()

let shape2 = new Point(6, 12, 18);
shape2.draw()