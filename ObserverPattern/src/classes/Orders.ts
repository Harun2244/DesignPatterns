import { Observable } from "../interfaces/Observable";
import { Observer } from "../interfaces/Observer";

export class Orders implements Observable{

    private observers : Observer[] = [];
    private static statusArray:string[] = ["Not ordered", "In progress", "Arrived"];
    private orderStatus:string = "N/A";
    

    add(o: Observer): void {
        this.observers.push(o);
    }

    remove(): void {
        this.observers.pop();
    }

    notify(): void {
        this.observers.forEach( (observer) => {

            observer.update();

        });

    }

    getOrderStatus(){
        return this.orderStatus;
      }  

    changeOrderStatus(option : HTMLSelectElement):void{
      
        switch(option.value){
          case "NotOrdered":
            this.orderStatus = Orders.statusArray[0];
            break;
          
           case "InProgress" :
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