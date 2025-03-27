import React, { useState } from "react";
import CarDetail from "./CarDetail";
import { useCarCart } from "../../../context/CarShoppingContext";

const CarItem = ({ car }) => {
  const { addCarsToCart } = useCarCart();
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (item) => {
    addCarsToCart(item);
console.log(item)
    setShowToast(true);
    // Hide the toast after 3 seconds (optional)
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };
  

  return (
    <div className="card bg-base-100 w-85 shadow-sm">
      <figure>
        <img src={car.image} alt="Car" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title font-mono font-extrabold">{car.name}</h2>
          <h2 className="font-mono font-bold">Price: {car.price}</h2>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="font-mono font-bold">Model: {car.Model}</h2>
          <h2 className="font-mono font-bold">Condition: {car.condition}</h2>
        </div>

        <div className="card-actions flex justify-between mt-4">
          <button className="btn btn-secondary" onClick={() => setOpen(true)}>
            Quick View
          </button>
          <button className="btn btn-primary" onClick={() => handleAddToCart(car)}>
            Add To Cart
          </button>
        </div>
      </div>

      {open && <CarDetail car={car} open={open} setOpen={setOpen} />}

      {/* Conditionally render the toast notification */}
      {showToast && (
        <div className="toast toast-top   mt-24" role="alert">
          <div className="alert alert-success">
            <span>Items Added To Cart!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarItem;
