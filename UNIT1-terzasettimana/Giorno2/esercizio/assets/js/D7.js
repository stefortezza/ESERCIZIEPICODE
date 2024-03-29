/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const stringa1 = "epicode";
const stringa2 = "aaaico"
function concatenare(stringa1, stringa2) {

}

console.log("***ESERCIZIO 1***");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

const elementi = [];

for (i = 0; i < 10; i++) {
  let valoreRandom = Math.floor(Math.random() * 100)
  elementi.push(valoreRandom);
}

console.log("***ESERCIZIO 2***");
console.log(elementi);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const numeri = [2, 5, 7, 20, 12, 13];
const pari = valoriPari(numeri);

function valoriPari(numeri) {
  return numeri.filter(numeri => numeri % 2 === 0);
}

console.log("***ESERCIZIO 3***");
console.log(pari);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const risutlato = somma(arrayNumerico);

function somma(arrayNumerico) {
  let somma = 0;
  arrayNumerico.forEach(element => {
    somma += element;
  });
  return somma;
}

console.log("***ESERCIZIO 4***");
console.log(risutlato);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const arrayNumerico2 = [1, 2, 3, 4, 5];
const risutlato2 = somma(arrayNumerico2);

function somma(arrayNumerico2) {
  let somma = 0;
  for (i = 0; i < arrayNumerico2.length; i++) {
    somma += arrayNumerico2[i];
  }
  return somma;
}

console.log("***ESERCIZIO 5***");
console.log(risutlato2);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const soloNumeri = [1, 2, 3, 4, 5];
const incremento = 10;
const nuovoArray = soloNumeri.map((element) => {
  nuovoNumero = element + incremento;
  return nuovoNumero;
});

console.log("***ESERCIZIO 6***");
console.log(nuovoArray);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/



console.log("***ESERCIZIO 7***");

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

let arrayDispari = valoriDispari();

function valoriDispari() {
  let arrayDispari = [];
  for (let i = 1; i < 100; i += 2) {
    arrayDispari.push(i);
  }
  return arrayDispari;
}

function valoriDispari() {
  let arrayDispari = [];
  for (let i = 1; i < 100; i++) {
    if (i%2 !== 0 ) {
      arrayDispari.push(i);
    }
  }
  return arrayDispari;
}


console.log("***ESERCIZIO 8***");
console.log(arrayDispari);

//* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
	{
		Title: 'The Lord of the Rings: The Fellowship of the Ring',
		Year: '2001',
		imdbID: 'tt0120737',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/V75dMMIW2B4?si=6BTizbmgvCmt4en8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'The Lord of the Rings: The Return of the King',
		Year: '2003',
		imdbID: 'tt0167260',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/y2rYRu8UW8M?si=DrOfg6lLS0dMpQbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'The Lord of the Rings: The Two Towers',
		Year: '2002',
		imdbID: 'tt0167261',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/hYcw5ksV8YQ?si=breCKWHsCbCHDz0P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'Lord of War',
		Year: '2005',
		imdbID: 'tt0399295',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/AXgyoER0aRc?si=AdTJY0Doflf4wAER" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'Lords of Dogtown',
		Year: '2005',
		imdbID: 'tt0355702',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/AUjR4G4yNpY?si=t25YtYwyFFtZKwMi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'The Lord of the Rings',
		Year: '1978',
		imdbID: 'tt0077869',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/kMD16QImEBI?si=w-UdLYaIqsemTH5n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1990',
		imdbID: 'tt0100054',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/1nqycSp77MY?si=2FBpba6CLK3JIVJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'The Lords of Salem',
		Year: '2012',
		imdbID: 'tt1731697',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/Y606RoSur8o?si=aoQYG2XWTuNOjuoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
		Year: '1984',
		imdbID: 'tt0087365',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/qH_njBIZmN4?si=-X0PB3Msx-8C7_vP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1963',
		imdbID: 'tt0057261',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/1nqycSp77MY?si=2FBpba6CLK3JIVJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'The Avengers',
		Year: '2012',
		imdbID: 'tt0848228',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/eOrNdBpGMv8?si=Q_b4HuZQCHKAwExF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'Avengers: Infinity War',
		Year: '2018',
		imdbID: 'tt4154756',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/QwievZ1Tx-8?si=aPAFYEFY2PY1Z6J9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'Avengers: Age of Ultron',
		Year: '2015',
		imdbID: 'tt2395427',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/5xIdeeTKXcI?si=pU8xCLyJCOHI3bP_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
	{
		Title: 'Avengers: Endgame',
		Year: '2019',
		imdbID: 'tt4154796',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
		Trailer:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/vqWz0ZCpYBs?si=9rmit8rM0cqUZ70l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	},
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const elenco = document.getElementById('elenco');

movies.forEach(element => {
	let option = document.createElement('option');
	option.setAttribute('value', element.imdbID);
	option.innerText = element.Title;
	elenco.appendChild(option);
});

document.getElementById('scegli').addEventListener('click', function() {
	let imdbID = elenco.value;
	const filmScelto = movies.find((element) => {
		return element.imdbID === imdbID;
	});
	console.log(filmScelto);
	document.getElementById('titolo').innerText = filmScelto.Title;
	document.getElementById('anno').innerText = `Anno di produzione: ${filmScelto.Year}`;
	document.getElementById('locandina').innerHTML = `<img src="${filmScelto.Poster}" alt="locandina ${filmScelto.Title}" />`;
	document.getElementById('trailer').innerHTML = filmScelto.Trailer;
});

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/