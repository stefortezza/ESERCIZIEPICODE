document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const h1Element = document.querySelector('h1');

    const name = urlParams.get('name');
    const isEdit = name !== null;
    h1Element.textContent = isEdit ? "Edit Product" : "Add Product";

    const description = urlParams.get('description');
    const brand = urlParams.get('brand');
    const imageUrl = urlParams.get('imageUrl');
    const price = urlParams.get('price');

    document.getElementById('name').value = name;
    document.getElementById('description').value = description;
    document.getElementById('brand').value = brand;
    document.getElementById('imageUrl').value = imageUrl;
    document.getElementById('price').value = price;

    const deleteButton = document.getElementById('deleteButton');
    deleteButton.style.display = 'none';

    const resetButton = document.getElementById('resetButton');
    resetButton.style.display = isEdit ? 'none' : 'block';

    const saveButton = document.getElementById('saveButton');
    saveButton.textContent = isEdit ? 'Salva Modifiche' : 'Save';
    saveButton.addEventListener('click', function () {
        saveProduct(isEdit ? name : null);
    });

    if (isEdit) {
        deleteButton.style.display = 'block';
        deleteButton.addEventListener('click', function () {
            const confirmDelete = confirm('Sei sicuro di voler eliminare questo prodotto?');
            if (confirmDelete) {
                const savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];
                const updatedProducts = savedProducts.filter(product => product.name !== name);
                localStorage.setItem('savedProducts', JSON.stringify(updatedProducts));

                window.location.href = 'index.html';

                alert('Prodotto eliminato con successo!');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const h1Element = document.querySelector('h1');

    const name = urlParams.get('name');
    const isEdit = name !== null;
    h1Element.textContent = isEdit ? "Edit Product" : "Add Product";

    const description = urlParams.get('description');
    const brand = urlParams.get('brand');
    const imageUrl = urlParams.get('imageUrl');
    const price = urlParams.get('price');

    document.getElementById('name').value = name;
    document.getElementById('description').value = description;
    document.getElementById('brand').value = brand;
    document.getElementById('imageUrl').value = imageUrl;
    document.getElementById('price').value = price;

    const deleteButton = document.getElementById('deleteButton');
    deleteButton.style.display = 'none';

    const resetButton = document.getElementById('resetButton');
    resetButton.style.display = isEdit ? 'none' : 'block';

    const saveButton = document.getElementById('saveButton');
    saveButton.textContent = isEdit ? 'Salva Modifiche' : 'Save';
    saveButton.addEventListener('click', function () {
        saveProduct(isEdit ? name : null);
    });

    if (isEdit) {
        deleteButton.style.display = 'block';
        deleteButton.addEventListener('click', function () {
            const confirmDelete = confirm('Sei sicuro di voler eliminare questo prodotto?');
            if (confirmDelete) {
                const savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];
                const updatedProducts = savedProducts.filter(product => product.name !== name);
                localStorage.setItem('savedProducts', JSON.stringify(updatedProducts));

                window.location.href = 'index.html';

                alert('Prodotto eliminato con successo!');
            }
        });
    }
});

function saveProduct(productName) {
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const brand = document.getElementById('brand').value.trim();
    const imageUrl = document.getElementById('imageUrl').value.trim();
    const price = parseFloat(document.getElementById('price').value);

    if (name === '' || description === '' || brand === '' || imageUrl === '' || isNaN(price)) {
        alert('Per favore, compila tutti i campi obbligatori.');
        return;
    }

    const savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];

    if (productName) {
        const existingProductIndex = savedProducts.findIndex(product => product.name === productName);
        if (existingProductIndex !== -1) {
            savedProducts[existingProductIndex] = {
                name: name,
                description: description,
                brand: brand,
                imageUrl: imageUrl,
                price: price
            };
            localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
            alert('Prodotto modificato con successo!');
            window.location.href = 'index.html'; 
        } else {
            alert('Prodotto non trovato!');
        }
    } else {
        const existingProductIndex = savedProducts.findIndex(product => product.name === name);
        if (existingProductIndex === -1) {
            const product = {
                name: name,
                description: description,
                brand: brand,
                imageUrl: imageUrl,
                price: price
            };
            savedProducts.push(product);
            localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
            alert('Prodotto salvato con successo!');
            document.getElementById('productForm').reset();
            window.location.href = 'index.html';
        }
    }
}
