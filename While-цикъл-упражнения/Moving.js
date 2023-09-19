function solve(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let freeSpace = width * length * height;
    let ocupiedSpace = 0;
    let i = 3;
    let command = input[i];
    while (command !== "Done") {
        let curOcupiedSpace = Number(input[i]);
        ocupiedSpace += curOcupiedSpace;
        freeSpace -= curOcupiedSpace;
        if (freeSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        i++;
        command = input[i];
    }
    if (command === "Done") {
        console.log(`${Math.abs(freeSpace)} Cubic meters left.`);
    }
}
solve(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"
]);