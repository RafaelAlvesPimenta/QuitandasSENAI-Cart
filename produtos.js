document.getElementById('categoria').addEventListener('change', function() {
    const categoria = this.value;
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        if (categoria === 'todos' || produto.getAttribute('data-categoria') === categoria) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
});

const adicionarButtons = document.querySelectorAll('.adicionar');
adicionarButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Produto adicionado ao carrinho!');
    });
});