import { Observable } from "../interfaces/Observable";
import { Observer } from "../interfaces/Observer";

export class QualityControl implements Observer{

    observableToFollow:Observable;

    constructor(observable : Observable){
        this.observableToFollow = observable;
    }

    update(): string {
        return `QC: Status of this order is ${this.observableToFollow.getOrderStatus()}`;
    }


}