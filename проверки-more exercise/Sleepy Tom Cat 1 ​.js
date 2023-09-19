function solve(input) {
    let freeDays = Number(input[0]);

    let notFreeDaysCount = 365 - freeDays;
    let allPlayingTime = freeDays * 127 + notFreeDaysCount * 63;

    if (allPlayingTime <= 30000) {
        let playingTime = 30000 - allPlayingTime;
        let lessPlayingTimeInHours = playingTime / 60;
        let lessPlayingTimeInMinutes = playingTime % 60;
        console.log("Tom sleeps well");
        console.log(`${Math.floor(lessPlayingTimeInHours)} hours and ${lessPlayingTimeInMinutes} minutes less for play`);
    } else {
        let playingTime = allPlayingTime - 30000;
        let lessPlayingTimeInHours = playingTime / 60;
        let lessPlayingTimeInMinutes = playingTime % 60;
        console.log("Tom will run away");
        console.log(`${Math.floor(lessPlayingTimeInHours)} hours and ${lessPlayingTimeInMinutes} minutes more for play`);
    }
}
solve(["20"]);