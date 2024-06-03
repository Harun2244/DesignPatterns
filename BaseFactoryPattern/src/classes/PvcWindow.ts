import { Window } from "../interfaces/Window.js";

export class PvcWindow implements Window{

    constructor(){
        console.log("Pvc Window made!");
    }

open(): string {
    return "Pvc window is open";
}

close(): string {
    return "Pvc window is closed";
}

}