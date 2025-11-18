export class library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
    this.books.push(book);
    }

    removeBook(book){
    this.books = this.books.filter(book => book.id !== id);
    }

    findBook(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase())
    );
    }
    listBooks() {
        return this.books.map(book => book.getInfo());
    };
}

//Är removeBook , findBook osv. om man har en input osv?