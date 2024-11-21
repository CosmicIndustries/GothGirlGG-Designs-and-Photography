const stripe = Stripe('your-publishable-key-here');

document.querySelectorAll('.stripe-button').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-product-id');
    fetch('/create-checkout-session', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId })
    })
    .then(res => res.json())
    .then(data => {
      return stripe.redirectToCheckout({ sessionId: data.sessionId });
    })
    .catch(error => console.error('Error:', error));
  });
});
