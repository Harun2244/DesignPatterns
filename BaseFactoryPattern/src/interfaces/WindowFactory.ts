import { Window } from "./Window.js";

export interface WindowFactory {
    makeWindow():Window;
}