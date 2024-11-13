# Menetrend

Németh Tamás (Tompesz)

Feladat:

Menetrend
Az ország keleti felében évekkel ezelőtt bevezették az ütemes menetrendet. Ez azt jelenti,
hogy a végállomásról minden órában ugyanakkor indulnak a vonatok és menetrend szerint
minden állomásra ugyanakkor érkeznek. A jól tervezhető utazás miatt nőtt az utazók száma.
A vonat.txt fájlban rögzítették a Szeged-Budapest vonal néhány vonatának indulási és
érkezési adatait. A fájl soraiban öt, tabulátorral elválasztott érték található, négy egész szám és
egy karakter. Az első szám a vonatazonosító, a második az állomásazonosító, a harmadik és
negyedik egy időpont órája és perce. A karakter pedig azt jelzi, hogy a vonat az adott állomásra
érkezik (E) vagy éppen indul (I) a megadott időben.
A sorok száma legfeljebb 1000, a vonatok és az állomások azonosítója pedig egy 0 és 20
közötti egész szám. Az óra értéke 0 és 23, a perc 0 és 59 közötti érték. Az állomások 0-tól
távolság, a vonatok 1-től indulási idő szerint növekvően sorszámozottak, minden értéket
felvesznek.
A fájl a vonatok tényleges útját rögzíti. Az adatok időrendben szerepelnek, azon belül pedig
– az induló állomás kivételével – az érkezés mindig megelőzi az indulást. Tudjuk, hogy minden
vonat a 0. állomásról indul, és eléri a végállomást, közben minden állomáson megáll, és egyik
vonat sem előzi meg a másikat.
Az első sorból leolvasható, hogy a 2. vonat a kiinduló állomásról 6 óra 45 perckor indul.
A következő sorban pedig az szerepel, hogy az 1. vonat 6 óra 49 perckor érkezik a 4. állomásra.
Készítsen programot, amely a vonat.txt állomány adatait felhasználva az alábbi
kérdésekre válaszol! A program forráskódját mentse menetrend néven! (A program
megírásakor a felhasználó által megadott adatok helyességét, érvényességét nem kell
ellenőriznie, feltételezheti, hogy a rendelkezésre álló adatok a leírtaknak megfelelnek.)
A képernyőre írást igénylő részfeladatok eredményének megjelenítése előtt írja a képernyőre
a feladat sorszámát (például: 5. feladat)! Ha a felhasználótól kér be adatot, jelenítse meg
a képernyőn, hogy milyen értéket vár! Az ékezetmentes kiírás is elfogadott.
1. Olvassa be és tárolja el a vonat.txt fájl tartalmát!
2. Írja a képernyőre a fájlban tárolt vonatok és állomások darabszámát – a kezdő és
végállomást is beleértve!
3. Határozza meg, hogy melyik állomáson állt legtöbbet vonat! Adja meg a vonat és az állomás
azonosítóját, valamint az állás idejét! Ha több ilyen volt, elég csak az egyiket megadnia.
4. Olvassa be egy vonat azonosítóját, valamint egy időpont óra és perc értékét! A későbbi
feladatokban használja ezeket!
5. Ezen a vonalon az előírt menetidő 2 óra 22 perc. Írja a képernyőre, hogy a beolvasott
azonosítójú vonat hány perccel tért el ettől! Például: „A(z) 5. vonat útja 2 perccel rövidebb
volt az előírtnál.”, „A(z) 5. vonat útja pontosan az előírt ideig tartott.” vagy „A(z) 5. vonat
útja 3 perccel hosszabb volt az előírtnál.”
6. Írja a haladX.txt fájlba, hogy a beolvasott azonosítójú vonat melyik állomásra mikor
érkezett! A fájlnévben az X helyére a beolvasott vonatazonosító kerüljön!
7. Adja meg, hogy a beolvasott időpontban úton lévő, azaz a már elindult, de a végállomást
még el nem érő vonatok közül melyik hol tartott! A tesztelés során a következő időpontokra
érdemes figyelni: 6:50, 8:45, 9:05, 10:04, 10:20. 
