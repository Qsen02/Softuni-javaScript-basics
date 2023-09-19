function solve(input) {
    let num = Number(input[0]);
    let isBigger = false;
    let current = 1;
    for (let i = 1; i <= num; i++) {
        let printRow = " ";
        for (let j = 1; j <= i; j++) {
            if (current > num) {
                isBigger = true;
                break;
            }
            printRow += current + " ";
            current++;
        }
        console.log(printRow);
        printRow = "";
        if (isBigger) {
            break;
        }
    }
}
solve(["7"]);