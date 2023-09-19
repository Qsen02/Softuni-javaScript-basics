function poSlojniProverki(input) {
    let month = input[0];
    let overnightStayCount = Number(input[1]);
    let price1 = 0;
    let price2 = 0;
    switch (month) {
        case "May":
            price1 = overnightStayCount * 50;
            price2 = overnightStayCount * 65;
            break;
        case "June":
            price1 = overnightStayCount * 75.20;
            price2 = overnightStayCount * 68.70;
            break;
        case "July":
            price1 = overnightStayCount * 76;
            price2 = overnightStayCount * 77;
            break;
        case "August":
            price1 = overnightStayCount * 76;
            price2 = overnightStayCount * 77;
            break;
        case "September":
            price1 = overnightStayCount * 75.20;
            price2 = overnightStayCount * 68.70;
            break;
        case "October":
            price1 = overnightStayCount * 50;
            price2 = overnightStayCount * 65;
            break;
    }
    if (overnightStayCount > 7 && overnightStayCount <= 14 && (month === "May" || month === "October")) {
        price1 = price1 * 0.95;
    } else if (overnightStayCount > 14 && (month === "May" || month === "October")) {
        price1 = price1 * 0.70;
    } else if (overnightStayCount > 14 && (month === "June" || month === "September")) {
        price1 = price1 * 0.80;
    }
    if (overnightStayCount > 14) {
        price2 = price2 * 0.90;
    }
    console.log(`Apartment: ${price2.toFixed(2)} lv.`);
    console.log(`Studio: ${price1.toFixed(2)} lv.`);
}