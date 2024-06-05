import { Door } from "./classes/Door.js";
import { DoorAndWindowSet } from "./classes/DoorAndWindowSet.js";
import { WindowH } from "./classes/WindowH.js";
const form = document.querySelector("form");
const select = document.querySelector("select");
const windowCounterTxt = document.querySelector("#windowCounter");
const doorCounterTxt = document.querySelector("#doorCounter");
const totalPriceTxt = document.querySelector("#totalPrice");
const button = document.querySelector("button");
let product;
let set;
let products = [];
let windowCounter = 0;
let doorCounter = 0;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    select.value === "door" ? (product = new Door()) : (product = new WindowH());
    products.push(product);
    adjustQuantity(product);
});
button.addEventListener("click", () => {
    set = new DoorAndWindowSet(products);
    totalPriceTxt.textContent = set.getPrice().toString();
});
function adjustQuantity(product) {
    product.getPrice() === 4
        ? (doorCounterTxt.textContent = (++doorCounter).toString())
        : (windowCounterTxt.textContent = (++windowCounter).toString());
}
