function solve(input) {
    let smallNum = input[0];
    let bigNum = input[1];
    let printRow = " ";
    for (let i = smallNum; i <= bigNum; i++) {
        let currentNum = "" + i;
        let evenIndexesSum = 0;
        let oddIndexesSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentIndex = Number(currentNum[j]);
            if (j % 2 === 0) {
                evenIndexesSum += currentIndex;
            } else {
                oddIndexesSum += currentIndex;
            }
        }
        if (evenIndexesSum === oddIndexesSum) {
            printRow += ` ${i}`;
        }
    }
    console.log(printRow);
}
solve(["100000", "100050"]);