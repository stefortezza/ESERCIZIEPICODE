const numeri = []; //ARRAY GENERALE CONTENTENTE I NUMERI CHE VANNO DA 1 A 90

//FUNZIONE CHE CREA LA TABELLA E INSERISCE ALL'INTERNO L'ARRAY NUMERI CONTENENTE I NUMERI;

document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.querySelector("#Numeri");
    const numeriSelezionati = [];
    for (let i = 0; i < 9; i++) {
        let riga = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let numeri = (i * 10) + j + 1;
            let cella = document.createElement("td");
            cella.textContent = numeri;
            if (Math.random()) {
                numeriSelezionati.push(numeri);
            } else if (numeri.lenght === 0) {
                alert("Tutti i numeri sono stati estratti!");
                return;
            }
            riga.appendChild(cella);
        }
        tableBody.appendChild(riga);
    }
});

const numeriEstratti = []; //ARRAY PER TENERE TRACCIA DEI NUMERI GIA' ESTRATTI CON LA FUNZIONE RANDOM


//FUNZIONE PER ESTRARRE UN NUMERO IN MANIERA RANDOM SENZA CHE LA RIPETA DUE VOLTE LO STESSO NUMERO
function estraiNumero() {
    let numeri;
    do {
        numeri = Math.floor(Math.random() * 90) + 1;
    } while (numeriEstratti.includes(numeri));
    numeriEstratti.push(numeri);
    document.getElementById("numeroEstratto").textContent = numeri;
}

//FUNZIONE PER COLORARE UNA CELLA DOPO CHE E' USCITO IL SUO NUMERO

function coloracella() {
    let cella = document.getElementById("estraiNumero").textContent = estraiNumero;
    cella.classList.add("highlight");
}

coloracella();