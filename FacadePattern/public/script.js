import { Facade } from "./classes/Facade.js";
const characteristics = document.querySelector("#characteristics");
const select = document.querySelector("select");
const width = document.querySelector("#width");
const length = document.querySelector("#length");
const type = document.querySelector("#type");
const text = document.querySelector("h3");
const areEmpty = (width, length, type) => {
    return width.value === "" && length.value === "" && type.value === "";
};
let fac = new Facade();
characteristics.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!areEmpty(width, length, type)) {
        text.textContent =
            select.value === "door"
                ? fac.createDoor(width.valueAsNumber, length.valueAsNumber, type.value)
                : fac.createWindow(width.valueAsNumber, length.valueAsNumber, type.value);
    }
    else {
        alert("Nothing submitted!");
    }
});
