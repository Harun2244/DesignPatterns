export abstract class Production {

    public produceIt() : string[] {
      return [  this.getParts(),
        this.connectParts(),
        this.paintParts(),
        this.qualityAssurance(),
        this.delivery()];
    }

    protected abstract getParts() : string;
    protected abstract connectParts(): string;
    protected abstract paintParts() : string;
    protected abstract qualityAssurance() : string;
    protected abstract delivery() : string;

}