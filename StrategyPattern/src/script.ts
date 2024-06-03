import { AngularSaw } from "./classes/AngularSaw.js";
import { CircularSaw } from "./classes/CircularSaw.js";
import { DiamondCircularCutter } from "./classes/DiamondCircularCutter.js";
import { LaserCutter } from "./classes/LaserCutter.js";
import { GlassCutting } from "./interfaces/GlassCutting.js";
import { WoodCutting } from "./interfaces/WoodCutting.js";
import { Window } from "./classes/Window.js";
import { renderer } from "./classes/renderer.js";

const woodSelect = document.querySelector('#woodCutting') as HTMLSelectElement;
const glassSelect = document.querySelector('#glassCutting') as HTMLSelectElement;
const button  = document.querySelector('button')!;
const mydiv = document.querySelector('.show') as HTMLDivElement;
const form = document.querySelector('form')!;

form.addEventListener('submit', (e:Event)=>{

e.preventDefault();

let typeOfWoodCut : WoodCutting;
let typeOfGlassCut : GlassCutting;

woodSelect.value === 'angularSaw' ? typeOfWoodCut = new AngularSaw(): typeOfWoodCut = new CircularSaw();
glassSelect.value == 'laserCutter' ? typeOfGlassCut = new LaserCutter() : typeOfGlassCut = new DiamondCircularCutter();

let window = new Window(typeOfGlassCut, typeOfWoodCut);

let render  = new renderer();
render.renderWindow(window, mydiv);


});
