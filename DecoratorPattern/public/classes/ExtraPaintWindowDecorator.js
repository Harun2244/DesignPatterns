export class ExtraPaintWindowDecorator {
    constructor(product) {
        this.product = product;
    }
    getCost() {
        return this.product.getCost() + 1;
    }
}
