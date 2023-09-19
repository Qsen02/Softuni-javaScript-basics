function solve(input) {
    let vacotionPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysPrice = puzzlesCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        toysPrice -= toysPrice * 0.25;
    }
    let rent = toysPrice * 0.10;
    let earnMoneys = toysPrice - rent;

    if (earnMoneys >= vacotionPrice) {
        console.log(`Yes! ${(earnMoneys-vacotionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacotionPrice-earnMoneys).toFixed(2)} lv needed.`)
    }
}
solve(["40.8", "20", "25", "30", "50", "10"]);