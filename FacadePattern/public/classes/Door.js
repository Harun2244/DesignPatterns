import { DoorData } from "./DoorData.js";
export class Door {
    makeDoor(width, length, type) {
        this.data = new DoorData(width, length, type);
    }
    displayDoorCharacteristics() {
        var _a, _b, _c;
        return `Width of the door is ${(_a = this.data) === null || _a === void 0 ? void 0 : _a.getWidth()}
    , length of the door is ${(_b = this.data) === null || _b === void 0 ? void 0 : _b.getLength()}
    , type of the door is ${(_c = this.data) === null || _c === void 0 ? void 0 : _c.getTypeOfMaterial()}`;
    }
}
