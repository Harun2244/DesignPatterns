import { Data } from "../interfaces/Data";
import { AmericanWindow } from "./AmericanWindow";

export class DimensonsAdapter implements Data{

    americanWindow : AmericanWindow;
    
    
    constructor(americanWindow : AmericanWindow){

        this.americanWindow = americanWindow;

    }



 getInfo(): string {
    const lengthInCm:number = this.americanWindow.getLength() * 2.54; 
    const widthInCm:number = this.americanWindow.getWidth() * 2.54;

    return `Length of the window is ${lengthInCm} cm , width of the window is ${widthInCm} cm`;
 }

}