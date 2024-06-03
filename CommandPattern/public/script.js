import { AssembleDoor } from "./classes/AssembleDoor.js";
import { Door } from "./classes/Door.js";
import { InstallDoor } from "./classes/InstallDoor.js";
import { ProjectManager } from "./classes/ProjectManager.js";
import { TransportDoor } from "./classes/TransportDoor.js";
const formAction = document.querySelector('#action');
const actionSelect = document.querySelector('#actionSelect');
const actionText = document.querySelector('#actionText');
const oppositeFormAction = document.querySelector('#oppositeAction');
const oppositeActionSelect = document.querySelector('#oppositeActionSelect');
const oppositeActionText = document.querySelector('#oppositeActionText');
const door = new Door();
let command;
const actionManager = new ProjectManager();
const oppositeActionManager = new ProjectManager();
formAction.addEventListener('submit', e => {
    e.preventDefault();
    actionSelect.value === 'assembleDoor' ? command = new AssembleDoor(door) :
        actionSelect.value === 'installDoor' ? command = new InstallDoor(door) :
            command = new TransportDoor(door);
    clearTxt(actionText);
    actionText.textContent = actionManager.execute(command);
});
oppositeFormAction.addEventListener('submit', e => {
    var _a;
    e.preventDefault();
    if ((_a = actionText.textContent) === null || _a === void 0 ? void 0 : _a.length) {
        oppositeActionSelect.value === 'disAssembleDoor' ? command = new AssembleDoor(door) :
            oppositeActionSelect.value === 'removeDoor' ? command = new InstallDoor(door) :
                command = new TransportDoor(door);
        clearTxt(oppositeActionText);
        oppositeActionText.textContent = actionManager.unexecute(command);
    }
});
function clearTxt(textField) {
    textField.textContent = '';
}
