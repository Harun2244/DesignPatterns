import { Products } from "../Interfaces/Product.js";

export class Window extends Products {
  getQualityGrade(): number {
    return this.qualityGrade;
  }

  getName(): string {
    return this.name;
  }
}
