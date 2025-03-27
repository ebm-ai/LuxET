import React from 'react';
import { FiMinus } from 'react-icons/fi';
import { HiPlusSmall } from 'react-icons/hi2';
import { MdClear } from "react-icons/md";
import { useCarCart } from '../../context/CarShoppingContext';

const CartItem = ({ item, isSelected, onSelect }) => {
  const { removeFromCart, addCarsToCart, removeCartItem,reduceCarsInCart } = useCarCart();

  return (
    <div className="card card-compact w-full md:w-[400px] bg-base-100 shadow-md border-1 p-4 mb-4">
      <div className=" ">
        <input
          type="checkbox"
          id={`select-item-${item.id}`}
          checked={isSelected}
          onChange={() => onSelect(item.id)}
          className="checkbox checkbox-sm border-2 border-gray-600 mb-3"
        />
        <label htmlFor={`select-item-${item.id}`} className="sr-only">Select {item.name}</label>
        
        <button
          onClick={() => removeCartItem(item)}
          className="absolute top-0 right-0 hover:text-red-500 cursor-pointer"
        >
          <MdClear size={24} />
        </button>

        <div className="flex justify-between gap-4">
          <img
            src={item.image}
            alt={`Image of ${item.name}`}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div className="flex flex-col gap-2 px-4 flex-1">
            <p className="text-gray-400">{item.name}</p>
            <p>Price: {item.price}</p>
            <p>Qty: {item.quantity}</p>
            <p>Sub-Total: $ {(item.price * item.quantity).toLocaleString()}</p>

            <div className="flex items-center gap-2 md:gap-6">
              <button
                onClick={() => reduceCarsInCart(item)}
                aria-label={`Decrease quantity of ${item.name}`}
                className="btn btn-sm btn-outline btn-secondary"
              >
                <FiMinus size={24} />
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => addCarsToCart(item)}
                aria-label={`Increase quantity of ${item.name}`}
                className="btn btn-sm btn-outline btn-secondary"
              >
                <HiPlusSmall size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
