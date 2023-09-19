function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let vacationType = 0;
    let price = 0;
    switch (season) {
        case "summer":
            if (budget <= 100) {
                vacationType = "Camp";
                destination = "Bulgaria";
                price += budget * 0.30;
            } else if (budget <= 1000) {
                vacationType = "Camp";
                destination = "Balkans";
                price += budget * 0.40;
            } else if (budget > 1000) {
                vacationType = "Hotel";
                destination = "Europe";
                price += budget * 0.90;
            }
            break;
        case "winter":
            if (budget <= 100) {
                vacationType = "Hotel";
                destination = "Bulgaria";
                price += budget * 0.70;
            } else if (budget <= 1000) {
                vacationType = "Hotel";
                destination = "Balkans";
                price += budget * 0.80;
            } else if (budget > 1000) {
                vacationType = "Hotel";
                destination = "Europe";
                price += budget * 0.90;
            }
            break;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${price.toFixed(2)}`);
}
solve(["50", "summer"]);