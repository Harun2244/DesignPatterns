import { PvcDoorsAndWindowsMaker } from "./classes/PvcDoorsAndWindowsMaker.js";
import { WoodenDoorsAndWindowsMaker } from "./classes/WoodenDoorsAndWindowsMaker.js";
const select = document.querySelector("select");
const form = document.querySelector("form");
const doortxt = document.querySelector("#door");
const windowtxt = document.querySelector("#window");
let door;
let window;
let factory;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    select.value === "wood"
        ? (factory = new WoodenDoorsAndWindowsMaker())
        : (factory = new PvcDoorsAndWindowsMaker());
    door = factory.makeDoor();
    window = factory.makeWindow();
    doortxt.textContent = "";
    windowtxt.textContent = "";
    doortxt.textContent = `${door.show()}`;
    windowtxt.textContent = `${window.show()}`;
});
