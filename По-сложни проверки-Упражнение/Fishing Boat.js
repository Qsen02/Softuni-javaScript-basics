function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let seasonPrice = 0;

    switch (season) {
        case "Spring":
            seasonPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            seasonPrice = 4200;
            break;
        case "Winter":
            seasonPrice = 2600;
            break;
    }

    if (fishermans <= 6) {
        seasonPrice -= seasonPrice * 0.10;
    } else if (fishermans >= 7 && fishermans <= 11) {
        seasonPrice -= seasonPrice * 0.15;
    } else if (fishermans >= 12) {
        seasonPrice -= seasonPrice * 0.25;
    }

    if (fishermans % 2 === 0 && season !== "Autumn") {
        seasonPrice -= seasonPrice * 0.05;
    }

    if (seasonPrice <= budget) {
        console.log(`Yes! You have ${(budget-seasonPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(seasonPrice-budget).toFixed(2)} leva.`);
    }
}
solve(["3000", "Summer", "11"]);