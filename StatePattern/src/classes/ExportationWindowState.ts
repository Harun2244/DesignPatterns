import { WindowStates } from "../interfaces/WindowStates.js";
import { Window } from "./Window.js"

export class ExportationWindowState implements WindowStates {

    window:Window;
    
    constructor(window:Window){

        this.window = window;
    }

    start() : string{
         return "Window sent to export! - Exportation State";
    }

    inspect() : string{
        return "Window sent to export! - Exportation State";
    }

    deliver() :string {
        return "Window already in export - Exportation State";
    }

}