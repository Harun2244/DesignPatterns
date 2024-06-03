import { AmericanWindow } from "./classes/AmericanWindow.js";
import { DimensonsAdapter } from "./classes/DimensionsAdapter.js";
import { EuropeanWindow } from "./classes/EuropeanWindow.js";
import { Data } from "./interfaces/Data.js";

const americanWidth = document.querySelector('#wWidth') as HTMLInputElement;
const americanLength = document.querySelector('#wLength') as HTMLInputElement;
const createButton = document.querySelector('#createButton') as HTMLButtonElement;
const aWidth = document.querySelector('#aWidth') as HTMLHeadElement;
const aLength = document.querySelector('#aLength') as HTMLHeadElement;
const convertButton = document.querySelector('#convert') as HTMLButtonElement;
const info = document.querySelector('#info') as HTMLHeadElement;



let americanWindow : AmericanWindow;
let dataAdapter : Data;
let euWindow : EuropeanWindow;

createButton.addEventListener('click', (e:Event) => {
    e.preventDefault();



 americanWindow = new AmericanWindow(americanWidth.valueAsNumber, americanLength.valueAsNumber);

aWidth.textContent += ` ${americanWindow.getWidth()} in`;
aLength.textContent += ` ${americanWindow.getLength()} in`;


});



convertButton.addEventListener('click', (e:Event) => {

dataAdapter = new DimensonsAdapter(americanWindow);
euWindow = new EuropeanWindow(dataAdapter);

info.textContent += ` ${euWindow.getInfo()}`;


});


