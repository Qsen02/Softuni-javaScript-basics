function solve(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let groupCount = Number(input[2]);
    let price = 0;

    switch (category) {
        case "Normal":
            price += 249.99 * groupCount;
            if (groupCount >= 1 && groupCount <= 4) {
                price += budget * 0.75;
            } else if (groupCount >= 5 && groupCount <= 9) {
                price += budget * 0.60;
            } else if (groupCount >= 10 && groupCount <= 24) {
                price += budget * 0.50;
            } else if (groupCount >= 25 && groupCount <= 49) {
                price += budget * 0.40;
            } else if (groupCount >= 50) {
                price += budget * 0.25;
            }
            break;
        case "VIP":
            price += 499.99 * groupCount;
            if (groupCount >= 1 && groupCount <= 4) {
                price += budget * 0.75;
            } else if (groupCount >= 5 && groupCount <= 9) {
                price += budget * 0.60;
            } else if (groupCount >= 10 && groupCount <= 24) {
                price += budget * 0.50;
            } else if (groupCount >= 25 && groupCount <= 49) {
                price += budget * 0.40;
            } else if (groupCount >= 50) {
                price += budget * 0.25;
            }
            break;
    }
    if (budget >= price) {
        console.log(`Yes! You have ${(budget-price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
    }

}
solve(["30000", "VIP", "49"]);