import { Window } from "../interfaces/Window.js";
import { WindowFactory } from "../interfaces/WindowFactory.js";
import { PvcWindow } from "./PvcWindow.js";

export class PvcWindowMaker implements WindowFactory {
makeWindow(): Window {
    return new PvcWindow();
}
}