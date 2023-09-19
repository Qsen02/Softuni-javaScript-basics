function solve(input) {
    let buget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let singlePriceCostum = Number(input[2]);

    let decorSum = buget * 0.10;
    let customPrice = statistsCount * singlePriceCostum;

    if (statistsCount >= 150) {
        customPrice -= customPrice * 0.10;
    }

    let finalPrice = decorSum + customPrice;

    if (finalPrice > buget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalPrice-buget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(buget-finalPrice).toFixed(2)} leva left.`)
    }
}
solve(["20000", "120", "55.5"]);