import { WindowStates } from "../interfaces/WindowStates.js";
//import { ExportationWindowState } from "./ExportationWindowState";
import { InspectionWindowState } from "./InspectionWindowState.js";
import { Window } from "./Window.js";

export class ProductionWindowState implements WindowStates{

    private window:Window;

    constructor(window:Window){
        this.window=window;
    }

start(): string {
    return "Window already in production! - Production State";
}

inspect(): string {
    this.window.changeState(new InspectionWindowState(this.window));
    return "Window sent to inspection!";
}

deliver(): string {
    return "Window is not ready for delivery! - Production State";
}


}