function solve(input) {
    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let yearInterest = Number(input[2]);
    yearInterest = yearInterest / 100;
    let sum = depositSum + depositTime * ((depositSum * yearInterest) / 12);
    console.log(sum);
}
solve(["200 ", "3 ", "5.7 "]);