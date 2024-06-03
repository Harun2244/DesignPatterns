export class ExportationWindowState {
    constructor(window) {
        this.window = window;
    }
    start() {
        return "Window sent to export! - Exportation State";
    }
    inspect() {
        return "Window sent to export! - Exportation State";
    }
    deliver() {
        return "Window already in export - Exportation State";
    }
}
