import React, { useEffect, useState } from 'react';
import { getCart } from '../../api';

export const Checkout = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    // Obtener datos del carrito al cargar el componente
    const fetchCart = async () => {
      try {
        const cartData = await getCart();
        setCart(cartData);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  if (!cart) {
    return <div>Loading checkout...</div>;
  }

  const { billing_address, shipping_address } = cart.customer;
  const { items, totals, shipping } = cart;

  return (
    <div className='checkout-container p-8 bg-gray-100'>
      <h1 className='text-3xl font-bold mb-6'>Checkout</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Billing Details */}
        <div className='billing-details bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Billing details</h2>
          <form className='space-y-4'>
            <div className='flex gap-4'>
              <input
                type='text'
                placeholder='First name'
                defaultValue={billing_address.billing_first_name}
                className='w-full p-2 border border-gray-300 rounded'
              />
              <input
                type='text'
                placeholder='Last name'
                defaultValue={billing_address.billing_last_name}
                className='w-full p-2 border border-gray-300 rounded'
              />
            </div>
            <input
              type='text'
              placeholder='Company name (optional)'
              defaultValue={billing_address.billing_company}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='text'
              placeholder='Country/Region'
              defaultValue={billing_address.billing_country}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='text'
              placeholder='Street address'
              defaultValue={billing_address.billing_address_1}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='text'
              placeholder='Apartment, suite, unit, etc. (optional)'
              defaultValue={billing_address.billing_address_2}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='text'
              placeholder='Town / City'
              defaultValue={billing_address.billing_city}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='text'
              placeholder='State'
              defaultValue={billing_address.billing_state}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='text'
              placeholder='ZIP'
              defaultValue={billing_address.billing_postcode}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='text'
              placeholder='Phone'
              defaultValue={billing_address.billing_phone}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='email'
              placeholder='Email address'
              defaultValue={billing_address.billing_email}
              className='w-full p-2 border border-gray-300 rounded'
            />
          </form>
        </div>

        {/* Order Summary */}
        <div className='order-summary bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Your order</h2>
          <ul className='space-y-4'>
            {items.map((item) => (
              <li key={item.item_key} className='flex justify-between'>
                <span>
                  {item.name} × {item.quantity.value}
                </span>
                <span>
                  {cart.currency.currency_symbol}
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
          <div className='border-t border-gray-300 my-4'></div>
          <div className='flex justify-between font-semibold'>
            <span>Total</span>
            <span>
              {cart.currency.currency_symbol}
              {totals.total}
            </span>
          </div>

          <h3 className='text-lg font-medium mt-6 mb-2'>Shipping method</h3>
          <p>{shipping.packages.default.rates['free_shipping:1'].label}</p>

          <button className='mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};
