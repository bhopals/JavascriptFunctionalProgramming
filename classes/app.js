let mixin = {
    madeIn() {
        console.log("This class was made in year 2019");
    }
}

let carMixin = {
    __proto__ : mixin,
    madeIn() {
        super.madeIn();
    }
}

class Car {
    constructor(doors, engine, color) {
        this.doors= doors;
        this.engine=engine;
        this.color=color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} and a beautiful ${this.color} color!`;
    }

    static totalDoors(car1, car2) {
        const carsdoors1 = car1.doors;
        const carsdoors2 = car2.doors;
        return carsdoors1 + carsdoors2;
    }
}

const cx5 = new Car(4, 'V6', 'blue');
const civic = new Car(4, 'V6', 'red');


class SUV extends Car {
    constructor(doors, engine, color, brand) {
        super(doors, engine, color);
        this.brand = brand;
        this.wheels = 4;
        this.ac = true;

        //assign mixin
        Object.assign(this, carMixin);
    }

    myBrands() {
        return console.log(`This SUV is a ${this.brand}`)
    }
}

const cx6 = new SUV(7, 'V99', 'black','Mazda' );


console.log(cx6);
console.log(cx6.carStats());
console.log(cx6.myBrands());
console.log(cx6.madeIn());


