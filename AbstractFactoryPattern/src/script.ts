import { PvcDoorsAndWindowsMaker } from "./classes/PvcDoorsAndWindowsMaker.js";
import { WoodenDoor } from "./classes/WoodenDoor.js";
import { WoodenDoorsAndWindowsMaker } from "./classes/WoodenDoorsAndWindowsMaker.js";
import { Door } from "./interfaces/Door.js";
import { DoorAndWindow } from "./interfaces/DoorAndWindow.js";
import { WindowH } from "./interfaces/WindowH.js";

const select = document.querySelector("select")!;
const form = document.querySelector("form")!;
const doortxt = document.querySelector("#door") as HTMLHeadElement;
const windowtxt = document.querySelector("#window") as HTMLHeadElement;

let door: Door;
let window: WindowH;
let factory: DoorAndWindow;

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
