function solve(input) {
    let yearTaks = Number(input[0]);
    let shoes = yearTaks * 0.60;
    let suit = shoes * 0.80;
    let ball = suit * 0.25;
    let accsesoary = ball * 0.20;

    let finalPrice = yearTaks + shoes + suit + ball + accsesoary;
    console.log(finalPrice);
}
solve(["365 "]);