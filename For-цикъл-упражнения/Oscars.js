function solve(input) {
    let name = input[0];
    let startPoints = Number(input[1]);
    let assessCount = Number(input[2]);

    let points = startPoints;
    for (let i = 1; i < assessCount * 2; i += 2) {
        let assessName = input[i + 2];
        let assessMark = Number(input[i + 3]);
        points += (assessName.length * assessMark) / 2;

        if (points > 1250.5) {
            break;
        }
    }

    if (points >= 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${(points).toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5-points).toFixed(1)} more!`)
    }
}
solve(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);