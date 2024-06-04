import { Door } from "./classes/Door.js";
import { Window } from "./classes/Window.js";
import { WindowStorage } from "./classes/WindowStorage.js";
import { DoorStorage } from "./classes/DoorStorage.js";
const windowForm = document.querySelector("#windowform");
const windowName = document.querySelector("#windowname");
const windowNum = document.querySelector("#windownum");
const windowList = document.querySelector("#wList");
const currentWindow = document.querySelector("#currentWindow");
const nextWindow = document.querySelector("#nextWindow");
const currWin = document.querySelector("#currWin");
const windowShow = document.querySelector(".windowShow");
const doorForm = document.querySelector("#doorform");
const doorName = document.querySelector("#doorname");
const doorNum = document.querySelector("#doornum");
const doorList = document.querySelector("#dList");
const currentDoor = document.querySelector("#currentDoor");
const nextDoor = document.querySelector("#nextDoor");
const currDoor = document.querySelector("#currDoor");
const doorShow = document.querySelector(".doorShow");
const windows = [];
const doors = [];
let windowProduct;
let windowIterator;
let doorProduct;
let doorIterator;
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
const displayElement = (product, list) => {
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
function getIterator(storage) {
  const iterator = storage.getStorageIterator();
  return iterator;
}
function hasChildren(list) {
  return list.hasChildNodes();
}
