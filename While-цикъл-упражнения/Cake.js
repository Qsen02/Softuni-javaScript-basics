function solve(input) {
    let width = Number(input[0]);
    let heigh = Number(input[1]);

    let cakeSize = width * heigh;
    let i = 2;
    let command = input[i];
    while (command !== "STOP") {
        let curPeaceSize = Number(input[i]);
        cakeSize -= curPeaceSize;
        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
            break;
        }
        i++;
        command = input[i];
    }
    if (command === "STOP") {
        console.log(`${Math.abs(cakeSize)} pieces are left.`);
    }
}
solve(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);