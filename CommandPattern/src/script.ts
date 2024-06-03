import { Command } from "./abstractClasses/Command.js";
import { AssembleDoor } from "./classes/AssembleDoor.js";
import { Door } from "./classes/Door.js";
import { InstallDoor } from "./classes/InstallDoor.js";
import { ProjectManager } from "./classes/ProjectManager.js";
import { TransportDoor } from "./classes/TransportDoor.js";


const formAction = document.querySelector('#action') as HTMLFormElement;
const actionSelect = document.querySelector('#actionSelect') as HTMLSelectElement;
const actionText = document.querySelector('#actionText') as HTMLHeadElement;

const oppositeFormAction = document.querySelector('#oppositeAction') as HTMLFormElement;
const oppositeActionSelect = document.querySelector('#oppositeActionSelect') as HTMLSelectElement;
const oppositeActionText = document.querySelector('#oppositeActionText') as HTMLHeadElement;

const door:Door = new Door();
let command : Command;
const actionManager = new ProjectManager();
const oppositeActionManager = new ProjectManager();

formAction.addEventListener('submit', e =>{

    e.preventDefault();

    actionSelect.value === 'assembleDoor' ? command = new AssembleDoor(door) : 
    actionSelect.value === 'installDoor' ? command = new InstallDoor(door) : 
    command = new TransportDoor(door);
     clearTxt(actionText);
    actionText.textContent = actionManager.execute(command);
    


});


oppositeFormAction.addEventListener('submit', e => {

    e.preventDefault();
    if(actionText.textContent?.length){

        oppositeActionSelect.value === 'disAssembleDoor' ? command = new AssembleDoor(door) : 
        oppositeActionSelect.value === 'removeDoor' ? command = new InstallDoor(door) : 
        command = new TransportDoor(door);
         clearTxt(oppositeActionText);
        oppositeActionText.textContent = actionManager.unexecute(command);
    }

});


function clearTxt(textField : HTMLHeadElement){
    textField.textContent = '';
}