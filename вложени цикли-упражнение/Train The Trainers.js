function solve(input) {
    let juriesCount = Number(input[0]);
    let i = 1;
    let command = input[i];
    let allAssessmentSum = 0;
    let assessmentCount = 0;
    while (command !== "Finish") {
        assessmentCount++;
        let curPresentation = command;
        let assessmentSum = 0;
        for (let j = 1; j <= juriesCount; j++) {
            i++;
            let curAssessment = Number(input[i]);
            assessmentSum += curAssessment;
        }
        let assessmentAvg = assessmentSum / juriesCount;
        allAssessmentSum += assessmentAvg;
        console.log(`${curPresentation} - ${(assessmentAvg).toFixed(2)}.`);
        i++;
        command = input[i];
    }
    let allAssesmentAvg = allAssessmentSum / assessmentCount;
    console.log(`Student's final assessment is ${(allAssesmentAvg).toFixed(2)}.`);
}
solve(["3",

    "Arrays",

    "4.53",

    "5.23",

    "5.00",

    "Lists",

    "5.83",

    "6.00",

    "5.42",

    "Finish"
]);