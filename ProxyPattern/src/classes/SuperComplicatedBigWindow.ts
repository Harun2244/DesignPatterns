import { Window } from "../interfaces/Window.js";

export class SuperComplicatedBigWindow implements Window{
    private length:number;
    private width:number;

    constructor(length:number, width:number){
        this.length = length;
        this.width = width;
    }

    getSurfaceArea(): number {
        return this.length*this.width;
    }
    
}