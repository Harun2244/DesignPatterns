import { Door } from "../interfaces/Door.js";

export class PvcDoor implements Door {
  show(): string {
    return "This is a Pvc Door";
  }
}
