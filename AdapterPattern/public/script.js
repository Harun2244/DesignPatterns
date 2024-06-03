import { AmericanWindow } from "./classes/AmericanWindow.js";
import { DimensonsAdapter } from "./classes/DimensionsAdapter.js";
import { EuropeanWindow } from "./classes/EuropeanWindow.js";
const americanWidth = document.querySelector('#wWidth');
const americanLength = document.querySelector('#wLength');
const createButton = document.querySelector('#createButton');
const aWidth = document.querySelector('#aWidth');
const aLength = document.querySelector('#aLength');
const convertButton = document.querySelector('#convert');
const info = document.querySelector('#info');
let americanWindow;
let dataAdapter;
let euWindow;
createButton.addEventListener('click', (e) => {
    e.preventDefault();
    americanWindow = new AmericanWindow(americanWidth.valueAsNumber, americanLength.valueAsNumber);
    aWidth.textContent += ` ${americanWindow.getWidth()} in`;
    aLength.textContent += ` ${americanWindow.getLength()} in`;
});
convertButton.addEventListener('click', (e) => {
    dataAdapter = new DimensonsAdapter(americanWindow);
    euWindow = new EuropeanWindow(dataAdapter);
    info.textContent += ` ${euWindow.getInfo()}`;
});
