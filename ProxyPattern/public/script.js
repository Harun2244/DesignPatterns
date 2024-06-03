import { ProxyComplicatedBigWindow } from "./classes/ProxyComplicatedWindow.js";
const form = document.querySelector('form');
const surface = document.querySelector('h3');
const length = document.querySelector('#length');
const width = document.querySelector('#width');
form.addEventListener('submit', e => {
    e.preventDefault();
    let proxy = new ProxyComplicatedBigWindow(length.valueAsNumber, width.valueAsNumber);
    surface.textContent = '';
    surface.textContent = "Surface area of the window is: " + proxy.getSurfaceArea().toString() + "cm^2";
});
