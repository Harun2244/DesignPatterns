import { Command } from "../abstractClasses/Command.js";
export class ProjectManager {
    public execute(command : Command): string {
        return command.execute();
    }

    public unexecute(command:Command) : string {
      return  command.unexecute();
    }


}