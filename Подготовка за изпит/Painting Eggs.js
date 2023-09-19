function solve(input) {
    let size = input[0];
    let color = input[1];
    let partidas = Number(input[2]);

    let price = 0;
    switch (size) {
        case "Large":
            if (color === "Red") {
                price = partidas * 16;
            } else if (color === "Green") {
                price = partidas * 12;
            } else if (color === "Yellow") {
                price = partidas * 9;
            }
            break;
        case "Medium":
            if (color === "Red") {
                price = partidas * 13;
            } else if (color === "Green") {
                price = partidas * 9;
            } else if (color === "Yellow") {
                price = partidas * 7;
            }
            break;
        case "Small":
            if (color === "Red") {
                price = partidas * 9;
            } else if (color === "Green") {
                price = partidas * 8;
            } else if (color === "Yellow") {
                price = partidas * 5;
            }
            break;
    }
    let razhods = price * 0.35;
    let winMoney = price - razhods;

    console.log(`${winMoney.toFixed(2)} leva.`);
}
solve(["Large",

    "Red",

    "7"
]);