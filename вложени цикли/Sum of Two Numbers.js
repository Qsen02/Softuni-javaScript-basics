function solve(input) {
    let stratNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinations = 0;
    let magigNumIsFound = false;

    for (let i = stratNum; i <= endNum; i++) {
        for (let j = stratNum; j <= endNum; j++) {
            combinations++;
            if (i + j === magicNum) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNum})`);
                magigNumIsFound = true;
                break;
            }
        }
        if (magigNumIsFound) {
            break;
        }
    }
    if (!magigNumIsFound) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }
}
solve(["1", "10", "5"]);