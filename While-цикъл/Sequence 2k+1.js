function solve(input) {
    let num = Number(input[0]);
    let curNum = 1;

    while (curNum <= num) {
        console.log(curNum);
        curNum = curNum * 2 + 1;
    }
}
solve(["3"]);