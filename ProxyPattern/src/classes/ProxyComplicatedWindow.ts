import { Window } from "../interfaces/Window.js";
import { SuperComplicatedBigWindow } from "./SuperComplicatedBigWindow.js";

export class ProxyComplicatedBigWindow implements Window{
    
    private length:number;
    private width:number;
    private originalWindow : SuperComplicatedBigWindow | undefined = undefined;

    constructor(length:number, width:number){
        this.length = length;
        this.width = width;
    }
    
    
    
    getSurfaceArea(): number {
        if(this.originalWindow === undefined){
            this.originalWindow = new SuperComplicatedBigWindow(this.length, this.width);
        }
        return this.originalWindow.getSurfaceArea();
    }
}