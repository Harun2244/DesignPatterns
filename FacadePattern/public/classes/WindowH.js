import { WindowData } from "./WindowData.js";
export class WindowH {
    makeWindow(width, length, type) {
        this.data = new WindowData(width, length, type);
    }
    displayDoorCharacteristics() {
        var _a, _b, _c;
        return `Width of the window is ${(_a = this.data) === null || _a === void 0 ? void 0 : _a.getWidth()}
    , length of the window is ${(_b = this.data) === null || _b === void 0 ? void 0 : _b.getLength()}
    , type of the window is ${(_c = this.data) === null || _c === void 0 ? void 0 : _c.getTypeOfMaterial()}`;
    }
}
