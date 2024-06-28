document.addEventListener("DOMContentLoaded", function() {
    const basket = document.querySelector(".basket");
    const confirmPurchaseButton = document.querySelector(".confirm-purchase-button");

    function addToBasket(event) {
        const card = event.target.closest(".card");
        const imgSrc = card.querySelector(".card__img img").src;
        const price = card.querySelector(".card__price--discount").textContent;

        const basketItem = document.createElement("div");
        basketItem.className = "basket-item";

        const itemImg = document.createElement("img");
        itemImg.src = imgSrc;
        itemImg.className = "basket-item-img";
        itemImg.style.width = "150px"; 
        itemImg.style.height = "150px"; 

        const itemPrice = document.createElement("span");
        itemPrice.className = "basket-item-price";
        itemPrice.textContent = price;

        basketItem.appendChild(itemImg);
        basketItem.appendChild(itemPrice);

        basket.appendChild(basketItem);
    }

    const addToBasketButtons = document.querySelectorAll(".card__button");
    addToBasketButtons.forEach(button => {
        button.addEventListener("click", addToBasket);
    });

    confirmPurchaseButton.addEventListener("click", function() {
        if (basket.children.length === 0) {
            alert("Корзина пуста");
        } else {
            alert("Покупка успешна!");
            basket.innerHTML = ""; 
        }
    });
});
