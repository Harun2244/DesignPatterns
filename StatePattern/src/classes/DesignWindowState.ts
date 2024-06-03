import { WindowStates } from "../interfaces/WindowStates";
import { ProductionWindowState } from "./ProductionWindowState.js";
import { Window } from "./Window";

export class DesignWindowState implements WindowStates {

private window:Window;

constructor(window:Window){
    this.window = window;
}

    start(): string {
            
        this.window.changeState(new ProductionWindowState(this.window));
        return "Window has been sent to production!";
        
    }

    inspect(): string {
        return "Window not ready for inspection - Design State!";
    }

    deliver(): string {
        return "Window not ready for delivery - Design State!";
    }

}