const apiKey = "TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5";

//CARICAMENTO IMMAGINI DAL BUTTON LOADIMAGINE
const loadImagesButton = document.getElementById('load-images');
loadImagesButton.addEventListener('click', () => {
    fetch('https://api.pexels.com/v1/search?query=mountain', {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Estrai le URL delle immagini dai dati della risposta
            const imageUrls = data.photos.map(photo => photo.src.large);

            // Seleziona tutte le card
            const cards = document.querySelectorAll(".card");

            // Per ogni card, aggiorna l'immagine
            cards.forEach((card, index) => {
                // Seleziona l'immagine nella card corrente
                const cardImage = card.querySelector(".card-img-top");
                // Aggiorna l'attributo src dell'immagine con un'immagine dalla lista
                cardImage.src = imageUrls[index % imageUrls.length];

                // Seleziona il pulsante "Edit" nella card corrente
                const editButton = card.querySelector("#edit");
                // Cambia il testo del pulsante da "Edit" a "Hide"
                editButton.textContent = "Hide";

                // Seleziona l'elemento small nella card corrente
                const timeElement = card.querySelector('.text-muted');
                // Ottieni l'ID dell'immagine corrente dall'URL
                const imageUrl = imageUrls[index % imageUrls.length];
                const imageId = imageUrl.split('/').pop().split('.')[0]; // Otteniamo solo il numero dell'ID eliminando il testo non numerico
                // Aggiorna il testo con l'ID dell'immagine
                timeElement.textContent = imageId;
                editButton.addEventListener("click", function () {
                    // Seleziona il genitore della card e rimuovilo
                    card.parentNode.remove();
                });
            });

        })
        .catch(error => {
            console.error("Errore durante la richiesta API:", error);
        });
});

//CARICAMENTO IMMAGINI DAL BUTTON LOAD SECONDARY IMAGINE

const loadSecondaryImagesButton = document.getElementById('load-secondary-images');
loadSecondaryImagesButton.addEventListener('click', () => {
    fetch('https://api.pexels.com/v1/search?query=sunset', {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Estrai le URL delle immagini dai dati della risposta
            const imageUrls = data.photos.map(photo => photo.src.large);

            // Seleziona tutte le card
            const cards = document.querySelectorAll(".card");

            // Per ogni card, aggiorna l'immagine
            cards.forEach((card, index) => {
                // Seleziona l'immagine nella card corrente
                const cardImage = card.querySelector(".card-img-top");
                // Aggiorna l'attributo src dell'immagine con un'immagine dalla lista
                cardImage.src = imageUrls[index % imageUrls.length];

                // Seleziona il pulsante "Edit" nella card corrente
                const editButton = card.querySelector("#edit");
                // Cambia il testo del pulsante da "Edit" a "Hide"
                editButton.textContent = "Hide";

                // Seleziona l'elemento small nella card corrente
                const timeElement = card.querySelector('.text-muted');
                // Ottieni l'ID dell'immagine corrente dall'URL
                const imageUrl = imageUrls[index % imageUrls.length];
                const imageId = imageUrl.split('/').pop().split('.')[0]; // Otteniamo solo il numero dell'ID eliminando il testo non numerico
                // Aggiorna il testo con l'ID dell'immagine
                timeElement.textContent = imageId;

                // Aggiungi un evento click al pulsante "Hide"
                editButton.addEventListener("click", function () {
                    // Nascondi la card corrente quando viene cliccato il pulsante "Hide"
                    card.style.display = "none";
                });
            });
        })
        .catch(error => {
            console.error("Errore durante la richiesta API:", error);
        });
});

//CARICAMENTO IMMAGINI DAL BUTTON SEARCH 

document.addEventListener('DOMContentLoaded', function () {
    // Aggiungi un gestore di eventi al pulsante di ricerca
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function () {
        // Ottieni il valore del campo di ricerca
        const searchQuery = document.getElementById('searchInput').value.trim();
        // Se il campo di ricerca è vuoto, esci dalla funzione
        if (!searchQuery) return;

        // Effettua la ricerca di immagini con la query specificata
        fetch(`https://api.pexels.com/v1/search?query=${searchQuery}`, {
            headers: {
                Authorization: apiKey
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Estrai le URL delle nuove immagini dai dati della risposta
                const imageUrls = data.photos.map(photo => photo.src.large);

                // Seleziona tutte le card
                const cards = document.querySelectorAll(".card");

                // Per ogni card, aggiorna l'immagine
                cards.forEach((card, index) => {
                    // Seleziona l'immagine nella card corrente
                    const cardImage = card.querySelector(".card-img-top");
                    // Aggiorna l'attributo src dell'immagine con un'immagine dalla lista
                    cardImage.src = imageUrls[index % imageUrls.length];
                    // Seleziona il pulsante "Edit" nella card corrente
                    const editButton = card.querySelector("#edit");
                    // Cambia il testo del pulsante da "Edit" a "Hide"
                    editButton.textContent = "Hide";
                    // Seleziona l'elemento small nella card corrente
                    const timeElement = card.querySelector('.text-muted');
                    // Ottieni l'ID dell'immagine corrente dall'URL
                    const imageUrl = imageUrls[index % imageUrls.length];
                    const imageId = imageUrl.split('/').pop().split('.')[0]; // Otteniamo solo il numero dell'ID eliminando il testo non numerico
                    // Aggiorna il testo con l'ID dell'immagine
                    timeElement.textContent = imageId;
                    // Aggiungi un evento click al pulsante "Hide"
                    editButton.addEventListener("click", function () {
                        // Nascondi la card corrente quando viene cliccato il pulsante "Hide"
                        card.style.display = "none";
                    });
                });
            })
            .catch(error => {
                console.error("Errore durante la richiesta API:", error);
            });
    });
});
