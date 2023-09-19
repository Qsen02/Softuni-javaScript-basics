function solve(input) {
    let movesCount = Number(input[0]);
    let move = Number(input[1]);

    let points = 0;
    let interval1 = 0;
    let interval2 = 0;
    let interval3 = 0;
    let interval4 = 0;
    let interval5 = 0;
    let invalidNumbers = 0;

    for (let i = 1; i <= movesCount; i++) {
        move = Number(input[i]);

        if (move === 0 && move <= 9) {
            interval1++;
            points += move * 0.20;
        } else if (move >= 10 && move <= 19) {
            interval2++;
            points += move * 0.30;
        } else if (move >= 20 && move <= 29) {
            interval3++;
            points += move * 0.40;
        } else if (move >= 30 && move <= 39) {
            interval4++;
            points += 50;
        } else if (move >= 40 && move <= 50) {
            interval5++;
            points += 100;
        } else if (move < 0 || move > 50) {
            invalidNumbers++;
            points /= 2;
        }
    }
    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(interval1/movesCount*100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(interval2/movesCount*100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(interval3/movesCount*100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(interval4/movesCount*100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(interval5/movesCount*100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumbers/movesCount*100).toFixed(2)}%`);
}
solve(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);