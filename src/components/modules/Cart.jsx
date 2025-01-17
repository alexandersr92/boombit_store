import { useEffect, useState } from 'react';
import { getCart } from '../../api/index.js';
import { Link } from 'react-router-dom';
export const Cart = (module) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const cartData = await getCart();
        setCart(cartData);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  if (!cart) {
    return <div>Loading...</div>;
  }

  const { items, totals, shipping, notices, currency } = cart;

  return (
    <div className='max-w-screen-lg mx-auto p-6'>
      <h1 className='text-4xl font-extrabold mb-8 text-center'>
        {module.title}
      </h1>

      {/* Success Notices */}
      {notices?.success?.length > 0 && (
        <div className='mb-6'>
          {notices.success.map((message, index) => (
            <div
              key={index}
              className='bg-green-50 border border-green-500 text-green-800 p-4 rounded-lg mb-2'
            >
              {message}
            </div>
          ))}
        </div>
      )}

      {/* Cart Items */}
      {items.length > 0 ? (
        <div className='space-y-6'>
          {items.map((item) => (
            <div
              key={item.item_key}
              className='flex items-center justify-between border-b pb-4'
            >
              <div className='flex items-center gap-4'>
                <img
                  src={item.featured_image}
                  alt={item.name}
                  className='w-20 h-20 object-cover rounded-lg'
                />
                <div>
                  <h2 className='text-xl font-semibold'>{item.name}</h2>
                  <p className='text-gray-500'>
                    Quantity: {item.quantity.value}
                  </p>
                  <p className='text-gray-500'>
                    Price: {currency.currency_symbol}
                    {parseFloat(item.price).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className='text-right'>
                <p className='text-lg font-bold'>
                  {currency.currency_symbol}
                  {parseFloat(item.totals.subtotal).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-500'>Your cart is empty.</p>
      )}

      {/* Cart Totals */}
      <div className='mt-8 p-6 border-t'>
        <h2 className='text-2xl font-bold mb-4'>Cart Totals</h2>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-700'>Subtotal:</span>
          <span className='font-bold'>
            {currency.currency_symbol}
            {parseFloat(totals.subtotal).toFixed(2)}
          </span>
        </div>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-700'>Shipping:</span>
          <span className='font-bold'>
            {shipping?.packages?.default?.rates?.['free_shipping:1']?.label ||
              'Calculated at checkout'}
          </span>
        </div>
        <div className='flex justify-between mb-6'>
          <span className='text-gray-700'>Total:</span>
          <span className='text-xl font-extrabold'>
            {currency.currency_symbol}
            {parseFloat(totals.total).toFixed(2)}
          </span>
        </div>

        {/* Checkout Button */}
        <div className='flex justify-end'>
          <Link
            to='/checkout'
            className='px-8 py-4 bg-black text-white text-lg font-bold rounded'
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
