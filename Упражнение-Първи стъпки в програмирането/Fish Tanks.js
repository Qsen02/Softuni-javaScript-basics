function solve(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let volume = length * width * height;
    let liters = volume / 1000;
    let occupiedSpace = procent / 100;

    let litersNeeded = liters * (1 - occupiedSpace);
    console.log(litersNeeded);
}
solve(["85 ", "75 ", "47 ", "17 "]);