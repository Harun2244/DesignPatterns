export class WindowData {
    constructor(length, width, typeOfMaterial) {
        this.length = length;
        this.width = width;
        this.typeOfMaterial = typeOfMaterial;
    }
    getLength() {
        return this.length;
    }
    getWidth() {
        return this.width;
    }
    getTypeOfMaterial() {
        return this.typeOfMaterial;
    }
}
