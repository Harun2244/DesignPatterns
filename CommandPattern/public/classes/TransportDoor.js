import { Command } from "../abstractClasses/Command.js";
export class TransportDoor extends Command {
    execute() {
        return this.door.transportDoor();
    }
    unexecute() {
        return this.door.returnDoor();
    }
}
