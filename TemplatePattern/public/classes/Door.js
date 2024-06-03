import { Production } from "./Production.js";
export class Door extends Production {
    getParts() {
        return "Parts for the door have been acquired";
    }
    connectParts() {
        return "Door parts have been connected";
    }
    paintParts() {
        return "Door parts have been painted";
    }
    qualityAssurance() {
        return "Door passed quality incpection";
    }
    delivery() {
        return "Door has been sent to delivery";
    }
}
