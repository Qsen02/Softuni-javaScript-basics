function solve(input) {
    let numsCount = Number(input[0]);
    let numsSum = 0;
    for (let i = 1; i <= numsCount; i++) {
        let curNum = Number(input[i]);
        numsSum += curNum;
    }
    let average = numsSum / numsCount;
    console.log(average.toFixed(2));
}
solve(["4", "3", "2", "4", "2"]);