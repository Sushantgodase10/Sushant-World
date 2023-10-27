import reslist from "../utils/mockData";
import RestaurantCard , { withPromtedLabel} from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {loggedInUser, setUserName} = useContext(UserContext);
  // const RestaurantPromoted = withPromtedLabel();

  // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.444688&lng=73.8280656&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return (
      <h1 className=" m-5 border-gray-200 border-b-2 text-red-500 text-lg flex justify-center w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-7 rounded-lg">
        Look's like you're offline!! please check your internet connections
      </h1>
    );


  if (listOfRestaurants.length === 0) {
    return <ShimmerUI/>
  }

  return (
    <div className="body mx-5 px-4">
      {/* <div className="filter">
        
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div> */}
      <div className="flex justify-center">
      
         <div className="search m-4 p-4">
          <span className="text-lgs">Top  Restaurant</span>
          <button className="px-4 py-2 bg-blue-300 m-4  rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Restaurant
          </button>
          </div>
        <div className="search m-4 p-4"> 
            <input
            type="text"
            placeholder="Search here"
            className="border border-solid border-black rounded-lg p-2 "
            
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 py-2 bg-blue-300 m-4 rounded-lg"
            width="190px"
            margin={2}
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName :</label>
           <input className="m-1 border border-black rounded-lg p-2"
           value={loggedInUser}
           onChange={(e) => setUserName(e.target.value)}/>
         </div>
        {/* <div
          style={{
            flexDirection: "column",
            marginLeft: 10,
            borderColor: "black",
            width: "200px",
          }}
        >
          <div fontWeight="bold">Loaction</div>
          <RadioGroup>
            <Stack>
              <Radio value="All" isDisabled>
                {" "}
                All{" "}
              </Radio>
              <Radio value="Pune"> Pune </Radio>
              <Radio value="Goa"> Goa</Radio>
              <Radio value="Mumbai"> Mumbai</Radio>
              <Radio value="Dubai"> Dubai</Radio>
            </Stack>
          </RadioGroup>
          <Button
            backgroundColor="#56C0F8"
            margin={2}
            onClick={"Myfilterlocation"}
          >
            Filter
          </Button>
        </div>
        <Divider />
        <Flex
          style={{
            flexDirection: "column",
            marginLeft: 10,
            borderColor: "black",
            width: "200px",
          }}
        >
          <Text fontWeight="bold">Price Range(Per Hour)</Text>
          <RadioGroup>
            <Stack>
              <Radio value="500 - 1000"> 500 - 1000 </Radio>
              <Radio value="1000 - 2000"> 1000 - 2000</Radio>
              <Radio value="2000 - 4000"> 2000 - 4000</Radio>
              <Radio value="4000 - 10000"> 4000 - 10000</Radio>
            </Stack>
          </RadioGroup>
          <Button backgroundColor="#56C0F8" margin={2}>
            Filter
          </Button>
        </Flex>
        <Divider /> */}
      </div>

      <div className="flex flex-wrap px-4 py-0">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
