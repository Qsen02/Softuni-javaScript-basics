function solve(input) {
    let days = Number(input[0]);
    let patients = Number(input[1]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= days; i++) {
        patients = Number(input[i]);
        if (i % 3 === 0 && untreatedPatients > treatedPatients) {
            doctors++;
        }
        if (patients <= doctors) {
            treatedPatients += patients;
        } else {
            treatedPatients += doctors;
            untreatedPatients += patients - doctors;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
solve(["6", "25", "25", "25", "25", "25", "2"]);