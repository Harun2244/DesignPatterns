export class GlassThicknessWindowDecorator {
    constructor(product) {
        this.product = product;
    }
    getCost() {
        return this.product.getCost() + 3;
    }
}
