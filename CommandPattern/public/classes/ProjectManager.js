export class ProjectManager {
    execute(command) {
        return command.execute();
    }
    unexecute(command) {
        return command.unexecute();
    }
}
