import { DoorData } from "./DoorData.js";

export class Door {
  data: DoorData | undefined;

  makeDoor(width: number, length: number, type: string): void {
    this.data = new DoorData(width, length, type);
  }

  displayDoorCharacteristics(): string {
    return `Width of the door is ${this.data?.getWidth()}
    , length of the door is ${this.data?.getLength()}
    , type of the door is ${this.data?.getTypeOfMaterial()}`;
  }
}
