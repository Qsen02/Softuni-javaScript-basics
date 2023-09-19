function solve(input) {
    let tournaments = Number(input[0]);
    let startPoints = Number(input[1]);

    let winsCount = 0;
    let points = 0;

    for (let i = 2; i < input.length; i++) {
        let curTour = input[i];
        switch (curTour) {
            case "W":
                points += 2000;
                winsCount++;
                break;
            case "F":
                points += 1200;
                break;
            case "SF":
                points += 720;
                break;
        }
    }
    let allPoints = startPoints + points;
    let avgPoints = points / tournaments;
    let procentWins = (winsCount / tournaments) * 100;

    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${procentWins.toFixed(2)}%`);
}
solve(["5", "1400", "F", "SF", "W", "W", "SF"]);