function solve(input) {
    let mackerelPrice = Number(input[0]);
    let sprinklePrice = Number(input[1]);
    let palamudWeight = Number(input[2]);
    let safridWeight = Number(input[3]);
    let musselsWeight = Number(input[4]);

    let palamudSinglePrice = mackerelPrice + mackerelPrice * 0.60;
    let safridSinglePrice = sprinklePrice + sprinklePrice * 0.80;
    let musslePrice = musselsWeight * 7.50;

    let palamudPrice = palamudWeight * palamudSinglePrice;
    let safridPrice = safridWeight * safridSinglePrice;

    let allPrice = musslePrice + palamudPrice + safridPrice;
    console.log(allPrice.toFixed(2));
}
solve(["6.90", "4.20", "1.5", "2.5", "1"]);