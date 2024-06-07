import { Singleton } from "./classes/Singleton.js";
const exporters = document.querySelector('#exporters');
const suppliers = document.querySelector('#suppliers');
const text = document.querySelector('#text');
let mysing = Singleton.getInstance();
exporters.addEventListener('click', () => {
    text.textContent = '';
    text.textContent += `${mysing.getExporters()}`;
});
suppliers.addEventListener('click', () => {
    text.textContent = '';
    text.textContent += `${mysing.getSuppliers()}`;
});
