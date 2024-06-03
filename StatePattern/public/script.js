import { Window } from "./classes/Window.js";
const production = document.querySelector('#production');
const inspection = document.querySelector('#inspection');
const delivery = document.querySelector('#delivery');
const text = document.querySelector("#text");
const window = new Window();
production.addEventListener('click', () => { text.textContent = `${window.start()}`; });
inspection.addEventListener('click', () => { clearText(); text.textContent = `${window.inspect()}`; });
delivery.addEventListener('click', () => { clearText(); text.textContent = `${window.deliver()}`; });
const clearText = () => {
    text.textContent = '';
};
