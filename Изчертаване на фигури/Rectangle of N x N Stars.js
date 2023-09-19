function solve(input) {
    let n = Number(input[0]);
    let printLine = ""
    let star = "*"
    for (let i = 1; i <= n * n; i++) {
        if (i % n === 0) {
            star = "*\n";
        } else {
            star = "*"
        }
        printLine += star;
    }
    console.log(printLine);
}
solve(["5"])