import React from "react";

const OrderItem = ({ item }) => {
  console.log("Passed Items", item);

  // Calculate the total price of all items
  const totalPrice = item?.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="max-w-md">
      <div className="card shadow-xl p-6">
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">Order Summary</h2>
          <div className="border-b pb-4">
            <div className="flex justify-between text-gray-600">
              <span>Product</span>
              <span>Total</span>
            </div>

            {/* Loop through items array and display each item */}
            {item?.map((product) => {
              const productTotal = product?.price * product?.quantity; // Calculate total per item
              return (
                <div key={product.id} className="flex justify-between">
                  <span>
                    {product.name} x {product.quantity}
                  </span>
                  <span>
                    ${" "}
                    {productTotal.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Shipping Information */}
          <div className="flex justify-between border-b pb-4">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-600">Free shipping</span>
          </div>

          {/* Total */}
          <div className="flex justify-between text-lg font-semibold">
            <span>Grand Total</span>
            <span className="px-4 text-purple-500">
              {" "}
              ${" "}
              {totalPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          {/* Place Order Button */}
          <div className="card-actions">
            <button className="btn btn-primary w-full">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
