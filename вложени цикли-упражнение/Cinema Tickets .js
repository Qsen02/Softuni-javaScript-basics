function solve(input) {
    let i = 0;
    let kidsTicket = 0;
    let studentTickets = 0;
    let standartTickets = 0;
    let totalTickets = 0;
    while (input[i] !== "Finish") {
        let filmName = input[i];
        i++;
        let spaces = Number(input[i]);
        let spacesCount = 0;
        i++;
        while (input[i] === "standard" ||
            input[i] === "kid" ||
            input[i] === "student" ||
            input[i] !== "End") {
            let ticketType = input[i];
            switch (ticketType) {
                case "standard":
                    totalTickets++;
                    spacesCount++;
                    standartTickets++;
                    break;
                case "kid":
                    totalTickets++;
                    spacesCount++;
                    kidsTicket++;
                    break;
                case "student":
                    totalTickets++;
                    spacesCount++;
                    studentTickets++;
                    break;
            }
            if (spacesCount >= spaces) {
                break;
            }
            i++;
        }
        console.log(`${filmName} - ${((spacesCount/spaces)*100).toFixed(2)}% full.`);
        if (input[i] !== "Finish") {
            i++;
        }
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets/totalTickets)*100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTickets/totalTickets)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTicket/totalTickets)*100).toFixed(2)}% kids tickets.`);
}
solve(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);