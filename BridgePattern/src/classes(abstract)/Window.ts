import { Materials } from "../interfaces/Materials.js";

export abstract class Window {

 private material : Materials;

 constructor(material : Materials){
    this.material = material;
 }

 display():string {
   return `This is a window made of ${this.material.showMaterial()}`
 }

}