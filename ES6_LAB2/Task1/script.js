
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot create object from Shape class");
        }
    }

    area() {
        throw new Error("Area method must be implemented");
    }

    perimeter() {
        throw new Error("Perimeter method must be implemented");
    }
}


class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}


class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }
}


class Circle extends Shape {
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


let rectangle = new Rectangle(10, 5);
console.log("Rectangle Area:", rectangle.area());
console.log("Rectangle Perimeter:", rectangle.perimeter());

let square = new Square(4);
console.log("Square Area:", square.area());
console.log("Square Perimeter:", square.perimeter());

let circle = new Circle(7);
console.log("Circle Area:", circle.area().toFixed(2));
console.log("Circle Perimeter:", circle.perimeter().toFixed(2));