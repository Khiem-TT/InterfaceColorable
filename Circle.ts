import {Shape} from "./Shape";
import {Colorable} from "./Colorable";

export class Circle extends Shape implements Colorable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    checkColorable(): boolean {
        return false;
    }

    howToColor(): string {
        return 'Color all four sides.';
    }
}
