import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantsList)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {

            const filteredRestaurants = listOfRestaurants.filter((res) => res.avgRating > 4.5);

            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((res) => {
          return <RestaurantCard key={res.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
