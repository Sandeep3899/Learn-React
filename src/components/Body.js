import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; // Importing useState hook from React
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; // Importing Link for navigation

const Body = () => {
  //Local State Variable - super powerful of React - we use hooks
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // Initializing state with an empty array
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //Normal JavaScript variable
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants); // Initialize filteredRestaurants with the full list
    } catch (err) {
      console.error("Error fetching data:", err);
      setListOfRestaurants([]);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
            className="link-style"
          >
            <RestaurantCard resDATA={restaurant} />
          </Link>
        ))}
        {/* 
          The above code maps through the resList array and creates a RestaurantCard for each restaurant.
          Each RestaurantCard receives the restaurant data as props.
        */}
      </div>
    </div>
  );
};

export default Body;
