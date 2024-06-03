import { DesignWindowState } from "./DesignWindowState.js";
export class Window {
    constructor() {
        this.state = new DesignWindowState(this);
    }
    start() {
        return this.state.start();
    }
    inspect() {
        return this.state.inspect();
    }
    deliver() {
        return this.state.deliver();
    }
    changeState(newState) {
        this.state = newState;
    }
}
