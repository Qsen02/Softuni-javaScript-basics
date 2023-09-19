function solve(input) {
    let favoriteBook = input[0];
    let i = 1;
    let booksChecked = 0;
    let bookFound = false;
    let currentBook = input[i];
    while (currentBook !== "No More Books") {
        if (currentBook === favoriteBook) {
            bookFound = true;
            break;
        }
        booksChecked++;
        i++;
        currentBook = input[i];
    }
    if (bookFound === true) {
        console.log(`You checked ${booksChecked} books and found it.`)
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }
}
solve(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"
]);