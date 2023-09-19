function solve(input) {
    let username = input[0];
    let password = input[1];
    let guessPassowrd = input[2];
    let i = 3;

    while (guessPassowrd !== password) {
        guessPassowrd = input[i];
        i++;
    }
    console.log(`Welcome ${username}!`);
}
solve(["Nakov",

    "1234",

    "Pass",

    "1324",

    "1234"
]);