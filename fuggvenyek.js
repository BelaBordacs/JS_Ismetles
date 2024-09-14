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






