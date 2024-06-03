import { Door } from "./classes/Door.js";
import { Window } from "./classes/Window.js";
import { Production } from "./classes/Production.js";


const form = document.querySelector('form')!;
const selectProduction = document.querySelector('select')!;
const displays = document.querySelectorAll('h4')!;

let product : Production;

form.addEventListener('submit' , e =>{

    e.preventDefault();

    selectProduction.value === 'Door' ? product = new Door() : product = new Window();

    displayTxt(product);


});


const clearTxt = () => {
    displays.forEach(display => {
        display.textContent = '';
    });
};

const displayTxt = (product : Production) => {
    clearTxt();
    const txts = product.produceIt();
    displays.forEach((display,index) => {
        display.textContent = txts[index];
    });
}