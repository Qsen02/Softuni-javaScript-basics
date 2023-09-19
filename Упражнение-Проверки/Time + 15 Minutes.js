function solve(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let hoursInMinutes = hours * 60;
    let allMinutes = hoursInMinutes + minutes + 15;
    let sumHours = Math.floor(allMinutes / 60);
    let sumMinutes = allMinutes % 60;

    if (sumHours > 23) {
        sumHours = 0;
    }

    if (sumMinutes < 10) {
        console.log(`${sumHours}:0${sumMinutes}`);
    } else {
        console.log(`${sumHours}:${sumMinutes}`);
    }
}
solve(["23", "59"]);