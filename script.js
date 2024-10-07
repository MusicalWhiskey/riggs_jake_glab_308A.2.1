console.log('GLAB 308A.2.1 test push test');

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
    console.log(adventurer.inventory);
    // Bracket Notation
    console.log(adventurer["inventory"]); 

    console.log(`${adventurer.name}'s Inventory:`);
    for (let i = 0; i < adventurer.inventory.length; i++) {
        console.log(`- ${adventurer.inventory[i]}`);
    }