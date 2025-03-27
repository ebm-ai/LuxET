import React, { useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { HiPlusSmall } from 'react-icons/hi2';
import { useCarCart } from '../../../context/CarShoppingContext';

const CarDetail = ({ car, open, setOpen }) => {
  const { addCarsToCart ,reduceCarsInCart} = useCarCart();
  const [quantity, setQuantity] = useState(car.quantity || 1);
  const [showToast, setShowToast] = useState(false);

  const handleQuantityChange = (type) => {
    const newQuantity = type === 'increment'
    ? quantity + 1
    : Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    addCarsToCart({...car,quantity:newQuantity})
    
  };

  const handleAddToCart = () => {
    addCarsToCart({ ...car, quantity });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  const subTotal = (car.price * quantity || 0).toLocaleString();


  return (
    <dialog id="product_modal" className={`modal ${open ? 'modal-open' : ''}`}>
      <div className="modal-box min-w-[500px] md:min-w-[800px]">
        <h3 className="font-sans font-bold text-lg text-center pb-4">Car Detail</h3>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Product Image */}
          <img
            src={car.image}
            alt={`Image of ${car.name}`}
            className="w-full md:w-1/2 h-64 object-cover rounded-md"
          />

          {/* Product Details */}
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold font-mono">{car.name}</p>
            <p className="font-mono">Model: {car.Model}</p>
            <p className="font-mono">Condition: {car.condition}</p>
            <p>
              <span className="font-mono">Description:</span> {car.description}
            </p>
            <p className="text-lg font-mono">
              <span className="text-normal">Price:</span>  ${(car.price).toLocaleString()}
            </p>
            <p className="text-lg font-mono">
              <span className="text-normal font-semibold">Sub_Total:</span>  ${subTotal}
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <span className="font-mono">Quantity:</span>
              <button className="btn btn-sm btn-outline" onClick={() => handleQuantityChange('decrement')}>
                <FiMinus size={20} />
              </button>
              <span className="text-lg">{quantity}</span>
              <button className="btn btn-sm btn-outline" onClick={() => handleQuantityChange('increment')}>
                <HiPlusSmall size={20} />
              </button>
            </div>

            {/* Toast Notification */}
            {showToast && (
              <div className="toast toast-top toast-end" role="alert">
                <div className="alert alert-success">
                  <span>Items Added to Cart!</span>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex justify-end gap-4 mt-6">
              <button className="btn btn-outline" onClick={() => setOpen(false)}>
                Close
              </button>
              <button className="btn btn-accent" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CarDetail;
