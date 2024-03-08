document.addEventListener("DOMContentLoaded", function () {
    init();
    displayStoredProduct();
});

function init() {
    loadProductCards();
}

function loadProductCards() {
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
    if (savedProducts) {
        const productCardsContainer = document.getElementById("productCards");
        savedProducts.forEach(product => {
            const card = createProductCard(product);
            const productCardWrapper = document.createElement("div");
            productCardWrapper.classList.add("product-card-wrapper");
            productCardWrapper.appendChild(card);
            productCardsContainer.appendChild(productCardWrapper);
        });
    }
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("vertical-align");
    card.style.border = "1px solid black";

    const image = document.createElement("img");
    image.src = product.imageUrl;
    image.alt = product.name;
    image.style.maxWidth = "200px";
    card.appendChild(image);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.style.display = "flex";
    cardBody.style.flexDirection = "column";

    const productName = document.createElement("h5");
    const productNameBold = document.createElement("strong");
    productNameBold.textContent = product.name;
    productName.appendChild(productNameBold);
    cardBody.appendChild(productName);

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    cardBody.appendChild(productDescription);

    const editButton = document.createElement("button");
    editButton.textContent = "Modifica";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", () => {
        editProduct(product);
    });
    cardBody.appendChild(editButton);

    const discoverButton = document.createElement("button");
    discoverButton.textContent = "Scopri di più";
    discoverButton.classList.add("discover-button");
    discoverButton.addEventListener("click", () => {
        window.location.href = "dettagli.html";
    });
    cardBody.appendChild(discoverButton);

    card.appendChild(cardBody);

    return card;
}

function editProduct(product) {
    const queryString = `?name=${encodeURIComponent(product.name)}&description=${encodeURIComponent(product.description)}&brand=${encodeURIComponent(product.brand)}&imageUrl=${encodeURIComponent(product.imageUrl)}&price=${encodeURIComponent(product.price)}`;
    window.location.href = `form.html${queryString}`;
}
