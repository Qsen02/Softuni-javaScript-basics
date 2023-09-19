function solve(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinutes = Number(input[3]);

    let examHourInMinutes = examHour * 60;
    let examTime = examHourInMinutes + examMinutes;
    let arriveHourInMinutes = arriveHour * 60;
    let arriveTime = arriveHourInMinutes + arriveMinutes;

    if (arriveTime > examTime) {
        console.log("Late");
        let difference = Math.abs(examTime - arriveTime);
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            let minutes = difference % 60;
            let hours = Math.floor(difference / 60);
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours after the start`)
        }
    } else if (arriveTime === examTime) {
        console.log("On time");
    } else if (arriveTime >= (examTime - 30)) {
        console.log("On time");
        let difference = Math.abs(examTime - arriveTime);
        console.log(`${difference} minutes before the start`);
    } else if (arriveTime < (examTime - 30)) {
        console.log("Early");
        let difference = Math.abs(examTime - arriveTime);
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            let minutes = difference % 60;
            let hours = Math.floor(difference / 60);
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours before the start`)
        }
    }
}
solve(["9", "30", "9", "50"]);