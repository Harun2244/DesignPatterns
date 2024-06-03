import { Materials } from "../interfaces/Materials.js";

export abstract class Door  {
    
    private material : Materials;
    
    constructor(material : Materials){
        this.material = material;
    }


    display():string {
      return `This is a door made of ${this.material.showMaterial()}`
    }

}