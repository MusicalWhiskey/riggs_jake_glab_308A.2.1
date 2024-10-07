console.log('Adventure Time!!! (GLAB 308A.2.1)');

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
    }

    // Dot Notation
    // console.log(adventurer.inventory);
    // // Bracket Notation
    // console.log(adventurer["inventory"]); 

    //Alternative Log
    // adventurer.inventory.forEach(item => console.log(item));

    //Log Adventurer's Items (better)
    console.log(`${adventurer.name}'s Inventory:`);
    for (let i = 0; i < adventurer.inventory.length; i++) {
        console.log(`- ${adventurer.inventory[i]}`);
    }

    //Adding Companion's Companion
    adventurer.companion.companion = {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
     };
    
//Method for rolling dice

 adventurer.roll = function(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
 };

 class Character {
    constructor(name) {
       this.name = name;
       this.health = 100;
       this.inventory = [];
    }
    roll(mod = 0) {
       const result = Math.floor(Math.random() * 20) + 1 + mod;
       console.log(`${this.name} rolled a ${result}.`);
    }
 }

 //Rollin
 adventurer.roll(0);

