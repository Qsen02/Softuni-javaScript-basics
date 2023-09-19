function solve(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let optionalSide = x * y;
    let window = 1.5 * 1.5;
    let allOptionalSides = 2 * optionalSide - 2 * window;

    let behindSide = x * x;
    let door = 1.2 * 2;
    let behindAndFrontSide = behindSide * 2 - door;

    let allArea = allOptionalSides + behindAndFrontSide;
    let greenPaint = allArea / 3.4;

    let squaresArea = 2 * (x * y);
    let trianglesArea = 2 * ((x * h) / 2);
    let roofArea = squaresArea + trianglesArea;
    let redPaint = roofArea / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}
solve(["6", "10", "5.2"]);