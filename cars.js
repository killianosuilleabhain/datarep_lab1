class Vehicle{

    constructor(make, model, year){
        this.make = make;
        this.model - model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class Cars extends Vehicle {
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

let myCar = new Cars('VW', 'Golf', 2011, 5);
myCar.Information();