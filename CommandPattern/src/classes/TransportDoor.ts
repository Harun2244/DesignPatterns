import { Command } from "../abstractClasses/Command.js";

export class TransportDoor extends Command{
    public execute(): string {
        return this.door.transportDoor();
    }
    public unexecute(): string {
        return this.door.returnDoor();
    }
}