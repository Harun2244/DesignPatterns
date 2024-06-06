export class DoorData {
  private length: number;
  private width: number;
  private typeOfMaterial: string;

  constructor(length: number, width: number, typeOfMaterial: string) {
    this.length = length;
    this.width = width;
    this.typeOfMaterial = typeOfMaterial;
  }

  getLength(): number {
    return this.length;
  }

  getWidth(): number {
    return this.width;
  }

  getTypeOfMaterial(): string {
    return this.typeOfMaterial;
  }
}
