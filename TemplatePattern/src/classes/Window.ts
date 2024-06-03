import { Production } from "./Production.js";

export class Window extends Production{

    protected getParts(): string {
        return "Parts for the window have been acquired";
    }

    protected connectParts(): string {
        return "Window parts have been connected";
    }

    protected paintParts(): string {
        return "Window parts have been painted";
    }

    protected qualityAssurance(): string {
        return "Window passed quality incpection";
    }

    protected delivery(): string {
        return "Window has been sent to delivery";
    }

}