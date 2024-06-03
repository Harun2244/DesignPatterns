import { Observable } from "../interfaces/Observable";
import { Observer } from "../interfaces/Observer";

export class SalesDepartment implements Observer {

    private observableToFollow : Observable;

    constructor(o : Observable){
       
        this.observableToFollow = o;

    }

    update(): string {
        return `SD: Status of the order is ${this.observableToFollow.getOrderStatus()}`;
    }


}