var Animal = require('./animal');


class Mammal extends Animal {
    constructor(name, weight, food, energy) {
        super(name, weight, food, energy);
        this.bodyTemp = 35;
    }
}


class Elephant extends Mammal {
    constructor(name, weight, bodyTemp) {
        super(name, weight, bodyTemp);
        this.trunkLength = trunkLength;
    }
    greet() {
        console.log("Trumpets!");
    }
}



class Fish extends Animal {
    get weight() {
        console.log(this.name + " weight accessed")
        return this._weight;
    }

    set weight(newWeight) {
        if (newWeight > 0 && newWeight <= 100) {
            this._weight = newWeight;
        } else {
            console.log("Error: provded weight must be greater than 0 but no more than 100 kg");
        }
    }

    constructor(name, weight, foodAmount, bodyTemp) {
        super(name, weight, foodAmount, bodyTemp);
        this.foodAmount = foodAmount
    }

    eat() {
        this.foodAmount -= this.foodAmount;
        console.log(this.name + " ate " + this.foodAmount + " foods.");
    }
}

let dog = new Animal("Ben", 20, )


let lion = new Mammal("Napoleon", 200);

lion.name = "Z";
lion.greet();
console.log(lion.bodyTemp + " degrees C.")

let lioness = new Mammal("Beatrix", 150);


let paul = new Fish('Paul', 90);
paul.greet();


let paulette = new Fish('Paulette', 60);


console.log(lion.mate(paul, paulette));



