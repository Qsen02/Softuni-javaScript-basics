function solve(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trace = input[2];

    let juniorTaks = 0;
    let seniorTaks = 0;

    switch (trace) {
        case "trail":
            juniorTaks += juniors * 5.50;
            seniorTaks += seniors * 7;
            break;
        case "cross-country":
            juniorTaks += juniors * 8;
            seniorTaks += seniors * 9.50;
            if (juniors + seniors >= 50) {
                juniorTaks -= juniorTaks * 0.25;
                seniorTaks -= seniorTaks * 0.25;
            }
            break;
        case "downhill":
            juniorTaks += juniors * 12.25;
            seniorTaks += seniors * 13.75;
            break;
        case "road":
            juniorTaks += juniors * 20;
            seniorTaks += seniors * 21.50;
            break;
    }
    let sum = seniorTaks + juniorTaks;
    let razhods = sum * 0.05;
    console.log((sum - razhods).toFixed(2));
}
solve(["10", "20", "trail"]);