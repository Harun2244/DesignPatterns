import { Products } from "../Interfaces/Product.js";
export class Door extends Products {
    getQualityGrade() {
        return this.qualityGrade;
    }
    getName() {
        return this.name;
    }
}
