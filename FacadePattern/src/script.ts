import { Facade } from "./classes/Facade.js";

const characteristics = document.querySelector(
  "#characteristics"
) as HTMLFormElement;
const select = document.querySelector("select") as HTMLSelectElement;
const width = document.querySelector("#width") as HTMLInputElement;
const length = document.querySelector("#length") as HTMLInputElement;
const type = document.querySelector("#type") as HTMLInputElement;
const text = document.querySelector("h3") as HTMLHeadElement;

const areEmpty = (
  width: HTMLInputElement,
  length: HTMLInputElement,
  type: HTMLInputElement
) => {
  return width.value === "" && length.value === "" && type.value === "";
};

let fac = new Facade();

characteristics.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!areEmpty(width, length, type)) {
    text.textContent =
      select.value === "door"
        ? fac.createDoor(width.valueAsNumber, length.valueAsNumber, type.value)
        : fac.createWindow(
            width.valueAsNumber,
            length.valueAsNumber,
            type.value
          );
  } else {
    alert("Nothing submitted!");
  }
});
