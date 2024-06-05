import { Door } from "../interfaces/Door.js";

export class WoodenDoor implements Door {
  show(): string {
    return "This is a Wooden Door";
  }
}
