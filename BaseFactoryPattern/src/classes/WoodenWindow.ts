import { Window } from "../interfaces/Window.js";

export class WoodenWindow implements Window {

    constructor(){
        console.log("Wooden window made");
    }

    open(): string {
    return "Wooden window is open";
}

close(): string {
    return "Wooden window is closed";
}
}