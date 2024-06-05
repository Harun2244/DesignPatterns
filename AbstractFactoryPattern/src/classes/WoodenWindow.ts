import { WindowH } from "../interfaces/WindowH.js";

export class WoodenWindow implements WindowH {
  show(): string {
    return "This is a Wooden Window";
  }
}
