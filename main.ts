import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Shape} from "./Shape";

let shapes = [];

shapes[0] = new Circle('Hinh tron', 2);
shapes[1] = new Rectangle(2, 3, 'Hinh chu nhat');
shapes[2] = new Square('Hinh vuong', 3);

shapes.forEach(item => {
    console.log(item.calculateArea());
    if (item.checkColorable()) console.log(item.howToColor());
});