'use strict'

const cart = document.querySelector('.cart');
const products = Array.from(document.querySelectorAll('.product'));

products.forEach(product => {
    const productQuantityControls = product.querySelector('.product__quantity-controls');
    const addToCartBtn = product.querySelector('.product__add');
    
    const productQuantityDec = productQuantityControls.querySelector('.product__quantity-control_dec');
    const productQuantityInc = productQuantityControls.querySelector('.product__quantity-control_inc');
    const productQuantity = productQuantityControls.querySelector('.product__quantity-value');
    
    productQuantityControls.addEventListener('click', (event) => {
        if (event.target == productQuantityDec && productQuantity.textContent >= 2) {
            productQuantity.textContent--;
        } else if (event.target == productQuantityInc) {
            productQuantity.textContent++;
        }
    });

    addToCartBtn.addEventListener('click', (event) => {
        const productId = product.getAttribute('data-id');
        const productInCart = document.createElement('div');
        productInCart.classList.add('cart__product');
        productInCart.setAttribute('data-id', productId);

        // здесь непонятно, как сделать проверку, есть ли такой продукт уже в корзине или нет
        if (product.productId !== productInCart.productId) {

            productInCart.innerHTML+= `
                <img class="cart__product-image" src="">
                <div class="cart__product-count">${productQuantity.textContent}</div>
            `;
            productInCart.querySelector('.cart__product-image').src = product.querySelector('.product__image').src;
            cart.querySelector('.cart__products').appendChild(productInCart);
        } else {
            productInCart.querySelector('.cart__product-count').textContent += productQuantity.textContent;
        }
        
    })
})