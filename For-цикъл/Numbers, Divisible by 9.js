function solve(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);

    let sum = 0;
    let validNum = "";

    for (let i = firstNum; i <= lastNum; i++) {
        if (i % 9 === 0) {
            sum += i;
            validNum += i + '\n';
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(validNum);
}
solve(["100", "200"]);