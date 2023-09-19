function solve(input) {
    let firtsName = Number(input[0]);
    let secondName = Number(input[1]);
    let thirdName = Number(input[2]);

    let fullTime = firtsName + secondName + thirdName;
    let minutes = Math.floor(fullTime / 60);
    let seconds = fullTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
solve(["35",

    "45",

    "44"
]);