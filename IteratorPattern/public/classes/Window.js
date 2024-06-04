import { Products } from "../Interfaces/Product.js";
export class Window extends Products {
    getQualityGrade() {
        return this.qualityGrade;
    }
    getName() {
        return this.name;
    }
}
