function solve(input) {
    let command = input[0];
    let i = 0;
    while (command !== "End") {
        let destination = command;
        i++;
        let buget = Number(input[i]);
        let savedMoney = 0;
        while (savedMoney < buget) {
            i++;
            let curMoney = Number(input[i]);
            savedMoney += curMoney;
            command = input[i];
        }
        i++;
        console.log(`Going to ${destination}!`);
        command = input[i];
    }
}
solve((["Greece",

    "1000",

    "200",

    "200",

    "300",

    "100",

    "150",

    "240",

    "Spain",

    "1200",

    "300",

    "500",

    "193",

    "423",

    "End"
]));