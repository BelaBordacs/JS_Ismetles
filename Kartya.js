export default class Kartya {

    /* függvény, amivel az 1. kutya adatait írhatjuk ki a tartalom nevű class-ba divben legyen, 
    a név, h3-as címben a kor p, nem p tag-ben*/

#kutya={} //Privát adattag lett


constructor(kutya, szuloElem){
        /* Inicializálja az adattagokat a konstruktor */
        this.#kutya = kutya
        this.szuloElem = szuloElem
        this.#egyKutyaKiiras()
        this.gombElem = $(".kivalaszt:last")   
        this.#esemenyKezelo()
}


#esemenyKezelo(){
    // eseménykezelő a gombokhoz -> kattintással történjen valami
    
    this.gombElem.on("click", ()=>{
        console.log(event.target) // az az elem ami kiváltotta az eseményt
    })
}

    /* Tagfüggvény */
    #egyKutyaKiiras(){

        this.szuloElem.append(`<div class ="col-lg-4 col-md-6 card">
                            <div class="card-body">
                                <h3 class="card-title">${this.#kutya.nev}</h3> 
                                <p class="card-text">kor: ${this.#kutya.kor}</p>
                                <p class="card-text">nem: ${this.#kutya.nem}</p> 
                                <button type="button" class="kivalaszt btn btn-light">Örökbefogad</button>   
                            </div>
                        </div>`)    

        }

    //listával adjuk meg

}