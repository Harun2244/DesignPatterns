export class Window {
    constructor(material) {
        this.material = material;
    }
    display() {
        return `This is a window made of ${this.material.showMaterial()}`;
    }
}
