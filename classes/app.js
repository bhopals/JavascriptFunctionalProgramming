/***
* Way to Define Class 
**/

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
const civic = new Car(4, 'V6', 'blue');

console.log(civic, cx5);

console.log(cx5);
console.log(cx5.carStats());

console.log(civic);
console.log(civic.carStats());
