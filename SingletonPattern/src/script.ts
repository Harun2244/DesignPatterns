import { Singleton } from "./classes/Singleton.js";

const exporters = document.querySelector('#exporters') as HTMLButtonElement;
const suppliers = document.querySelector('#suppliers') as HTMLButtonElement;
const text = document.querySelector('#text') as HTMLHeadElement;


let mysing : Singleton = Singleton.getInstance();

exporters.addEventListener('click', () => {

text.textContent = '';    
text.textContent += `${mysing.getExporters()}`

});


suppliers.addEventListener('click', () => {

    text.textContent = '';    
    text.textContent += `${mysing.getSuppliers()}`
    
    });