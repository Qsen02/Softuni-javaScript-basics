function solve(input) {
    let penCount = Number(input[0]);
    let markersCount = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);

    let sumMaterials = penCount * 5.80 + markersCount * 7.20 + liters * 1.20;
    discount = discount / 100;

    let fullSum = sumMaterials - (sumMaterials * discount);
    console.log(fullSum);
}
solve(["2 ", "3 ", "4 ", "25 "]);