import { WindowH } from "../interfaces/WindowH.js";

export class PvcWindow implements WindowH {
  show(): string {
    return "This is a Pvc Window";
  }
}
