export class QualityControl {
    constructor(observable) {
        this.observableToFollow = observable;
    }
    update() {
        return `QC: Status of this order is ${this.observableToFollow.getOrderStatus()}`;
    }
}
