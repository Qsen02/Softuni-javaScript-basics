/*function solve(input) {
    let months = Number(input[0]);
    let curBillForElectricity = Number(input[1]);

    let electricity = 0;
    let water = 0;
    let others = 0;
    let internet = 0;
    let waterBillPerMonth = 20;
    let internetBillPerMonth = 15;
    let curOthers = [];
    let allOthers = 0;
    for (let i = 1; i <= months; i++) {
        curBillForElectricity = Number(input[i]);
        electricity += curBillForElectricity;
        water += 20;
        internet += 15;
    }
    input.shift();
    for (let j = 0; j < months; j++) {
        curBillForElectricity = Number(input[j]);
        others = curBillForElectricity + waterBillPerMonth + internetBillPerMonth;
        curOthers.push(others);
    }
    for (let k = 0; k < months; k++) {
        let curBillOthers = Number(curOthers[k]);
        allOthers += curBillOthers + (curBillOthers * 0.20);
    }
    let averageForMonth = (electricity + water + internet + allOthers) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${allOthers.toFixed(2)} lv`);
    console.log(`Average: ${averageForMonth.toFixed(2)} lv`);
}*/
function solve(input) {
    let months = Number(input[0]);

    let waterPerMonth = 20;
    let internetPerMonth = 15;

    let waterTotal = 0;
    let internetTotal = 0;
    let electricityTotal = 0;
    let otherTotal = 0;
    let total = 0;

    for (let month = 1; month <= months; month++) {
        let electricityPerMonth = Number(input[month]);
        let basicExpenses = waterPerMonth + electricityPerMonth + internetPerMonth;
        let otherExpenses = basicExpenses * 1.2;

        waterTotal += waterPerMonth;
        internetTotal += internetPerMonth;
        electricityTotal += electricityPerMonth;
        otherTotal += otherExpenses;

        total += (basicExpenses + otherExpenses);
    }

    let avg = total / months;

    console.log(`Electricity: ${electricityTotal.toFixed(2)} lv`);
    console.log(`Water: ${waterTotal.toFixed(2)} lv`);
    console.log(`Internet: ${internetTotal.toFixed(2)} lv`);
    console.log(`Other: ${otherTotal.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);
}
solve(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);