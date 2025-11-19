export class book {
    //Vad boken ska beskrivas finns inom parantesen. Constructor samlar data som sedan används i objekten. Data är egenskaper som hör till objekten.
    constructor(title, author, year, id) { 
        this.title = title;
        this.author = author;
        this.year = year;
        this.id = Math.random().toString(36).slice(2);

        //Alla this är egenskaper i objektet
        //När vi i script.js gör en new Book, så körs constructorn, och this pekar på vilka nya objekt som ska skapas.
    }


    //var kommer denna ifrån?
    getInfo() {
    return `${this.title} av ${this.author} (${this.year})`;
    }
}


// I en class, så skapar man en constructor som lagrar data. data visar vad för egenskaper ett objekt har. Objekterna skapas genom 'new'. (?)