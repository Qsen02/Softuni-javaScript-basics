function solve(input) {
    let buget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let CPUCount = Number(input[2]);
    let RAMCount = Number(input[3]);

    let videoCardPrice = videoCardCount * 250;
    let CPUSinglePrice = videoCardPrice * 0.35;
    let CPUPrice = CPUCount * CPUSinglePrice;
    let RAMSinglePrice = videoCardPrice * 0.10;
    let RAMPrice = RAMCount * RAMSinglePrice;
    let finalPrice = videoCardPrice + CPUPrice + RAMPrice;

    if (videoCardCount > CPUCount) {
        finalPrice -= finalPrice * 0.15;
    }

    if (finalPrice <= buget) {
        console.log(`You have ${(buget-finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(finalPrice-buget).toFixed(2)} leva more!`);
    }
}
solve(["900", "2", "1", "3"]);