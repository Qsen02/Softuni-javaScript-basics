function solve(input) {
    let dogsCount = Number(input[0]);
    let catsCount = Number(input[1]);
    let cost = dogsCount * 2.50 + catsCount * 4;
    let result = ` ${cost} lv.`;
    console.log(result);
}
solve(["5 ", "4 "]);