import React,{useState,useEffect} from "react";
import CarItem from "../cars/components/CarItem";
import { cars } from "../../assets/assets";

const Garage = () => {
  const [inputValue,setInputValue]=useState("")
  const [filterdCars,setFilteredCars]=useState([])
  useEffect(()=>{
    const filterd=cars.filter((car)=>car.name.toLowerCase().includes(inputValue.toLocaleLowerCase()))
    setFilteredCars(filterd)

  },[inputValue])
  console.log(inputValue)
  return (
  <div className=" ">
    <div className=" flex justify-center">
    <label className="input w-full md:w-96 flex items-center gap-2">
  <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" className="w-full px-4 py-2" onChange={(e)=>setInputValue(e.target.value)} />
</label>


    </div>
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 px-4 space-y-4">
      {filterdCars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
    </div>
  );
};

export default Garage;
