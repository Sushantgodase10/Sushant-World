import reslist from "../utils/mockData";
import ReatauranCard from "./ReataurCard";
import reslist from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(reslist);
  const [searchText, setSearchText] = useState("");

  // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body render")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.444688&lng=73.8280656&is-seo-homepage-enabled=true&page_type"
    );

    const json = await data.json();

    console.log(json);
    // setListOfRestaurants(json.data.cards.card)
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            placeholder="Search here"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => 
              res.data.name.toLowerCase(). includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterreslist = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filterreslist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ReatauranCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
