function solve(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holidayDay = input[4];

    let price = 0;
    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrcie = 0;
    switch (season) {
        case "Spring":
            chrysanthemumsPrice += chrysanthemums * 2;
            rosesPrice += roses * 4.10;
            tulipsPrcie += tulips * 2.50;
            price = chrysanthemumsPrice + rosesPrice + tulipsPrcie;
            if (tulips > 7) {
                price -= price * 0.05;
            }
            if (tulips + chrysanthemums + roses > 20) {
                price -= price * 0.20;
            }
            break;
        case "Summer":
            chrysanthemumsPrice += chrysanthemums * 2;
            rosesPrice += roses * 4.10;
            tulipsPrcie += tulips * 2.50;
            price = chrysanthemumsPrice + rosesPrice + tulipsPrcie;
            if (tulips + chrysanthemums + roses > 20) {
                price -= price * 0.20;
            }
            break;
        case "Autumn":
            chrysanthemumsPrice += chrysanthemums * 3.75;
            rosesPrice += roses * 4.50;
            tulipsPrcie += tulips * 4.15;
            price = chrysanthemumsPrice + rosesPrice + tulipsPrcie;
            if (tulips + chrysanthemums + roses > 20) {
                price -= price * 0.20;
            }
            break;
        case "Winter":
            chrysanthemumsPrice += chrysanthemums * 3.75;
            rosesPrice += roses * 4.50;
            tulipsPrcie += tulips * 4.15;
            price = chrysanthemumsPrice + rosesPrice + tulipsPrcie;
            if (tulips >= 10) {
                price -= price * 0.10;
            }
            if (tulips + chrysanthemums + roses > 20) {
                price -= price * 0.20;
            }
            break;
    }
    if (holidayDay === "Y") {
        price += price * 0.15;
    }
    price += 2;
    console.log(price.toFixed(2));
}
solve(["2", "4", "8", "Spring", "Y"]);