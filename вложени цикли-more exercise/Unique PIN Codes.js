function solve(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirdNumber = Number(input[2]);
    let isNotPrime = false;

    for (let i = 1; i <= firstNumber; i++) {
        if (i % 2 === 0) {
            let curFirstNum = `${i}`;
            for (let j = 2; j <= secondNumber; j++) {
                if (j === 2) {
                    let curSecondNum = `${j}`;
                    for (let k = 1; k <= thirdNumber; k++) {
                        if (k % 2 === 0) {
                            let curThirdNum = `${k}`;
                            console.log(`${curFirstNum} ${curSecondNum} ${curThirdNum}`);
                        }
                    }
                } else if (j > 2 && j !== secondNumber) {
                    for (h = 2; h < j; h++) {
                        if (j % h === 0) {
                            isNotPrime = true;
                        }
                    }
                    if (!isNotPrime) {
                        let curSecondNum = `${j}`;
                        for (let k = 1; k <= thirdNumber; k++) {
                            if (k % 2 === 0) {
                                let curThirdNum = `${k}`;
                                console.log(`${curFirstNum} ${curSecondNum} ${curThirdNum}`);
                            }
                        }
                    }
                } else if (secondNumber === j && (j !== 4 || j !== 6)) {
                    let curSecondNum = `${j}`;
                    for (let k = 1; k <= thirdNumber; k++) {
                        if (k % 2 === 0) {
                            let curThirdNum = `${k}`;
                            console.log(`${curFirstNum} ${curSecondNum} ${curThirdNum}`);
                        }
                    }
                }
            }
        }
    }
}
solve(["3", "5", "5"]);