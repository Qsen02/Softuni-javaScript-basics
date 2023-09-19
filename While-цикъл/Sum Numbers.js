function solve(input) {
    let targetSum = Number(input[0]);
    let curNum = Number(input[1]);
    let curSum = 0;
    let i = 2;

    while (curSum < targetSum) {
        curSum += curNum;
        curNum = Number(input[i]);
        i++;
    }
    console.log(curSum);
}
solve(["20", "1", "2", "3", "4", "5", "6"]);