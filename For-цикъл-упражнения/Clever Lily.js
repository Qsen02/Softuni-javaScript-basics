function solve(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toySinglePrice = Number(input[2]);

    let money = 0;
    let toyCount = 0;
    let brotherMoney = 0;
    let givenMoney = 10;
    let savedMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney += givenMoney;
            givenMoney += 10;
            brotherMoney++;
        } else {
            toyCount++;
        }
    }
    let toyPrice = toyCount * toySinglePrice;
    money = (savedMoney + toyPrice) - brotherMoney;
    if (money >= washingMachine) {
        console.log(`Yes! ${(money-washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachine-money).toFixed(2)}`);
    }
}
solve(["10", "170.00", "6"]);