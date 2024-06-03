import { SuperComplicatedBigWindow } from "./SuperComplicatedBigWindow.js";
export class ProxyComplicatedBigWindow {
    constructor(length, width) {
        this.originalWindow = undefined;
        this.length = length;
        this.width = width;
    }
    getSurfaceArea() {
        if (this.originalWindow === undefined) {
            this.originalWindow = new SuperComplicatedBigWindow(this.length, this.width);
        }
        return this.originalWindow.getSurfaceArea();
    }
}
