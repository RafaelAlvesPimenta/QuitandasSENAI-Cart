const addproductbuttons = document.getElementsByClassName('adicionar')

for (var i = 0; i < addproductbuttons.length; i++) {
    addproductbuttons[i].addEventListener("click", addproductcart)

}


function addproductcart(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.querySelectorAll("img")[0].src
    const productTitle = productInfos.querySelectorAll("h3")[0].innerText
    const productPrice = productInfos.querySelectorAll("p")[0].innerText

    const product = {
        image: productImage,
        title: productTitle,
        price: productPrice,
        quantity: 1
    };


    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

}