function solve(input) {
    let vegetablesSinglePrice = Number(input[0]);
    let fruitsSinglePrice = Number(input[1]);
    let vegetableWeight = Number(input[2]);
    let fruitsWeight = Number(input[3]);

    let vegetablePrice = vegetablesSinglePrice * vegetableWeight;
    let fruitsPrice = fruitsSinglePrice * fruitsWeight;

    let allPrice = vegetablePrice + fruitsPrice;
    let allPriceInEuro = allPrice / 1.94;
    console.log(allPriceInEuro.toFixed(2));
}
solve(["0.194", "19.4", "10", "10"]);