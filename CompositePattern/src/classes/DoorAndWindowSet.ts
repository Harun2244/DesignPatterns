import { Product } from "../interfaces/Product.js";

export class DoorAndWindowSet implements Product {
  private products: Product[];

  constructor(products: Product[]) {
    this.products = products;
  }

  getPrice(): number {
    let totalprice: number = 0;

    this.products.forEach((product, index) => {
      totalprice += this.products[index].getPrice();
    });
    return totalprice;
  }
}
