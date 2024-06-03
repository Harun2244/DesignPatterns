import { Command } from "../abstractClasses/Command.js";
export class AssembleDoor extends Command {
    execute() {
        return this.door.assembleDoor();
    }
    unexecute() {
        return this.door.disassembleDoor();
    }
}
