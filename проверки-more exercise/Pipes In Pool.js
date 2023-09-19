function solve(input) {
    let volume = Number(input[0]);
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let hours = Number(input[3]);

    let pipe1Filling = pipe1 * hours;
    let pipe2Filling = pipe2 * hours;

    let allPipesFilling = pipe1Filling + pipe2Filling;
    let procentFill = (allPipesFilling / volume) * 100;
    let procentPipe1Fill = (pipe1Filling / allPipesFilling) * 100;
    let procentPipe2Fill = (pipe2Filling / allPipesFilling) * 100;

    if (allPipesFilling <= volume) {
        console.log(`The pool is ${procentFill.toFixed(2)}% full. Pipe 1: ${procentPipe1Fill.toFixed(2)}%. Pipe 2: ${procentPipe2Fill.toFixed(2)}%.`)
    } else {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(allPipesFilling-volume).toFixed(2)} liters.`);
    }
}
solve(["1000", "100", "120", "3"]);