document.querySelectorAll('.stripe-button').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-product-id');

    fetch('/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId })
    })
    .then(response => response.json())
    .then(data => {
      window.location.href = data.url;
    })
    .catch(error => console.error('Error:', error));
  });
});
