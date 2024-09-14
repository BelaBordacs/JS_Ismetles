//függvényben a kiírás

export function cimKiiras(cim){


    // header h1-ben írjuk ki a címet
    //h1 taget megfogjuk
    // javascript kód hozzá: const h1Elem = document.querySelector("header")
    // h1Elem.innerHTML += <p>"+cim"+</p>
    //h1-be ne rakjunk p tag-et
    const h1Elem = $("header")
    console.log(h1Elem)
    //h1Elem.append("<p>" + cim + "</p>") kicsit rosszabb megoldás
    h1Elem.append(`<p> ${cim} </p>`)
}


/* függvény, amivel az 1. kutya adatait írhatjuk ki a tartalom nevű class-ba divben legyen, 
a név, h3-as címben a kor p, nem p tag-ben*/

export function egyKutyaKiiras(kutya){
    const divElem = $(".tartalom")
    divElem.append(`<div class ="col-lg-4 col-md-6 card">
                        <div class="card-body">
                            <h3 class="card-title">${kutya.nev}</h3> 
                            <p class="card-text">kor: ${kutya.kor}</p>
                            <p class="card-text">nem: ${kutya.nem}</p> 
                            <button type="button" class="kivalaszt btn btn-light">Örökbefogad</button>   
                        </div>
                    </div>`)    

    }

//listával adjuk meg



