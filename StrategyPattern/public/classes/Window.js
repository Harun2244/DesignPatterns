export class Window {
    constructor(glasscut, woodCut) {
        this.glassCut = glasscut;
        this.woodCut = woodCut;
    }
    displayWoodCut() {
        return this.woodCut.displayCut();
    }
    displayGlassCut() {
        return this.glassCut.displayCut();
    }
}
