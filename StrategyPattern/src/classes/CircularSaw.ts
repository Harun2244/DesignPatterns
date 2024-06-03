import { WoodCutting } from "../interfaces/WoodCutting";

export class CircularSaw implements WoodCutting{

    displayCut(): string {
        return `Wood was cut using a Circular Saw`;
    }

}