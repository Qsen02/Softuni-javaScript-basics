function solve(input) {
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    let naylonSum = (naylon + 2) * 1.50;
    let procentPaint = paint * 0.1;
    let paintSum = (paint + procentPaint) * 14.50;
    let razreditelSum = razreditel * 5.00;
    let bags = 0.40;

    let materailsSum = naylonSum + paintSum + razreditelSum + bags;

    let workersSum = (materailsSum * 0.30) * hours;
    let fullSum = materailsSum + workersSum;
    console.log(fullSum);

}
solve(["10 ", "11 ", "4 ", "8 "]);