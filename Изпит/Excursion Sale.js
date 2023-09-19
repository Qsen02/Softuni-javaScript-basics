function solve(input) {
    let seasCountAvailable = Number(input[0]);
    let mountainsCountAvailable = Number(input[1]);
    let i = 2;
    let command = input[i];
    let money = 0;
    while (command !== "Stop") {
        let packets = input[i];
        switch (packets) {
            case "sea":
                if (seasCountAvailable === 0) {
                    money += 0;
                } else {
                    seasCountAvailable--;
                    money += 680;
                }
                break;
            case "mountain":
                if (mountainsCountAvailable === 0) {
                    money += 0;
                } else {
                    mountainsCountAvailable--;
                    money += 499;
                }
                break;
        }
        i++;
        if (i > input.length) {
            console.log("Good job! Everything is sold.");
            console.log(`Profit: ${money} leva.`);
            break;
        }
        command = input[i];
    }
    if (command === "Stop") {
        console.log(`Profit: ${money} leva.`);
    }
}
solve(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"
]);