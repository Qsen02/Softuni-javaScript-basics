function solve(input) {
    let days = Number(input[0]);
    let place = input[1];
    let rating = input[2];

    let overnightStayCount = days - 1;
    let price = 0;

    switch (place) {
        case "room for one person":
            price = overnightStayCount * 18;
            break;
        case "apartment":
            price = overnightStayCount * 25;
            if (days < 10) {
                price -= price * 0.30;
            } else if (days >= 10 && days <= 15) {
                price -= price * 0.35;
            } else if (days > 15) {
                price -= price * 0.50;
            }
            break;
        case "president apartment":
            price = overnightStayCount * 35;
            if (days < 10) {
                price -= price * 0.10;
            } else if (days >= 10 && days <= 15) {
                price -= price * 0.15;
            } else if (days > 15) {
                price -= price * 0.20;
            }
            break;
    }
    if (rating === "positive") {
        price += price * 0.25;
    } else if (rating === "negative") {
        price -= price * 0.10;
    }

    console.log(price.toFixed(2));
}
solve(["14", "apartment", "positive"]);