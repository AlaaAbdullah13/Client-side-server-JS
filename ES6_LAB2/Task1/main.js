import { Shape, Rectangle, Square, Circle } from "./Shapes.js";

try {
    let rect = new Rectangle(10, 5);
    console.log(rect.toString());

    let square = new Square(4);
    console.log(square.toString());

    let circle = new Circle(7);
    console.log(circle.toString());

    console.log("Total Shapes Created:", Shape.getCount());

    
} catch (error) {
    console.error(error);
}
