import { WoodCutting } from "../interfaces/WoodCutting";

export class AngularSaw implements WoodCutting{

    displayCut(): string {
        return `Wood was cut using an Angular Saw`;
    }
    
}