import {Rectangle} from "./Rectangle";
import {Colorable} from "./Colorable";

export class Square extends Rectangle implements Colorable {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    calculateArea(): number {
        return super.calculateArea();
    }

    checkColorable(): boolean {
        return true;
    }

    howToColor(): string {
        return 'Color all four sides.';
    }
}
