function solve(input) {
    let serialName = input[0];
    let timeForEpisod = Number(input[1]);
    let timeForRest = Number(input[2]);

    let timeForEat = timeForRest / 8;
    let timeForRelaxion = timeForRest / 4;
    let timeForSerial = timeForRest - timeForEat - timeForRelaxion;

    if (timeForSerial >= timeForEpisod) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeForSerial-timeForEpisod)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(timeForEpisod-timeForSerial)} more minutes.`);
    }
}
solve(["Game of Thrones", "60", "96"]);