export class AmericanWindow{

    widthInInches : number;
    lengthInInches : number;

    constructor(width : number, length: number){


        this.widthInInches = width;
        this.lengthInInches = length;

    }

    getWidth():number{
        return this.widthInInches;
    }

    getLength():number{
        return this.lengthInInches;
    }



}