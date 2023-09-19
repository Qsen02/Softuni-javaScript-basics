function solve(input) {
    let command = input[0];
    let totalSum = 0;
    let i = 1;

    while (command !== "NoMoreMoney") {
        let sum = Number(command);
        if (sum < 0) {
            console.log("Invalid operation!");
            break;
        }
        totalSum += sum;
        console.log(`Increase: ${sum.toFixed(2)}`);
        command = input[i];
        i++;
    }
    console.log(`Total: ${totalSum.toFixed(2)}`)
}
solve(["5.51",

    "69.42",

    "100",

    "NoMoreMoney"
]);