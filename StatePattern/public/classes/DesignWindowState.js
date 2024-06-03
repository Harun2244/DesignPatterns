import { ProductionWindowState } from "./ProductionWindowState.js";
export class DesignWindowState {
    constructor(window) {
        this.window = window;
    }
    start() {
        this.window.changeState(new ProductionWindowState(this.window));
        return "Window has been sent to production!";
    }
    inspect() {
        return "Window not ready for inspection - Design State!";
    }
    deliver() {
        return "Window not ready for delivery - Design State!";
    }
}
