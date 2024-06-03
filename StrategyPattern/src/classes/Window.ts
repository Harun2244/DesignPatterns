import { GlassCutting } from "../interfaces/GlassCutting";
import { WoodCutting } from "../interfaces/WoodCutting";

export class Window{

   private glassCut : GlassCutting;
   private woodCut : WoodCutting;

   constructor(glasscut : GlassCutting, woodCut:WoodCutting){
    this.glassCut = glasscut;
    this.woodCut = woodCut;
   }

   displayWoodCut(): string{
    return this.woodCut.displayCut();
   }

   displayGlassCut(): string{
     return this.glassCut.displayCut();
   }

}