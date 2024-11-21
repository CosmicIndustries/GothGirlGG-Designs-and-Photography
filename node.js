const stripe = require('stripe')('your_stripe_secret_key');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: 'Custom Design' },
          unit_amount: 5000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com/cancel',
  });

  res.json({ url: session.url });
});

app.listen(4242, () => console.log('Server running on port 4242'));
