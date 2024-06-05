import { ExtraPaintWindowDecorator } from "./classes/ExtraPaintWindowDecorator.js";
import { GlassThicknessWindowDecorator } from "./classes/GlassThicknessWindowDecorator.js";
import { Window } from "./classes/Window.js";
const extraPaint = document.querySelector("#extraPaint");
const extraThickness = document.querySelector("#extraThickness");
const thicknessCounter = document.querySelector("#thicknessCounter");
const paintCounter = document.querySelector("#paintCounter");
const totalCost = document.querySelector("#totalCost");
const totalCostTxt = document.querySelector("#totalCostTxt");
let product = new Window();
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
