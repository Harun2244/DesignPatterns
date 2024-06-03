import { Data } from "../interfaces/Data";

export class EuropeanWindow {

private data : Data;

constructor(data : Data) {
    this.data = data;
}

getInfo() : string {
     return this.data.getInfo();
}

}