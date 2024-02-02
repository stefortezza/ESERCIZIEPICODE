/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']


console.log("***ESERCIZIO 1***");
pets.forEach(pet => console.log(pet));

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const petsOrdinati = pets.sort();

console.log("***ESERCIZIO 2***");
console.log(petsOrdinati);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const petsInvertiti = petsOrdinati.reverse();

console.log("***ESERCIZIO 3***");
console.log(petsInvertiti);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const primoPets = pets.shift();
pets.push(primoPets);

console.log("***ESERCIZIO 4***");
console.log (pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const licensePlateValue = "GD831XA";
cars.forEach (car => {
  car.licensePlate = licensePlateValue;
});

console.log("***ESERCIZIO 5***");
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const nuovaCars = {
  brand: 'Audi',
  model: 'A5',
  color: 'black',
  trims: ['life', 'style', 'r-line']
};
cars.push(nuovaCars);
cars.forEach (car => {
  car.trims.pop();
});

console.log("***ESERCIZIO 6***");
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []
 cars.forEach (car => {
  if (car.trims.length > 0){
    justTrims.push(car.trims[0]);
  }
 });

console.log("***ESERCIZIO 7***");
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("***ESERCIZIO 8***");

cars.forEach( car => {
  if (car.color.charAt(0).toLowerCase() === "b" ) {
    console.log("Frizz");
  }else {
    console.log("Buzz");
  }
});


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let index=0;
console.log("***ESERCIZIO 9***");
while (index < numericArray.length && numericArray[index] <=32) {
  console.log(numericArray[index]);
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd', "1"]
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const positions = charactersArray.map(char => {
  const indice = alphabet.indexOf(char.toLowerCase()) + 1;

  switch (indice) {
    case 1:
      return 1;
    case 21:
      return 21;
    case 0: // Carattere non trovato
      return null;
    default:
      return indice;
  }
});

console.log("***ESERCIZIO 10***");
console.log(positions);