export class Door {
    constructor(material) {
        this.material = material;
    }
    display() {
        return `This is a door made of ${this.material.showMaterial()}`;
    }
}
