function solve(input) {
    let squareMeters = Number(input[0]);
    let costWithoutDiscount = squareMeters * 7.61;
    let discount = costWithoutDiscount * 0.18;
    let totalCost = costWithoutDiscount - discount;
    console.log(`The final price is: ${totalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
solve(["550"]);