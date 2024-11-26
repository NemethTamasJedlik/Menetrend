export default class Vonat {
    vonatAzonosító: number;
    állomásAzonosító: number;
    óra: number;
    perc: number;
    típus: "I" | "E"; // I - Indulás, E - Érkezés

    constructor(vonatAzonosító: number, állomásAzonosító: number, óra: number, perc: number, típus: "I" | "E") {
        this.vonatAzonosító = vonatAzonosító;
        this.állomásAzonosító = állomásAzonosító;
        this.óra = óra;
        this.perc = perc;
        this.típus = típus;
    }
    getIdőpont(): number {
        return this.óra * 60 + this.perc;
    }
}