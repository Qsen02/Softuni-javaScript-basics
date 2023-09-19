function solve(input) {
    let groups = Number(input[0]);
    let membersOfGroup = Number(input[1]);

    let Musala = 0;
    let Monblan = 0;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0;
    let allMembers = 0;

    for (let i = 1; i <= groups; i++) {
        membersOfGroup = Number(input[i]);
        if (membersOfGroup <= 5) {
            allMembers += membersOfGroup;
            Musala += membersOfGroup;
        } else if (membersOfGroup >= 6 && membersOfGroup <= 12) {
            allMembers += membersOfGroup;
            Monblan += membersOfGroup;
        } else if (membersOfGroup >= 13 && membersOfGroup <= 25) {
            allMembers += membersOfGroup;
            Kilimanjaro += membersOfGroup;
        } else if (membersOfGroup >= 26 && membersOfGroup <= 40) {
            allMembers += membersOfGroup;
            K2 += membersOfGroup;
        } else {
            allMembers += membersOfGroup;
            Everest += membersOfGroup;
        }
    }

    console.log(`${((Musala/allMembers)*100).toFixed(2)}%`);
    console.log(`${((Monblan/allMembers)*100).toFixed(2)}%`);
    console.log(`${((Kilimanjaro/allMembers)*100).toFixed(2)}%`);
    console.log(`${((K2/allMembers)*100).toFixed(2)}%`);
    console.log(`${((Everest/allMembers)*100).toFixed(2)}%`);
}
solve(["5", "25", "41", "31", "250", "6"]);