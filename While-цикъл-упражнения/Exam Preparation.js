function solve(input) {
    let badGradesAllowed = Number(input[0]);
    let badGardesCount = 0;
    let tasksCount = 0;
    let lastTask = "";
    let gradesSum = 0
    let i = 1;
    command = input[i];
    while (command !== "Enough") {
        let taskName = input[i];
        let taskGrade = Number(input[i + 1]);
        tasksCount++;
        lastTask = taskName;
        gradesSum += taskGrade;

        if (taskGrade <= 4) {
            badGardesCount++;
        }

        if (badGardesCount >= badGradesAllowed) {
            console.log(`You need a break, ${badGardesCount} poor grades.`);
            break;
        }
        i += 2;
        command = input[i];
    }
    let avgGrade = gradesSum / tasksCount;
    if (command === "Enough") {
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${tasksCount}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
solve(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
]);