import { Door } from "../classes/Door.js";
export abstract class  Command {
    
    protected door : Door;
    constructor (door:Door){
        this.door = door;
    }

    public abstract execute():string;
    public abstract unexecute(): string;
}