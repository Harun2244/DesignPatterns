export class Production {
    produceIt() {
        return [this.getParts(),
            this.connectParts(),
            this.paintParts(),
            this.qualityAssurance(),
            this.delivery()];
    }
}
