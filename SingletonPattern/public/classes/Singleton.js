export class Singleton {
    constructor() {
        this.supplierCountries = ["Estonia", "Latvia", "Norway"];
        this.exportCountries = ["Germany", "Belgium", "Netherlands"];
        console.log("uso u konstruktor");
    }
    static getInstance() {
        if (Singleton.instance === undefined) {
            Singleton.instance = new Singleton;
        }
        return Singleton.instance;
    }
    getSuppliers() {
        return "Suppliers: " + this.supplierCountries.join(", ");
    }
    getExporters() {
        return "Exporters: " + this.exportCountries.join(", ");
    }
}
