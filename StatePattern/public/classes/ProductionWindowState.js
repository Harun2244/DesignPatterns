//import { ExportationWindowState } from "./ExportationWindowState";
import { InspectionWindowState } from "./InspectionWindowState.js";
export class ProductionWindowState {
    constructor(window) {
        this.window = window;
    }
    start() {
        return "Window already in production! - Production State";
    }
    inspect() {
        this.window.changeState(new InspectionWindowState(this.window));
        return "Window sent to inspection!";
    }
    deliver() {
        return "Window is not ready for delivery! - Production State";
    }
}
