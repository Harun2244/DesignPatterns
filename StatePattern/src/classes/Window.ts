import { WindowStates } from "../interfaces/WindowStates.js";
import { DesignWindowState } from "./DesignWindowState.js";

export class Window {

    private state : WindowStates;

    constructor(){
        this.state = new DesignWindowState(this);
    }

    start() : string {
         return this.state.start();
    }

    inspect() : string{
        return this.state.inspect();
    }
     
    deliver(): string{
        return this.state.deliver();
    }

    changeState(newState : WindowStates){
        this.state = newState;
    }

} 