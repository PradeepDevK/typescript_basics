class PointNew {
    constructor(private x?: number, public y?: number, public z?: number) { }    
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

let myShape = new PointNew(1, 2, 3);
myShape.z = 10;
myShape.X = 8;
console.log('x', myShape.X);
myShape.drawRect()