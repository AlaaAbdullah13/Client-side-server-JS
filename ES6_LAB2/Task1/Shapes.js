export class Shape {
    static count = 0;   

    constructor() {
        Shape.count++;
    }

    static getCount() {
        return Shape.count;
    }

    area() {
        throw "Area method not implemented";
    }

    perimeter() {
        throw "Perimeter method not implemented";
    }

    toString() {
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}


export class Rectangle extends Shape {
    static created = false;

    constructor(width, height) {
        if (Rectangle.created) {
            throw "Only one Rectangle is allowed";
        }
        super();
        this.width = width;
        this.height = height;
        Rectangle.created = true;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

export class Square extends Shape {
    static created = false;

    constructor(side) {
        if (Square.created) {
            throw "Only one Square is allowed";
        }
        super();
        this.side = side;
        Square.created = true;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }
}


export class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
