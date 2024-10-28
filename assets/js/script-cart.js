document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(item => {
        const removeButton = item.querySelector('.remove-item');

        removeButton.addEventListener('click', () => {
            // Remove o item do carrinho
            item.remove();
            // Atualiza o total
            updateTotal();
        });
    });

    // Atualiza o total ao carregar a página
    updateTotal();
});

// Função para atualizar o total
function updateTotal() {
    const items = document.querySelectorAll('.cart-item');
    let total = 0;

    items.forEach(item => {
        const priceElement = item.querySelector('.total-price');
        const priceText = priceElement.textContent.replace('R$', '').replace(',', '.').trim();
        total += parseFloat(priceText);
    });

    const totalElement = document.querySelector('h2');
    totalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}
