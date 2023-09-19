function solve(input) {
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let menuPrice = chikenMenu * 10.35 + fishMenu * 12.40 + veganMenu * 8.15;
    let dessertPrice = menuPrice * 0.20;
    let deliveryPice = 2.50;

    let fullPrice = menuPrice + dessertPrice + deliveryPice;
    console.log(fullPrice);

}
solve(["2 ", "4 ", "3 "]);