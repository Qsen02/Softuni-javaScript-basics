function solve(input) {
    let capacity = Number(input[0]);
    let fansCount = Number(input[1]);

    let countA = 0;
    let countB = 0;
    let countV = 0
    let countG = 0;

    for (let i = 2; i < input.length; i++) {
        let curSector = input[i];
        switch (curSector) {
            case "A":
                countA++;
                break;
            case "B":
                countB++;
                break;
            case "V":
                countV++;
                break;
            case "G":
                countG++;
                break;
        }
    }
    console.log(`${((countA/fansCount)*100).toFixed(2)}%`);
    console.log(`${((countB/fansCount)*100).toFixed(2)}%`);
    console.log(`${((countV/fansCount)*100).toFixed(2)}%`);
    console.log(`${((countG/fansCount)*100).toFixed(2)}%`);
    console.log(`${((fansCount/capacity)*100).toFixed(2)}%`);
}
solve(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);