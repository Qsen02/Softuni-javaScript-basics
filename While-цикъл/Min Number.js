function solve(input) {
    let command = input[0];
    let minNum = Number.MAX_SAFE_INTEGER;
    let i = 1;
    while (command !== "Stop") {
        let curNum = Number(command);
        if (curNum < minNum) {
            minNum = curNum;
        }
        command = input[i];
        i++;
    }
    console.log(minNum);
}
solve(["100",

    "99",

    "80",

    "70",

    "Stop"
]);