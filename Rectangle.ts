import {Shape} from "./Shape";
import {Colorable} from "./Colorable";

export class Rectangle extends Shape implements Colorable {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    checkColorable(): boolean {
        return false;
    }

    howToColor(): string {
        return 'Color all four sides.';
    }
}
