import { ExtraPaintWindowDecorator } from "./classes/ExtraPaintWindowDecorator.js";
import { GlassThicknessWindowDecorator } from "./classes/GlassThicknessWindowDecorator.js";
import { Window } from "./classes/Window.js";
import { Product } from "./interfaces/Product.js";

const extraPaint = document.querySelector("#extraPaint") as HTMLButtonElement;
const extraThickness = document.querySelector(
  "#extraThickness"
) as HTMLButtonElement;
const thicknessCounter = document.querySelector(
  "#thicknessCounter"
) as HTMLSpanElement;
const paintCounter = document.querySelector("#paintCounter") as HTMLSpanElement;
const totalCost = document.querySelector("#totalCost") as HTMLButtonElement;
const totalCostTxt = document.querySelector("#totalCostTxt") as HTMLSpanElement;

let product: Product = new Window();
let extraPaintNum = 0;
let extraThicknessNum = 0;

extraPaint.addEventListener("click", () => {
  paintCounter.textContent = (++extraPaintNum).toString();
  addExtraPaint();
});

extraThickness.addEventListener("click", () => {
  thicknessCounter.textContent = (++extraThicknessNum).toString();
  addExtraThickness();
});

totalCost.addEventListener("click", () => {
  totalCostTxt.textContent = "$" + product.getCost().toString();
});

function addExtraPaint() {
  product = new ExtraPaintWindowDecorator(product);
}

function addExtraThickness() {
  product = new GlassThicknessWindowDecorator(product);
}
