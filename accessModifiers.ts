export class Point {
    private x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number) {
        this.x = x;
        this.y = y;
        this.z = z;   
    }    
    private draw = ():any => {
        console.log('Draw', this.x, this.y, this.z);
    }
    drawRect = ():any => {
        console.log('Drawing Rectangle');
        this.draw()
    }

    get X(): number | undefined {
        return this.x;
    }

    set X(value: number | undefined) {
        this.x = value;
    }
}

// let shape = new Point(1, 2, 3);
// shape.z = 10;
// shape.X = 8;
// console.log('x', shape.X);
// shape.drawRect()