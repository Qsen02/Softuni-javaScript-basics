function solve(input) {
    let days = Number(input[0]);
    let allFood = Number(input[1]);
    let firstDeer = Number(input[2]);
    let secondDeer = Number(input[3]);
    let thirdDeer = Number(input[4]);

    let firstDeerNeededFood = firstDeer * days;
    let secondDeerNeededFood = secondDeer * days;
    let thirdDeerNeededFood = thirdDeer * days;

    let neededFood = firstDeerNeededFood + secondDeerNeededFood + thirdDeerNeededFood;

    if (neededFood <= allFood) {
        console.log(`${Math.floor(allFood-neededFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(neededFood-allFood)} more kilos of food are needed.`);
    }
}
solve(["2",
    "10",
    "1",
    "1",
    "2"
]);