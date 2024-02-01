/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let l1 = 6;
let l2 = 3;

function area(l1, l2) {
    return l1 * l2;
}
console.log(l1 * l2);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 2
let num2 = 3

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return (num1 + num2);
    }
}

console.log(crazySum(num1, num2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numfornito = 20;
let parametro = 19;

function crazyDiff(numfornito, parametro) {
    if (numfornito > 19) {
        return (numfornito) * 3 - parametro;
    } else {
        return numfornito - parametro;
    }
}

console.log(crazyDiff(numfornito, parametro));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = 100;

function boundary(n) {
    if (n >= 20 && n <= 100) {
        return "true";
    } else {
        return n = 400;
    }
}

console.log(boundary(n));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringa = "EPICODE Stefano"

function epify(stringa) {
    if (stringa.startsWith("EPICODE")) { 
        return stringa;
    } else {
        return "EPICODE " + stringa;
    }
}

console.log(epify(stringa));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numpositivo = -1;

function check3and7(numpositivo) {
    if (numpositivo < 0) {
        console.log("NUMERO NEGATIVO - NON ACCETTATO")
    } else if (numpositivo % 3 === 0 || numpositivo % 7 === 0) {
        console.log("NUMERO MULTIPLO DI 3 O DI 7");
    } else {
        console.log("IL NUMERO NON E' MULTIPLO DI 3 O DI 7");
    }
}

console.log(check3and7(numpositivo));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    return stringa.split("EDOCIPE").reverse().join("EPICODE");
}

console.log(reverseString(stringa));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringaNuova= "ciao sono Stefano";
function upperFirst (match) {
    return stringaNuova.replace(/\b \w/g, function (match) {
        return match.toUpperCase();
    });
}

console.log(upperFirst(stringaNuova));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
