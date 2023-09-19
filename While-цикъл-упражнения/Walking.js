function solve(input) {
    let currentSteps = Number(input[0]);
    let targetSteps = 10000;
    let allSteps = 0;
    let i = 0;
    while (allSteps < targetSteps) {
        let command = input[i];
        currentSteps = Number(input[i]);
        if (command === "Going home") {
            let stepstoHome = Number(input[i + 1]);
            allSteps += stepstoHome;
            break;
        } else {
            allSteps += currentSteps;
        }
        i++;
    }
    if (allSteps >= targetSteps) {
        console.log("Goal reached! Good job!");
        console.log(`${allSteps-targetSteps} steps over the goal!`);
    } else {
        console.log(`${targetSteps-allSteps} more steps to reach goal.`);
    }
}
solve(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"
]);