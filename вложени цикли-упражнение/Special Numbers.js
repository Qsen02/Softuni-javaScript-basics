function solve(input) {
    let specialNum = Number(input[0]);
    let delitelDigitCount = 0;
    let printRow = " ";
    for (let i = 1111; i <= 9999; i++) {
        let curNum = `${i}`;
        delitelDigitCount = 0;
        for (let j = 0; j <= curNum.length - 1; j++) {
            let digit = Number(curNum[j]);
            if (specialNum % digit === 0) {
                delitelDigitCount++;
            }
        }
        if (delitelDigitCount === 4) {
            printRow += curNum + " ";
        }
    }
    console.log(printRow);
}
solve(["3"]);