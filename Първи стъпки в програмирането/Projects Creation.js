function solve(input) {
    let architectName = input[0];
    let projectCount = Number(input[1]);
    let hoursNeeded = projectCount * 3;
    let result = `The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectCount} project/s.`;
    console.log(result);
}
solve(["George ", "4 "]);