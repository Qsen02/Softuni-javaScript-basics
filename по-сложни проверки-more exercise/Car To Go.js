function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let classType = " ";
    let carType = " ";
    if (budget <= 100) {
        classType = "Economy class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                price += budget * 0.35;
                break;
            case "Winter":
                carType = "Jeep";
                price += budget * 0.65;
                break;
        }
    } else if (budget > 100 && budget <= 500) {
        classType = "Compact class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                price += budget * 0.45;
                break;
            case "Winter":
                carType = "Jeep";
                price += budget * 0.80;
                break;
        }
    } else if (budget > 500) {
        classType = "Luxury class";
        switch (season) {
            case "Summer":
                carType = "Jeep";
                price += budget * 0.90;
                break;
            case "Winter":
                carType = "Jeep";
                price += budget * 0.90;
                break;
        }
    }
    console.log(classType);
    console.log(`${carType} - ${price.toFixed(2)}`);
}
solve(["450", "Summer"]);