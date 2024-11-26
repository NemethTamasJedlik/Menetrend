import fs from "fs";
import Vonat from "./Vonat";

export default class Megoldás {
    #vonatok: Vonat[] = [];

    constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(sor => {
                const aktSor: string = sor.trim();
                if (aktSor.length > 0) {
                    const [vonatAzonosító, állomásAzonosító, óra, perc, típus] = aktSor.split("\t").map(Number);
                    this.#vonatok.push(new Vonat(vonatAzonosító, állomásAzonosító, óra, perc, típus === 0 ? "I" : "E"));
                }
            });
    }

    //2. feladat
    get állomásokSzáma(): number {
        const állomások = new Set(this.#vonatok.map(v => v.állomásAzonosító));
        return állomások.size;
    }
    get vonatokSzáma(): number {
        const vonatok = new Set(this.#vonatok.map(v => v.vonatAzonosító));
        return vonatok.size;
    }

    //3. feladat
    get legtöbbetÁllóVonat(): { vonatAzonosító: number; állomásAzonosító: number; állásIdő: number } {
        let maxÁllásIdő = 0;
        let vonatAzonosító = -1;
        let állomásAzonosító = -1;

        for (let i = 0; i < this.#vonatok.length; i++) {
            const vonat = this.#vonatok[i];
            if (vonat.típus === "E") {
                const indulás = this.#vonatok.find(v => v.vonatAzonosító === vonat.vonatAzonosító && v.típus === "I" && v.állomásAzonosító === vonat.állomásAzonosító);
                if (indulás) {
                    const állásIdő = vonat.getIdőpont() - indulás.getIdőpont();
                    if (állásIdő > maxÁllásIdő) {
                        maxÁllásIdő = állásIdő;
                        vonatAzonosító = vonat.vonatAzonosító;
                        állomásAzonosító = vonat.állomásAzonosító;
                    }
                }
            }
        }
        return { vonatAzonosító, állomásAzonosító, állásIdő: maxÁllásIdő };
    }

    //5. feladat
    ellenőrizdMenetidőt(vonatAzonosító: number, óra: number, perc: number): string {
        const menetidő = 2 * 60 + 22;
        const vonat = this.#vonatok.filter(v => v.vonatAzonosító === vonatAzonosító);

        let összPerc = 0;
        for (let i = 0; i < vonat.length - 1; i++) {
            const tippIdő = vonat[i].getIdőpont();
            const következőIdő = vonat[i + 1].getIdőpont();
            összPerc += következőIdő - tippIdő;
        }

        const eltérés = összPerc - menetidő;
        if (eltérés < 0) {
            return `A(z) ${vonatAzonosító} vonat útja ${-eltérés} perccel rövidebb volt az előírtnál.`;
        } else if (eltérés === 0) {
            return `A(z) ${vonatAzonosító} vonat útja pontosan az előírt ideig tartott.`;
        } else {
            return `A(z) ${vonatAzonosító} vonat útja ${eltérés} perccel hosszabb volt az előírtnál.`;
        }
    }

    //6. feladat
    írásFájlba(vonatAzonosító: number): void {
        const vonat = this.#vonatok.filter(v => v.vonatAzonosító === vonatAzonosító);
        const fájlTartalom = vonat.map(v => `${v.állomásAzonosító}. állomás: ${v.óra}:${v.perc}`).join("\n");
        fs.writeFileSync(`halad${vonatAzonosító}.txt`, fájlTartalom);
    }

    //7. feladat
    vonatokÚton(vonatAzonosító: number, óra: number, perc: number): string {
        const kérdezettIdő = new Vonat(0, 0, óra, perc, "I").getIdőpont();
        const állapotok: string[] = [];

        for (let i = 0; i < this.#vonatok.length; i++) {
            const vonat = this.#vonatok[i];
            if (vonat.vonatAzonosító === vonatAzonosító && vonat.típus === "I") {
                const érkezésIdő = vonat.getIdőpont();
                if (érkezésIdő > kérdezettIdő) {
                    állapotok.push(`A(z) ${vonat.vonatAzonosító} vonat a(z) ${vonat.állomásAzonosító} állomásra tart.`);
                }
            }
        }
        return állapotok.join("\n");
    }
}
