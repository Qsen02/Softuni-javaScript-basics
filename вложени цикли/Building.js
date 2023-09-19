function solve(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let curFloor = " ";
        for (let j = 0; j < rooms; j++) {
            if (i === floors) {
                curFloor += " " + `L${i}${j}`;
            } else if (i % 2 === 0) {
                curFloor += " " + `O${i}${j}`;
            } else {
                curFloor += " " + `A${i}${j}`;
            }
        }
        console.log(curFloor);
    }
}
solve(["6", "4"]);