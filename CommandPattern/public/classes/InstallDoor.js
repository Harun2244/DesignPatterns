import { Command } from "../abstractClasses/Command.js";
export class InstallDoor extends Command {
    execute() {
        return this.door.installDoor();
    }
    unexecute() {
        return this.door.removeDoor();
    }
}
