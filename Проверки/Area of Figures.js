function solve(input) {
    let figure = input[0];
    let area = 0;

    if (figure === "square") {
        let side = Number(input[1]);
        area = side * side;
    } else if (figure === "rectangle") {
        let width = Number(input[1]);
        let length = Number(input[2]);
        area = width * length;
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        area = Math.PI * Math.pow(radius, 2);
    } else if (figure === "triangle") {
        let side = Number(input[1]);
        let heigth = Number(input[2]);
        area = (side * heigth) / 2;
    }

    console.log(area.toFixed(3));
}
solve(["triangle", "4.5", "20"]);