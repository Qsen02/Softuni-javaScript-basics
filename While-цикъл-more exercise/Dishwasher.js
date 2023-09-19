function solve(input) {
    let preparatBottleCount = Number(input[0]);
    let preparatQuantity = preparatBottleCount * 750;
    let i = 1;
    let command = input[i];
    let dishes = 0;
    let pots = 0;
    while (command !== "End") {
        let curDishes = Number(input[i]);
        if (i % 3 === 0) {
            pots += curDishes;
            curDishes *= 15;
            preparatQuantity -= curDishes;
        } else {
            dishes += curDishes;
            curDishes *= 5;
            preparatQuantity -= curDishes;
        }

        if (preparatQuantity < 0) {
            console.log(`Not enough detergent, ${Math.abs(preparatQuantity)} ml. more necessary!`);
            break;
        }
        i++;
        command = input[i];
    }
    if (command === "End") {
        console.log("Detergent was enough!");
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${preparatQuantity} ml.`);
    }
}
solve(["2", "53", "65", "55", "End"])