function solve(input) {
    let needMoney = Number(input[0]);
    let collectedMoney = 0;
    let payInCashCount = 0;
    let payInCashSum = 0;
    let payWithCardCount = 0;
    let payWithCardSum = 0;
    let i = 1;
    let command = input[i];

    while (command !== "End") {
        let curTransaction = Number(input[i]);
        if (i % 2 === 0) {
            if (curTransaction < 10) {
                console.log("Error in transaction!");
            } else {
                payWithCardCount++;
                payWithCardSum += curTransaction;
                collectedMoney += curTransaction;
                console.log("Product sold!");
            }
        } else {
            if (curTransaction > 100) {
                console.log("Error in transaction!");
            } else {
                payInCashCount++;
                payInCashSum += curTransaction;
                collectedMoney += curTransaction;
                console.log("Product sold!");
            }
        }
        if (collectedMoney >= needMoney) {
            let avgPayInCash = payInCashSum / payInCashCount;
            let avgPayWithCard = payWithCardSum / payWithCardCount;
            console.log(`Average CS: ${avgPayInCash.toFixed(2)}`);
            console.log(`Average CC: ${avgPayWithCard.toFixed(2)}`);
            break;
        }
        i++;
        command = input[i];
    }
    if (command === "End") {
        console.log("Failed to collect required money for charity.");
    }
}
solve(["500", "120", "8", "63", "256", "78", "317"]);