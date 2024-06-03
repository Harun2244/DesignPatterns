import { Door } from "./classes(abstract)/Door.js";
import { Materials } from "./interfaces/Materials.js";
import { Window } from "./classes(abstract)/Window.js";
import { SlidingDoor } from "./classes/SlidingDoor.js";
import { NoiseReductionWindow } from "./classes/NoiseReductionWindow.js";
import { Aluminium } from "./classes/Aluminium.js";
import { Wood } from "./classes/Wood.js";



const form = document.querySelector('form')!;
const productSelect = document.querySelector('#product') as HTMLSelectElement;
const materialSelect = document.querySelector('#material') as HTMLSelectElement;
const txt = document.querySelector('h4')!;

let material : Materials;
let product : Door | Window ;

form.addEventListener('submit', e => {

e.preventDefault();

materialSelect.value === 'aluminium' ? material = new Aluminium() : material = new Wood();
productSelect.value === 'door' ? product = new SlidingDoor(material) : product = new NoiseReductionWindow(material);

txt.textContent = '';
txt.textContent = `${product.display()}`
});