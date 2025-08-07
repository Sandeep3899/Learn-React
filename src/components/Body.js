import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"; // Importing the mock data for restaurants
import { useState } from "react"; // Importing useState hook from React

const Body = () => {
  //Local State Variable - super powerful of React - we use hooks
  const [listOfRestaurants, setListOfRestaurants] = useState(resList); // Initializing state with the mock data
  //Normal JavaScript variable

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resDATA={restaurant} />
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
