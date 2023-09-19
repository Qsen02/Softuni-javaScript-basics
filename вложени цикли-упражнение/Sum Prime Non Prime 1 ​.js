function solve(input) {
    let i = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (input[i] !== "stop") {
        let currentNum = Number(input[i]);

        if (currentNum < 0) {
            console.log("Number is negative.");
        } else if (currentNum === 0 || currentNum === 1) {
            nonPrimeSum += currentNum;
        } else {
            let isNonPrime = false;
            for (let i = 2; i < currentNum; i++) {
                if (currentNum % i === 0) {
                    isNonPrime = true;
                    break;
                }
            }
            if (isNonPrime) {
                nonPrimeSum += currentNum;
            } else {
                primeSum += currentNum;
            }
        }
        i++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
solve((["3",

    "9",

    "0",

    "7",

    "19",

    "4",

    "stop"
]));