function solve(input) {
    let cargoCount = Number(input[0]);
    let cargo = Number(input[1]);

    let allCargo = 0;
    let microbus = 0;
    let truck = 0;
    let train = 0;
    let price = 0;

    for (let i = 1; i <= cargoCount; i++) {
        cargo = Number(input[i]);

        if (cargo <= 3) {
            microbus += cargo;
            allCargo += cargo;
            price += cargo * 200;
        } else if (cargo >= 4 && cargo <= 11) {
            truck += cargo;
            allCargo += cargo;
            price += cargo * 175;
        } else {
            train += cargo;
            allCargo += cargo;
            price += cargo * 120;
        }
    }
    let avgPrice = price / allCargo;
    console.log(avgPrice.toFixed(2));
    console.log(`${(microbus/allCargo*100).toFixed(2)}%`);
    console.log(`${(truck/allCargo*100).toFixed(2)}%`);
    console.log(`${(train/allCargo*100).toFixed(2)}%`);
}
solve(["4", "1", "5", "16", "3"]);