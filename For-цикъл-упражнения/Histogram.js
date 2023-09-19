function solve(input) {
    let numCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numCount; i++) {
        let curNum = Number(input[i]);
        if (curNum < 200) {
            p1++;
        } else if (curNum <= 399) {
            p2++;
        } else if (curNum <= 599) {
            p3++;
        } else if (curNum <= 799) {
            p4++;
        } else if (curNum >= 800) {
            p5++;
        }
    }
    console.log(`${(p1/numCount*100).toFixed(2)}%`);
    console.log(`${(p2/numCount*100).toFixed(2)}%`);
    console.log(`${(p3/numCount*100).toFixed(2)}%`);
    console.log(`${(p4/numCount*100).toFixed(2)}%`);
    console.log(`${(p5/numCount*100).toFixed(2)}%`);
}
solve(["3", "1", "2", "999"]);