export class book {
    constructor(title, author, year, id) { //Vad boken ska beskrivas finns inom parantesen
        this.title = title;
        this.author = author;
        this.year = year;
        this.id = Math.random().toString(36).slice(2);
    }

    getInfo() {
    return `${this.title} av ${this.author} (${this.year})`;
    }
}