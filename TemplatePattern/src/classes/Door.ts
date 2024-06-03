import { Production } from "./Production.js";

export class Door extends Production{


    protected getParts(): string {
        return "Parts for the door have been acquired";
    }

    protected connectParts(): string {
        return "Door parts have been connected";
    }

    protected paintParts(): string {
        return "Door parts have been painted";
    }

    protected qualityAssurance(): string {
        return "Door passed quality incpection";
    }

    protected delivery(): string {
        return "Door has been sent to delivery";
    }



}