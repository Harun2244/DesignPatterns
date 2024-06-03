export class SalesDepartment {
    constructor(o) {
        this.observableToFollow = o;
    }
    update() {
        return `SD: Status of the order is ${this.observableToFollow.getOrderStatus()}`;
    }
}
