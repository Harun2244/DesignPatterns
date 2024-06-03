import { Window } from "./classes/Window.js";

const production = document.querySelector('#production') as HTMLButtonElement;
const inspection = document.querySelector('#inspection') as HTMLButtonElement;
const delivery = document.querySelector('#delivery') as HTMLButtonElement;
const text = document.querySelector("#text") as HTMLHeadElement;
const window = new Window();

production.addEventListener('click', () => { text.textContent = `${window.start()}`;});
inspection.addEventListener('click', () => {clearText(); text.textContent = `${window.inspect()}`});
delivery.addEventListener('click', () => {clearText(); text.textContent = `${window.deliver()}`});

const clearText = () => {

    text.textContent = '';
}