import React from "react";
import CarItem from "./components/CarItem";
import { cars } from "../../assets/assets";

const Cars = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 px-4 space-y-4">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
