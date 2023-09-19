function solve(input) {
    let value = [];
    let equalsCount = 0;
    let notEquals = [];
    for (let i = 1; i < input.length; i += 2) {
        let num1 = Number(input[i]);
        let num2 = Number(input[i + 1]);
        let curValue = 0;
        curValue = num1 + num2;
        value.push(curValue);
    }
    for (let i = 0; i < value.length; i++) {
        let curValue1 = Number(value[i]);
        if (value.length === 1) {
            console.log(`Yes, value=${curValue1}`);
            break;
        }
        let curValue2 = Number(value[i + 1]);
        let curEqualValue = 0;
        let notEqualsValue = 0;
        if (curValue1 === curValue2) {
            curEqualValue = curValue1;
            equalsCount++;
        } else {
            notEqualsValue = Math.abs(curValue1 - curValue2);
            notEquals.push(notEqualsValue);
        }
        if (equalsCount === value.length - 1) {
            console.log(`Yes, value=${curEqualValue}`);
            break;
        }
    }
    if (equalsCount !== value.length - 1) {
        let maxDiff = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < notEquals.length; i++) {
            let curValue = Number(notEquals[i]);
            if (curValue > maxDiff) {
                maxDiff = curValue;
            }
        }
        console.log(`No, maxdiff=${maxDiff}`);
    }

}
solve(["1", "5", "5"]);