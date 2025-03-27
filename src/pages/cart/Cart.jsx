import React,{useState} from 'react'
import CartItem from './CartItem'
import { useCarCart } from '../../context/CarShoppingContext'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {cartItems}=useCarCart()
  const navigate = useNavigate();
  const [selectedItems,setSelectedItems]=useState([])
  // Toggle individual item selection
  const handleSelectItem = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId) // Remove if already selected
        : [...prev, itemId] // Add if not selected
    );
  };
  // Toggle select all
  const handleSelectAll = (checked) => {
    setSelectedItems(checked ? cartItems.map((item) => item.id) : []);
  };

  // Calculate total price of selected items
  const totalPrice = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Proceed to checkout
  const handleCheckout = () => {
    const selectedCartItems = cartItems.filter((item) =>
      selectedItems.includes(item.id)
    );

    if (selectedCartItems.length === 0) {
      alert("Please select at least one item to proceed!");
      return;
    }

    navigate("/checkout", { state: { cart: selectedCartItems } });
  };

  return (
    <div>
      <h1 className=' text-center py-4 font-extrabold font-mono'>Your Cart</h1>
      <div className=' flex  flex-col justify-center'>
      {
      cartItems.length===0?(
        <div className=' text-center text-gray-500 font-inter'>
          <h1>Your Cart is Empty</h1>

        </div>
      ):(
     <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 '>
      {
         cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            isSelected={selectedItems.includes(item.id)}
            onSelect={handleSelectItem}
            
          />
        ))
      }
       <div className="card card-compact md:w-[400px] bg-base-100 shadow-md border-1 p-4 mb-4">
  <h2 className="text-lg font-semibold text-center">Order Summary</h2>

  <div className="flex flex-col items-center gap-6 py-6">
    {/* Select All Checkbox */}
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="selectAllCheckbox"
        className="checkbox"
        checked={selectedItems.length === cartItems.length && cartItems.length > 0}
        onChange={(e) => handleSelectAll(e.target.checked)}
      />
      <label htmlFor="selectAllCheckbox" className="text-sm font-medium">
        Select All
      </label>
    </div>

    {/* Total Price */}
    <p className="font-semibold text-gray-600 text-lg">
      Total Price: ${totalPrice.toLocaleString()}
    </p>

    {/* Checkout Button */}
    <button
      onClick={handleCheckout}
      aria-label="Proceed to checkout"
      className="btn bg-amber-500 hover:bg-amber-600 text-white px-6 py-2"
    >
      Checkout
    </button>
  </div>
</div>
     </div>
            
            )}
      
      {/* Chekout Summery */}

    

</div>

 </div>
  )
}

export default Cart