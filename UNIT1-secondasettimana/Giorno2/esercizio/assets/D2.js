/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1= 2;
let numero2= 8;

if (numero1<numero2) {
  valutazione= "il numero 2 è più grande del numero 1";
} else {
  valutazione= "il numero 1 è più grande del numero 2";
}
console.log (valutazione);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero3= 5;

if (numero3 ==5) {
  diverso= "il numero è uguale a 5";
} else {
  diverso= "il numero è diverso da 5";
}
console.log (diverso);


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero= 50;
let resto= numero % 5;
console.log (resto);

if (resto === 0) {
  resto= "divisibile per cinque";
} else {
  resto= "non divisibile per cinque";
}
console.log (resto);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart= 49;
let spedizione = 10;
if (totalShoppingCart <50) {
  totalShoppingCart= totalShoppingCart + spedizione;
} else {
  totalShoppingCart;
}
console.log (totalShoppingCart);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2= 65;
let sconto= (totalShoppingCart2 / 100) *20;
let totalShoppingCart3= totalShoppingCart2 - sconto;

if (totalShoppingCart3 <50) {
  totalShoppingCart3= totalShoppingCart3 + spedizione;
} else {
  totalShoppingCart3;
}
console.log (totalShoppingCart3);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a= 10;
let b= 30;
let c= 20;

const numeri= [a, b, c];
console.log (numeri);

prova= numeri.sort();
console.log (prova);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numerox= 10;

for (let i= 0; i <numerox; i++){
  if (numerox %2 === 0) {
    numerox= "numero pari";
  } else {
    numerox= "numero dispari";
  }
}
console.log (numerox);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 9
if (val < 5) {
  val= "Meno di 5";
} else if (val < 10) {
  val="Meno di 10";
} else {
  val="Uguale a 10 o maggiore";
}

console.log (val);

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

console.log (me);
/* SCRIVI QUI LA TUA RISPOSTA */

me.city= "Toronto";
console.log (me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log (me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const array = [];
console.log (array);

const nuovoArray= [1,2,3,4,5,6,7,8,9,10];
console.log (nuovoArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
nuovoArray [9] = 100;
console.log (nuovoArray);