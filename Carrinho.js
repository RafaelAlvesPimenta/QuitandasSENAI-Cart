document.addEventListener("DOMContentLoaded", function() {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];


    const tbody = document.querySelector("tbody");

    cart.forEach(product => {
        let newCartProduct = document.createElement("tr");
        newCartProduct.classList.add("cart-product");

        newCartProduct.innerHTML = `
            <td class="td-product">
                <img src="${product.image}" alt="${product.title}" class="cart-img-product">
                <strong class="title-product-cart">${product.title}</strong>
            </td>
            <td>
                <span class="cart-product-price">${product.price}</span>
            </td>
            <td id="qtd-products">
                <input type="number" value="${product.quantity}" min="1" class="qtd-product-cart">
            </td>
            <td>
                            <button type="button" class="remove-product-cart">Remover</button>
            </td>
        `;


        tbody.appendChild(newCartProduct);


        const removeButton = newCartProduct.querySelector(".remove-product-cart");
        removeButton.addEventListener("click", function() {
            removeProductFromCart(product);
        });
    });



function removeProductFromCart(productToRemove) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(product => product.title !== productToRemove.title);

    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.reload();
    }


const qtdInputs = document.getElementsByClassName("qtd-product-cart");

for (let i = 0; i < qtdInputs.length; i++) {
    let valorSalvo = localStorage.getItem(`qtdInputs_${i}`);
    
    if (valorSalvo !== null) {
        qtdInputs[i].value = valorSalvo;
    }
    qtdInputs[i].addEventListener("input", function () {
        localStorage.setItem(`qtdInputs_${i}`, this.value);
    });
}




    for (var i = 0; i < qtdInputs.length; i++){
        qtdInputs[i].addEventListener("change", PriceTotal)
    }

    function PriceTotal() {
    let total = 0
    const cartProducts = document.getElementsByClassName("cart-product")
    for (var i = 0; i < cartProducts.length; i++) {
        const productqtd = cartProducts[i].getElementsByClassName("qtd-product-cart")[0].value
        const price_product = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".").replace("por", "").replace("Kg", "").replace("kg", "").replace("por", "").replace("unidade", "")
        total += productqtd * price_product;

        }
        total = total.toFixed(2)
        document.getElementById("span-total").innerText = "R$" + total;
    }


    const buttonCompra = document.getElementById("button-comprar")
    const buttonCancelarPagamento = document.getElementById("button-cancelar-compra")
    const buttonFormaPagamento = document.getElementsByClassName("button-pagamento")
    const closeWindowCompraF = document.getElementById("close-window-compraF")
    const pedidoAcaminho = document.getElementById("h4-PedidoaCaminho")


    const windowPagamento = document.getElementById("backend-window-compra")
    const windowCompraRealizada = document.getElementById("backend-window-compra-realizada")

    buttonCompra.addEventListener("click", function () {
        windowPagamento.style.display = "flex";
    })
    buttonCancelarPagamento.addEventListener("click", function () {
        windowPagamento.style.display = "none"
    })

    for (var i = 0; i < buttonFormaPagamento.length; i++) {
        buttonFormaPagamento[i].addEventListener("click", function () {
            windowPagamento.style.display = "none";
            windowCompraRealizada.style.display = "flex";
        })
    }

    closeWindowCompraF.addEventListener("click", function () {
        windowCompraRealizada.style.display = "none";
    })

    pedidoAcaminho.addEventListener("click", function () {
        windowCompraRealizada.style.display = "none";
    })

});