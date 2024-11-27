import Vonat from "../Vonat";

describe("Vonat osztály tesztek", () => {
    const instance = new Vonat(123, 456, 14, 30, "I");

    it("Vonat osztálypéldány ellenőrzése", () => {
        expect(instance).toBeInstanceOf(Vonat);
    });
    it("Vonat azonosító helyessége", () => {
        expect(instance.vonatAzonosító).toBe(123);
    });
    it("Állomás azonosító helyessége", () => {
        expect(instance.állomásAzonosító).toBe(456);
    });
    it("getIdőpont metódus helyessége", () => {
        expect(instance.getIdőpont()).toBe(870);
    });
    it("Típus helyessége (Indulás)", () => {
        expect(instance.típus).toBe("I");
    });
});
