import { Observable } from "./interfaces/Observable.js";
import { Observer } from "./interfaces/Observer.js";
import { Orders } from "./classes/Orders.js";
import { QualityControl } from "./classes/QualityControl.js";
import { SalesDepartment } from "./classes/SalesDepartment.js";

const button = document.querySelector('button')!;
const qualityControlText = document.querySelector('#qualityControlText') as HTMLParagraphElement;
const salesDepartmentText = document.querySelector('#salesDepartmentText') as HTMLParagraphElement;
const orderStatus = document.querySelector('select')!;

let order = new Orders;
let qualityControl : Observer = new QualityControl(order);
let salesDepartment : Observer = new SalesDepartment(order);

order.add(qualityControl);
order.add(salesDepartment);

button.addEventListener('click' , (e:Event)=>{

e.preventDefault();

order.changeOrderStatus(orderStatus);

clear();
qualityControlText.textContent += `${qualityControl.update()}`;
salesDepartmentText.textContent += `${salesDepartment.update()}`;




});


const clear = () => {

    qualityControlText.textContent = '';
    salesDepartmentText.textContent = '';

}