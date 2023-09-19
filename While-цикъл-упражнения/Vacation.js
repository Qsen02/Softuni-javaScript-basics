function solve(input) {
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let i = 2;
    let daysCount = 0;
    let daysSpending = 0;
    while (availableMoney < neededMoney) {
        let action = input[i];
        let curMoney = Number(input[i + 1]);
        daysCount++;
        if (availableMoney < 0) {
            availableMoney = 0;
        }

        if (action === "spend") {
            daysSpending++;
            availableMoney -= curMoney;
        } else if (action === "save") {
            availableMoney += curMoney;
        }

        if (daysSpending === 5) {
            console.log("You can't save the money.");
            console.log(daysCount);
            break;
        }
        i += 2;
    }
    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${daysCount} days.`);
    }
}
solve(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
]);