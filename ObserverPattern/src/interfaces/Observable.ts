import { Observer } from "./Observer";

export interface Observable {
     

    add(o : Observer):void;
    remove():void;
    notify():void;
    getOrderStatus():string;


}