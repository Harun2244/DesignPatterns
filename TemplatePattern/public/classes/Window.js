import { Production } from "./Production.js";
export class Window extends Production {
    getParts() {
        return "Parts for the window have been acquired";
    }
    connectParts() {
        return "Window parts have been connected";
    }
    paintParts() {
        return "Window parts have been painted";
    }
    qualityAssurance() {
        return "Window passed quality incpection";
    }
    delivery() {
        return "Window has been sent to delivery";
    }
}
