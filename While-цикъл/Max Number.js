function solve(input) {
    let command = input[0];
    let maxNum = Number.MIN_SAFE_INTEGER;
    let i = 1;

    while (command !== "Stop") {
        let curNum = Number(command);
        if (curNum > maxNum) {
            maxNum = curNum;
        }
        command = input[i];
        i++;
    }
    console.log(maxNum);
}
solve(["100",

    "99",

    "80",

    "70",

    "Stop"
]);