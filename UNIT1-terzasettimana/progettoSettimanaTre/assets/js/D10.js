/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

function somma(num1, num2) {
  return num1 + num2;
}
const sum = somma(10, 20);

console.log("***ESERCIZIO A***");
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21)

console.log("***ESERCIZIO B***");
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/


const me = {
  name: "Stefano",
  surname: "Fortezza",
  age: 25
}

console.log("***ESERCIZIO C***");
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log("***ESERCIZIO D***");
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Html", "Css", "JavaScript"];


console.log("***ESERCIZIO E***");
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("ANGULAR");

console.log("***ESERCIZIO F***");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log("***ESERCIZIO G***");
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/


function dice() {
  return Math.floor(Math.random() * 7);
}

console.log("***ESERCIZIO 1***");
const numeroRandom = dice();
console.log(numeroRandom);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return (num2);
  }
}

console.log("***ESERCIZIO 2***");
console.log(whoIsBigger(15, 11));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa) {
  return stringa.split(" ");
}
const stringa = "Ciao io sono Stefano Fortezza";
array = splitMe(stringa);

console.log("***ESERCIZIO 3***");
console.log(array);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(stringa, booleano) {
  if (booleano = true) {
    return stringa.substring(1);
  } else {
    return stringa.substring(0, stringa.length - 1);
  }
}
risultato = deleteOne("CIAO EPICODE");

console.log("***ESERCIZIO 4***");
console.log(risultato);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa2) {
  return stringa2.replace(/\d/g, '');
}
ritorno = onlyLetters("2Io vivo a 4 Catania");

console.log("***ESERCIZIO 5***");
console.log(ritorno);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

risultato = isThisAnEmail("stefano@f.it");

console.log("***ESERCIZIO 6***");
console.log(risultato);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

giorniDellaSettimana = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedì", "Venerdì", "Sabato"];

function whatDayIsIt() {
  oggi = new Date().getDay();
  return giorniDellaSettimana[oggi];
}

oggi = whatDayIsIt();
console.log("***ESERCIZIO 7***");
console.log(oggi);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numero) {
  let values = [];
  let sum = 0;

  for (let i = 0; i < numero; i++) {
    let value = dice();
    values.push(value);
    sum += value;
  }
  return {
    sum: sum,
    values: values
  };
}

const estratto = rollTheDices(5);

console.log("***ESERCIZIO 8***");
console.log(estratto);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date) {
  howManyDays = new date() - new date(date);
}

console.log("***ESERCIZIO 9***");


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  oggi = new Date();
  const giornoCorrente = oggi.getDate();
  var meseCorrente = oggi.getMonth() + 1;
  const giornoCompleanno = 9;
  const meseCompleanno = 2;
  return giornoCorrente === giornoCompleanno && meseCorrente === meseCompleanno;
}

compleanno = isTodayMyBirthday();

console.log("***ESERCIZIO 10***");
console.log(compleanno);

// Arrays & Oggetti
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/


function deleteProp(oggetto) {
  movies.push(oggetto);
}

deleteProp(oggetto = { testo: "testo eliminato" });
console.log("***ESERCIZIO 11***");
console.log(movies);

movies.pop();

console.log("***ESERCIZIO 11/A***");
console.log(movies);


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {
  if (movies.length === 0) {
    return null;
  }

  let newest = movies[0];
  for (let i = 1; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(newest.Year)) {
      newest = movies[i];
    }
  }
  return newest;
}

const filmRecente = newestMovie(movies);

console.log("***ESERCIZIO 12***");
console.log(filmRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {
  return movies.length;
}

const numeroFilm = countMovies(movies);

console.log("***ESERCIZIO 13***");
console.log(numeroFilm);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {
  let years = movies.map(function (movie) {
    return movie.Year;
  });
  return years;
}

console.log("***ESERCIZIO 14***");
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies) {
  let somma = 0;

  for (let i = 0; i < movies.length; i++) {
    somma += parseInt(movies[i].Year);
  }

  return somma;
}

console.log("***ESERCIZIO 16***");
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/


function searchByTitle(movies, nomeProprietà, nomeDaCercare) {
  return movies.filter(Object => Object[movies.Title] === nomeDaCercare);
}

const nomeDaCercare = "Avengers";
const cerca = searchByTitle(movies, nomeDaCercare);

console.log("***ESERCIZIO 17***");
console.log(cerca);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function seleziona() {
  return document.getElementById("container");
}

console.log("***ESERCIZIO 20***");
console.log(seleziona());
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selezionaTag() {
  return document.querySelectorAll("td");
}


console.log("***ESERCIZIO 21***");
selezionaTag();
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampa() {
  const lista = document.getElementsByTagName("td");
  for (i = 0; i < lista.length; i++) {
    console.log(lista[i].innerHTML)
  }
}

console.log("***ESERCIZIO 22***");
stampa();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function background() {
  links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
}

console.log("***ESERCIZIO 23***");
background();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungi() {
  myList = document.createElement("li");
  myList.textContent = "PROVA 7";
  const lista = document.getElementById("myList");
  lista.appendChild(myList);
}

console.log("***ESERCIZIO 24***");
aggiungi();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuolaLista() {
  const lista = document.getElementById("myList");
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

console.log("***ESERCIZIO 25***");
// svuolaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasse() {
  const elementiTr = document.getElementsByTagName("tr");
  for (let i = 0; i < elementiTr.length; i++) {
    elementiTr[i].classList.add("test");
  }
}

console.log("***ESERCIZIO 26***");
aggiungiClasse();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/


console.log("***ESERCIZIO 27***");

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log("***ESERCIZIO 28***");

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(numero) {
  if (numero <= 1) {
      return false;
  }

  for (let i = 2; i <= numero; i++) {
      if (numero !== i && numero % i === 0) {
          return false;
      }
  }
  return true;
}

console.log("***ESERCIZIO 29***");
console.log(isItPrime(11));