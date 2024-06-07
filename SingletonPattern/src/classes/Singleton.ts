export class Singleton {

private static instance : Singleton;

private constructor(){

    
    console.log("uso u konstruktor");
    

}

private  supplierCountries : string[] = ["Estonia", "Latvia", "Norway"];
private  exportCountries : string[] = ["Germany", "Belgium", "Netherlands"];


static getInstance() : Singleton {

if(Singleton.instance === undefined){

    Singleton.instance = new Singleton;

}

return Singleton.instance;

}


 getSuppliers() : string {
    return "Suppliers: " + this.supplierCountries.join(", ");
 }

 getExporters() : string {
    return "Exporters: " + this.exportCountries.join(", ");
 }





}