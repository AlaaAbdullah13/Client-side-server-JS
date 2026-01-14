class Book {
    constructor(title, numOfChapters, author, numOfPages, publisher, numOfCopies) {
        this.title = title;
        this.numOfChapters = numOfChapters;
        this.author = author;
        this.numOfPages = numOfPages;
        this.publisher = publisher;
        this.numOfCopies = numOfCopies;
    }
}


class Box {
    constructor(height, width, length, material) {
        this.height = height;
        this.width = width;
        this.length = length;
        this.material = material;
        this.content = [];             
        this.numOfBooks = 0;
        this.volume = height * width * length;
    }

    countBooks() {
        return this.numOfBooks;
    }

    addBook(book) {
        this.content.push(book);
        this.numOfBooks++;
    }

    deleteBook(value) {
        this.content = this.content.filter(
            book => book.title !== value && book.author !== value
        );
        this.numOfBooks = this.content.length;
    }

    toString() {
        return `
        Box Dimensions:
        Height: ${this.height}
        Width: ${this.width}
        Length: ${this.length}
        Material: ${this.material}
        Volume: ${this.volume}
        Number of Books: ${this.numOfBooks}
        Books Stored: ${this.content.map(book => book.title).join(", ")}
        `;
    }

    
    valueOf() {
        return this.numOfBooks;
    }
}


let book1 = new Book("JavaScript", 10, "John", 400, "TechPress", 2);
let book2 = new Book("HTML", 8, "Sara", 300, "WebBooks", 1);
let book3 = new Book("CSS", 6, "Sara", 250, "WebBooks", 3);

let box1 = new Box(10, 5, 4, "Wood");
box1.addBook(book1);
box1.addBook(book2);

let box2 = new Box(8, 4, 3, "Plastic");
box2.addBook(book3);

console.log(box1.toString());
console.log(box2.toString());

console.log("Books in box1:", box1.countBooks());
console.log("Books in box2:", box2.countBooks());

console.log("Total books (box1 + box2):", box1 + box2);

box1.deleteBook("HTML");
console.log("After deleting HTML book:");
console.log(box1.toString());