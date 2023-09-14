import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };
  
  return (
    <div>
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList item={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
