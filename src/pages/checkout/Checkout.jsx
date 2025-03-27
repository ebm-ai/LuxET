import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import OrderItem from './OrderItem';

const Checkout = () => {
  const location = useLocation();
  const selectedItems = location.state?.cart;

  console.log("Selected Items from location:", selectedItems); // Check if items are passed

  return (
    <div className="my-6">
      <h1 className="text-center p-4 font-mono font-semibold">Checkout</h1>
      <div className="flex flex-col md:flex-row justify-center md:gap-10">
        <CheckoutForm />
        {/* Pass selectedItems only if it's valid */}
        {selectedItems && selectedItems.length > 0 ? (
          <OrderItem item={selectedItems} />
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
