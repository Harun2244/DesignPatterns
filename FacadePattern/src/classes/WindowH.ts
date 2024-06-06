import { WindowData } from "./WindowData.js";

export class WindowH {
  data: WindowData | undefined;

  makeWindow(width: number, length: number, type: string): void {
    this.data = new WindowData(width, length, type);
  }

  displayDoorCharacteristics(): string {
    return `Width of the window is ${this.data?.getWidth()}
    , length of the window is ${this.data?.getLength()}
    , type of the window is ${this.data?.getTypeOfMaterial()}`;
  }
}
