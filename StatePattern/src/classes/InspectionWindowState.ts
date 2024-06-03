import { WindowStates } from "../interfaces/WindowStates.js";
import { ExportationWindowState } from "./ExportationWindowState.js";
import { Window } from "./Window.js";

export class InspectionWindowState implements WindowStates{
 
 
    private window:Window;

    constructor(window:Window){
        this.window = window;
    }

    start(): string {
        return "Window already passed the start! - Inspection State";
    }

    inspect(): string {
        return "Window alredy in inspection!";

    }

    deliver(): string {
        this.window.changeState(new ExportationWindowState(this.window));
        return "Window succesfully sent to delivery! - Inspection State";
    }
    


}