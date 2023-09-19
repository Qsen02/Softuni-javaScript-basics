function findHiddenMessage(data) {
    let secretCommand = ["c", "o", "n"];
    let currentWord = "";
    let foundCommand = [false, false, false];
    let result = [];

    let i = 0;
    let command = data[i]
    while (command !== "End") {
        let char = data[i];

        if (secretCommand.includes(char.toLowerCase())) {
            foundCommand[secretCommand.indexOf(char.toLowerCase())] = true;
        } else if (char.match(/[a-zA-Z]/) && foundCommand.every(Boolean)) {
            currentWord += char;
        }

        if (foundCommand.every(Boolean)) {
            result.push(currentWord);
            currentWord = "";
            foundCommand = [false, false, false];
        }

        i++;
        command = data[i];
    }

    console.log(result.join(" "));
}
findHiddenMessage(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);