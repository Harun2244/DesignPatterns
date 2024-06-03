export class DimensonsAdapter {
    constructor(americanWindow) {
        this.americanWindow = americanWindow;
    }
    getInfo() {
        const lengthInCm = this.americanWindow.getLength() * 2.54;
        const widthInCm = this.americanWindow.getWidth() * 2.54;
        return `Length of the window is ${lengthInCm} cm , width of the window is ${widthInCm} cm`;
    }
}
