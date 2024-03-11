class Point {
    x: number;
    y: number;
    z: number;
    draw = ():any => {
        console.log('Draw', this.x, this.y, this.z);
    }
    drawRect = () => {
        this.draw()
    }
}

let shape = new Point();
shape.x = 1;
shape.y = 2;
shape.z = 3;
shape.draw()

let shape2 = new Point();
shape2.x = 6;
shape2.y = 12;
shape2.z = 18;
shape2.draw()