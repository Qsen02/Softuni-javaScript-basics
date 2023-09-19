function solve(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let wholeTime = distance * timeForMeter;
    let slow = Math.floor(distance / 15);
    wholeTime = wholeTime + (slow * 12.5);

    if (wholeTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${wholeTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(wholeTime-record).toFixed(2)} seconds slower.`);
    }
}
solve(["55555.67", "3017", "5.03"]);