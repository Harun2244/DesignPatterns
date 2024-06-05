import { Door } from "./classes/Door.js";
import { DoorAndWindowSet } from "./classes/DoorAndWindowSet.js";
import { WindowH } from "./classes/WindowH.js";
import { Product } from "./interfaces/Product.js";

const form = document.querySelector("form")!;
const select = document.querySelector("select")!;
const windowCounterTxt = document.querySelector(
  "#windowCounter"
) as HTMLSpanElement;
const doorCounterTxt = document.querySelector(
  "#doorCounter"
) as HTMLSpanElement;
const totalPriceTxt = document.querySelector("#totalPrice") as HTMLSpanElement;
const button = document.querySelector("button")!;

let product: Product;
let set: Product;
let products: Product[] = [];
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

function adjustQuantity(product: Product) {
  product.getPrice() === 4
    ? (doorCounterTxt.textContent = (++doorCounter).toString())
    : (windowCounterTxt.textContent = (++windowCounter).toString());
}
