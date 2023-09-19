function solve(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let colons = Number(input[2]);

    let allSeats = rows * colons;
    let price = 0;
    switch (projectionType) {
        case "Premiere":
            price = allSeats * 12;
            break;
        case "Normal":
            price = allSeats * 7.50;
            break;
        case "Discount":
            price = allSeats * 5;
            break;
    }

    console.log(`${price.toFixed(2)} leva.`);
}
solve(["Premiere", "10", "12"]);