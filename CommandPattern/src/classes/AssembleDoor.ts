import { Command } from "../abstractClasses/Command.js";

export class AssembleDoor extends Command {
public execute(): string {
    return this.door.assembleDoor();
}

public unexecute(): string {
    return this.door.disassembleDoor();
}
}