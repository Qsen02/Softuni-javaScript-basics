function solve(input) {
    let firstDayKilometers = Number(input[1]);
    let allKilometers = firstDayKilometers;
    for (let i = 2; i < input.length; i++) {
        let curProcent = Number(input[i]);
        let curKilometersWithProcent = firstDayKilometers * (curProcent / 100);
        firstDayKilometers += curKilometersWithProcent;
        allKilometers += firstDayKilometers;
    }
    if (allKilometers >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(allKilometers-1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000-allKilometers)} more kilometers`);
    }
}
solve(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"
]);