import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri";

export const Card = (props) => {
    const { img, title, category, price } = props;
  
    return (
      <div className="bg-[#4c515e]/50 p-6 rounded-2xl flex flex-col gap-2 w-full md:w-auto">
        <img
          src={img}
          className="w-full xl:w-52 h-72 lg:h-64 object-cover rounded-2xl"
        />
        <h1 className="text-xl text-white">{title}</h1>
        <span className="text-gray-400">{category}</span>
        <div className="flex items-center gap-4">
          <h5 className="text-3xl text-[#f6f9f9]">${price}</h5>
          <button className="flex items-center justify-evenly bg-[#6e8ca1] text-[#f6f9f9] font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200">
          <RiShoppingCartLine/>
            Añadir
          </button>
        </div>
      </div>
    );
  };
