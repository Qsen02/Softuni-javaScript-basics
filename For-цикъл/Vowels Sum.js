function solve(input) {
    let text = input[0];
    let scores = 0;

    for (let i = 0; i < text.length; i++) {
        let curLetter = text[i];

        switch (curLetter) {
            case "a":
                scores++;
                break;
            case "e":
                scores += 2;
                break;
            case "i":
                scores += 3;
                break;
            case "o":
                scores += 4;
                break;
            case "u":
                scores += 5;
                break;
        }
    }
    console.log(scores);
}
solve(["hello"]);