import { Products } from "./Interfaces/Product.js";
import { StorageIterator } from "./Interfaces/StorageIterator.js";
import { Door } from "./classes/Door.js";
import { Window } from "./classes/Window.js";
import { WindowStorage } from "./classes/WindowStorage.js";
import { Storage } from "./Interfaces/Storage.js";
import { DoorStorage } from "./classes/DoorStorage.js";

const windowForm = document.querySelector("#windowform") as HTMLFormElement;
const windowName = document.querySelector("#windowname") as HTMLInputElement;
const windowNum = document.querySelector("#windownum") as HTMLInputElement;
const windowList = document.querySelector("#wList") as HTMLUListElement;
const currentWindow = document.querySelector(
  "#currentWindow"
) as HTMLButtonElement;
const nextWindow = document.querySelector("#nextWindow") as HTMLButtonElement;
const currWin = document.querySelector("#currWin") as HTMLSpanElement;
const windowShow = document.querySelector(".windowShow") as HTMLDivElement;

const doorForm = document.querySelector("#doorform") as HTMLFormElement;
const doorName = document.querySelector("#doorname") as HTMLInputElement;
const doorNum = document.querySelector("#doornum") as HTMLInputElement;
const doorList = document.querySelector("#dList") as HTMLUListElement;
const currentDoor = document.querySelector("#currentDoor") as HTMLButtonElement;
const nextDoor = document.querySelector("#nextDoor") as HTMLButtonElement;
const currDoor = document.querySelector("#currDoor") as HTMLSpanElement;
const doorShow = document.querySelector(".doorShow") as HTMLDivElement;

const windows: Window[] = [];
const doors: Door[] = [];
let windowProduct: Products;
let windowIterator: StorageIterator;
let doorProduct: Products;
let doorIterator: StorageIterator;
let windowCounter = 0;

//Submit na window
windowForm.addEventListener("submit", (e) => {
  e.preventDefault();
  windowShow.classList.add("removeW");

  windowProduct = new Window(windowNum.valueAsNumber, windowName.value);
  windows.push(windowProduct);
  if (windowCounter === 0) {
    windowIterator = getIterator(new WindowStorage(windows));
  }
  if (displayElement(windowProduct, windowList)) {
    windowShow.classList.remove("removeW");
  }
  ++windowCounter;
});

//Show window dugme
currentWindow.addEventListener("click", (e) => {
  if (hasChildren(windowList)) {
    currWin.textContent = "";
    currWin.textContent = `${windowIterator
      .current()
      .getName()}, ${windowIterator.current().getQualityGrade()}`;
  } else {
    alert("Empty!");
  }
});

//Next window dugme
nextWindow.addEventListener("click", (e) => {
  windowIterator.next();
});

//Submit vrata
let doorCounter = 0;

doorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  doorProduct = new Door(doorNum.valueAsNumber, doorName.value);
  doors.push(doorProduct);

  if (doorCounter === 0) {
    doorIterator = getIterator(new DoorStorage(doors));
  }

  if (displayElement(doorProduct, doorList)) {
    doorShow.classList.remove("removeD");
  }
  ++doorCounter;
});

//Show vrata
currentDoor.addEventListener("click", (e) => {
  if (hasChildren(doorList)) {
    currDoor.textContent = "";
    currDoor.textContent = `${doorIterator.current().getName()}, ${doorIterator
      .current()
      .getQualityGrade()}`;
  } else {
    alert("Empty!");
  }
});

//next vrata
nextDoor.addEventListener("click", (e) => {
  doorIterator.next();
});

//Funkcije
const displayElement = (product: Products, list: HTMLUListElement): boolean => {
  if (product.getName() === "" || product.getQualityGrade === undefined) {
    alert("Nothing to submit");
    return false;
  } else {
    const li = document.createElement("li");
    li.textContent = ` |${product.getName()}, ${product.getQualityGrade()}| `;
    list.append(li);
    return true;
  }
};

function getIterator(storage: Storage) {
  const iterator: StorageIterator = storage.getStorageIterator();
  return iterator;
}

function hasChildren(list: HTMLUListElement): boolean {
  return list.hasChildNodes();
}
