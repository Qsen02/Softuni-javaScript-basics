function solve(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let comission = 0;

    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                comission = sales * 0.05;
            } else if (sales > 500 && sales <= 1000) {
                comission = sales * 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                comission = sales * 0.08;
            } else if (sales > 10000) {
                comission = sales * 0.12;
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                comission = sales * 0.045;
            } else if (sales > 500 && sales <= 1000) {
                comission = sales * 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                comission = sales * 0.10;
            } else if (sales > 10000) {
                comission = sales * 0.13;
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                comission = sales * 0.055;
            } else if (sales > 500 && sales <= 1000) {
                comission = sales * 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                comission = sales * 0.12;
            } else if (sales > 10000) {
                comission = sales * 0.145;
            }
            break;
    }
    if (comission !== 0) {
        console.log(comission.toFixed(2));
    } else {
        console.log("error")
    }
}
solve(["Varna", "-50"]);