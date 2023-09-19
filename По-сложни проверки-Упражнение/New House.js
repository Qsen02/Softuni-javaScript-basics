function solve(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (flowerType) {
        case "Roses":
            price = flowerCount * 5;
            if (flowerCount > 80) {
                price -= price * 0.10;
            }
            break;
        case "Dahlias":
            price = flowerCount * 3.80;
            if (flowerCount > 90) {
                price -= price * 0.15;
            }
            break;
        case "Tulips":
            price = flowerCount * 2.80;
            if (flowerCount > 80) {
                price -= price * 0.15;
            }
            break;
        case "Narcissus":
            price = flowerCount * 3;
            if (flowerCount < 120) {
                price += price * 0.15;
            }
            break;
        case "Gladiolus":
            price = flowerCount * 2.50;
            if (flowerCount < 80) {
                price += price * 0.20;
            }
            break;
    }

    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget-price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price-budget).toFixed(2)} leva more.`);
    }
}
solve(["Roses", "55", "250"]);