import { Command } from "../abstractClasses/Command.js";
import { Door } from "./Door.js";

export class InstallDoor extends Command {

public execute(): string {
     return this.door.installDoor();
}

public unexecute(): string {
    return this.door.removeDoor();
}


}