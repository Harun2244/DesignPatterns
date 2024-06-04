export abstract class Products {
  protected qualityGrade: number;
  protected name: string;

  constructor(qualityGrade: number, name: string) {
    this.qualityGrade = qualityGrade;
    this.name = name;
  }

  abstract getQualityGrade(): number;
  abstract getName(): string;
}
