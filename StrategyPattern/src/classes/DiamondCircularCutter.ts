import { GlassCutting } from "../interfaces/GlassCutting";

export class DiamondCircularCutter implements GlassCutting{

    displayCut(): string {
   return  `Glass was cut using a Diamond Circular Cutter`; 
}

}