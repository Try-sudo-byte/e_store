// Пример данных товаров (в реальности данные будут получены с сервера)
const products = [
    { id: 1, name: "Товар 1", price: 99.99 },
    { id: 2, name: "Товар 2", price: 49.99 },
];

// Инициализация корзины и отображение товаров
const cart = document.getElementById("cart");
const totalElement = document.getElementById("total-price");

function displayCart() {
    cart.innerHTML = ""; // Очистить корзину перед обновлением

    let totalPrice = 0;

    products.forEach((product) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        const itemName = document.createElement("h2");
        itemName.textContent = product.name;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Цена: $${product.price.toFixed(2)}`;

        const addButton = document.createElement("button");
        addButton.classList.add("add-button");
        addButton.textContent = "Добавить в корзину";

        addButton.addEventListener("click", () => {
            // Добавить товар в корзину (логика добавления будет здесь)
            alert(`Товар "${product.name}" добавлен в корзину.`);
            totalPrice += product.price;
            totalElement.textContent = `$${totalPrice.toFixed(2)}`;
        });

        cartItem.appendChild(itemName);
        cartItem.appendChild(itemPrice);
        cartItem.appendChild(addButton);
        cart.appendChild(cartItem);
    });

    totalElement.textContent = `$${totalPrice.toFixed(2)}`;
}

displayCart();