import { GlassCutting } from "../interfaces/GlassCutting";

export class LaserCutter implements GlassCutting{

displayCut(): string {
    return `Glass was cut using a Laser Cutter`;
}

}