class Animal {
    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 2) {
            this._name = newName;
        } else {
            console.log("Error: provided name must be 2 characters or longer");
        }
    }
    get weight() {
        return this._weight;
    }

    set weight(newWeight) {
        if (newWeight > 0) {
            this._weight = newWeight;
        } else {
            console.log("Error: provded weight must be greater than 0");
        }
    }
    constructor(name, weight, food, energy, bodyTemp) {
        this.name = name;
        this.weight = weight;
        this.foodAmount = food;
        this.energyLevel = energy;
        this.bodyTemp = bodyTemp;
    }
    play() {
        this.energyLevel -= 50;
        console.log(this.name + " has " + this.energyLevel + " energy left after playing.");
    }
    greet() {
        if (this.name && this.weight) {
            console.log("Hello, my name is " + this.name + " and I weigh " + this.weight + " kg");
        }
    }
    eat() {
        this.energyLevel += this.foodAmount;
        console.log(this.name + "'s energy level has risen to " + this.energyLevel + " after eating.");
    }

    mate(parent1, parent2) {

        if (parent1.constructor.name === parent2.constructor.name) {
            var baby = new parent2.constructor('baby ' + parent2.constructor.name, 4);
            return baby._name + ', ' + baby._weight + ' kg';
        } else {
            console.log("Sorry, you cannot mate a " + parent1.constructor.name + " with a " + parent2.constructor.name + ", you sicko" )
        }
    }
}


module.exports = Animal
