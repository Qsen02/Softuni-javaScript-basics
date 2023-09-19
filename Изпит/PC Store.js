function solve(input) {
    let CPUInDolars = Number(input[0]);
    let GPUInDolars = Number(input[1]);
    let RAMInDolars = Number(input[2]);
    let RAMCount = Number(input[3]);
    let discount = Number(input[4]);

    let CPUInBGN = CPUInDolars * 1.57;
    let GPUInBGN = GPUInDolars * 1.57;
    let RAMInBGN = RAMInDolars * 1.57 * RAMCount;

    let CPUWithDiscount = CPUInBGN - (CPUInBGN * discount);
    let GPUWithDiscount = GPUInBGN - (GPUInBGN * discount);

    let allPrice = RAMInBGN + CPUWithDiscount + GPUWithDiscount;
    console.log(`Money needed - ${allPrice.toFixed(2)} leva.`);
}
solve(["500",
    "200",
    "80",
    "2",
    "0.05"
]);