function solve(input) {
    let students = Number(input[0]);
    let grades = Number(input[1]);

    let topStudents = 0;
    let goodStudents = 0;
    let avgStudents = 0;
    let failedStudents = 0;
    let allGrades = 0;

    for (let i = 1; i <= students; i++) {
        grades = Number(input[i]);

        if (grades >= 5) {
            topStudents++;
            allGrades += grades;
        } else if (grades >= 4 && grades <= 4.99) {
            goodStudents++;
            allGrades += grades;
        } else if (grades >= 3 && grades <= 3.99) {
            avgStudents++;
            allGrades += grades;
        } else if (grades <= 2.99) {
            failedStudents++;
            allGrades += grades;
        }
    }
    let avgGrade = allGrades / students;
    console.log(`Top students: ${(topStudents/students*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodStudents/students*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(avgStudents/students*100).toFixed(2)}%`);
    console.log(`Fail: ${(failedStudents/students*100).toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}
solve(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);