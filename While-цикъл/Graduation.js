function solve(input) {
    let student = input[0];
    let grades = Number(input[1]);
    let classes = 0;
    let i = 1;
    let gradesSum = 0;
    let failsCount = 0;
    while (classes < 12) {
        grades = Number(input[i]);
        if (grades < 4) {
            failsCount++;
            if (failsCount >= 2) {
                console.log(`${student} has been excluded at ${classes+1} grade`);
                break;
            }
        } else {
            classes++;
            gradesSum += grades;
        }
        i++;
    }
    let avgGrade = gradesSum / 12;
    if (classes === 12) {
        console.log(`${student} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    }
}
solve(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);