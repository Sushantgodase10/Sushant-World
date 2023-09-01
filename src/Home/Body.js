import reslist from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {
  Flex,
  Stack,
  Input,
  Radio,
  RadioGroup,
  Text,
  Button,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

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

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return (
    <div className="body">
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
      <Stack
       flexDirection="column"
       width="280px"
       padding="10px"
       boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
       position="sticky"
       borderColor="black"
       float="left"
       overflow="auto"
       borderRight="1px solid #ddd"
      >
        <Flex flexDirection="column" width="240px" borderColor="black">
          <Text fontWeight="bold">Top Rated Restaurant</Text>
          <Button
            width="190px"
            backgroundColor="#56C0F8"
            margin={2}
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Restaurant
          </Button>
        </Flex>
        <Divider />
        <Flex
          style={{
            flexDirection: "column",
            marginLeft: 10,
            borderColor: "black",
            width: "200px",
          }}
        >
          <Text fontWeight="bold">Destination</Text>
          <input
            type="text"
            placeholder="Search here"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Button
            width="190px"
            backgroundColor="#56C0F8"
            margin={2}
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </Button>
        </Flex>
        <Divider />
        <Flex
          style={{
            flexDirection: "column",
            marginLeft: 10,
            borderColor: "black",
            width: "200px",
          }}
        >
          <Text fontWeight="bold">Loaction</Text>
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
        </Flex>
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
        <Divider />
      </Stack>

      <Flex
        justifyContent="center"
        alignItems="center"
        marginBottom={20}
        flexWrap="wrap"
        gap={5}
        flex="1"
        marginLeft="250px"
      >
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant?.info} />
        ))}
        ;
      </Flex>
    </div>
  );
};

export default Body;
