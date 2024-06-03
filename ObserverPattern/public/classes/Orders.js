export class Orders {
    constructor() {
        this.observers = [];
        this.orderStatus = "N/A";
    }
    add(o) {
        this.observers.push(o);
    }
    remove() {
        this.observers.pop();
    }
    notify() {
        this.observers.forEach((observer) => {
            observer.update();
        });
    }
    getOrderStatus() {
        return this.orderStatus;
    }
    changeOrderStatus(option) {
        switch (option.value) {
            case "NotOrdered":
                this.orderStatus = Orders.statusArray[0];
                break;
            case "InProgress":
                this.orderStatus = Orders.statusArray[1];
                break;
            case "Arrived":
                this.orderStatus = Orders.statusArray[2];
                break;
            default:
                break;
        }
    }
}
Orders.statusArray = ["Not ordered", "In progress", "Arrived"];
