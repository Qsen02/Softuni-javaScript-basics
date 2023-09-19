function solve(input) {
    let pagesCount = Number(input[0]);
    let pagerPerHour = Number(input[1]);
    let days = Number(input[2]);
    let timeForBook = pagesCount / pagerPerHour;
    let neededHours = timeForBook / days;
    console.log(neededHours);
}
solve(["212 ", "20 ", "2 "]);