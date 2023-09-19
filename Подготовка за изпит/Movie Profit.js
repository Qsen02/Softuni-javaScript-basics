function solve(input) {
    let minutes = Number(input[0]);
    let seconds = Number(input[1]);
    let length = Number(input[2]);
    let secondsPer100Meters = Number(input[3]);

    let conctrolsInSeconds = minutes * 60 + seconds;
    let timeSlow = (length / 120) * 2.5;

    let MarinsTime = (length / 100) * secondsPer100Meters - timeSlow;

    if (MarinsTime <= conctrolsInSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${MarinsTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(MarinsTime-conctrolsInSeconds).toFixed(3)} second slower.`);
    }
}
solve(["2",

    "12",

    "1200",

    "10"
]);