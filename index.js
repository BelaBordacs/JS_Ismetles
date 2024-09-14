import { kutyaLista } from "./adatok.js";
import Kartyak from "./Kartyak.js";

/*let nev = "Dézi";
const cim = "Kutyák minden mennyiségben";*/

// objektum -> összetett adatszerkezetek esetén
// egy kutya adata
// const-al az objektum sem változtatató, csak a benne lévő adatok, 

// objektum - név = {nev : "Valami"}
//ilyenkor fix memóriacím van hozzárendelve --> kutya1.nev = "JEnő" megfelelő
// mobulos script szerkezet miatt elengedhető 

/* const kutya1 = {
    nev: "Floki",
    kor: 12,
    nem: "kan"
}

const kutya2 ={
    nev: "Dézi",
    kor: 2,
    nem: "nőstény"
} */

/* kutya1.nev = "Jenő" */

/* console.log("Az első kutya: ", kutya1, kutya1.nev)
console.log("A második kutya: ", kutya2)
console.log("Cím: ", cim) */

// lista - név = [1,2,3]
// csak azonos típusú adatok lehetnek
//const-al hozzk létre, hogy ne tudjuk a teles elemet felülírni, az elemek változtathatók ettől

/*const nevlista = ["Dézi", "Jenő", "Béla"]
const szamlista = [5, 3,4,23,-34.2]
nevlista[0] = "Floki"
console.log(nevlista)
cimKiiras(cim)*/

const kivalasztottLista=[];
const divElem = $(".tartalom")
const kivElem = $(".kivalasztottak")

new Kartyak(kutyaLista, divElem)

/* másik megoldás: 
for (let index = 0; index < kutyaLista.length; index++) {
    egyKutyaKiiras(kutyaLista[index])
} */



// melyik kártyára kattintottunk? Az adatait tegyük bele a listába
/*ha el akarunk érni privát adattagot: 
1. getter az osztályban
Meg kell íni a gettert
A probblémáa -> gettert akkor kéne meghívni, ha rákattintunk a gombra.
feliratkozunk a saját eseményünkre
*/
$(window).on("kivalaszt",(event)=>{
    console.log(event.detail) //event.detail - ezt adtamá át a saját eseménynél, az adott kártyához tartozó kutya adata
    kivalasztottLista.push(event.detail)
    console.log(kivalasztottLista)
    new Kartyak(kivalasztottLista, kivElem)
})

