import { ExportationWindowState } from "./ExportationWindowState.js";
export class InspectionWindowState {
    constructor(window) {
        this.window = window;
    }
    start() {
        return "Window already passed the start! - Inspection State";
    }
    inspect() {
        return "Window alredy in inspection!";
    }
    deliver() {
        this.window.changeState(new ExportationWindowState(this.window));
        return "Window succesfully sent to delivery! - Inspection State";
    }
}
