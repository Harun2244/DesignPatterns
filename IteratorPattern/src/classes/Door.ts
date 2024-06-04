import { Products } from "../Interfaces/Product.js";

export class Door extends Products {
  getQualityGrade(): number {
    return this.qualityGrade;
  }

  getName(): string {
    return this.name;
  }
}
