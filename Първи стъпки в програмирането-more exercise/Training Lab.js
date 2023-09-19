function solve(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);

    let lengthInCentimeters = length * 100;
    let widthInCentimeters = width * 100;
    let corridor = 100;

    let widthIncludeCorridor = widthInCentimeters - corridor;
    let burosInRow = Math.floor(widthIncludeCorridor / 70);
    let rows = Math.floor(lengthInCentimeters / 120);
    let places = (burosInRow * rows) - 3;
    console.log(places);
}
solve(["15", "8.9"]);