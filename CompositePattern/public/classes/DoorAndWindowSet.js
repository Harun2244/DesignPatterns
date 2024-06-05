export class DoorAndWindowSet {
    constructor(products) {
        this.products = products;
    }
    getPrice() {
        let totalprice = 0;
        this.products.forEach((product, index) => {
            totalprice += this.products[index].getPrice();
        });
        return totalprice;
    }
}
