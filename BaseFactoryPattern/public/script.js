import { PvcWindowMaker } from "./classes/PvcWindowMaker.js";
import { WoodenWindowMaker } from "./classes/WoodenWindowMaker.js";
const form = document.querySelector('form');
const select = document.querySelector('select');
const text = document.querySelector('h3');
const text1 = document.querySelector('h4');
let factory;
let window;
form.addEventListener('submit', e => {
    e.preventDefault();
    select.value === 'woodenWindow' ? factory = new WoodenWindowMaker() : factory = new PvcWindowMaker;
    window = factory.makeWindow();
    text.textContent = '';
    text.textContent = `${window.open()}`;
    text1.textContent = `${window.close()}`;
});
