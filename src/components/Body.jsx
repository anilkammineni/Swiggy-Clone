import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";
import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  console.log("mockList: ",listOfRestaurants)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.406498&lng=78.47724389999999&str=Rolls&trackingId=undefined&submitAction=ENTER&queryUniqueId=fa25ebf9-8d99-7b0a-f44e-9a4241985633&selectedPLTab=RESTAURANT"
    );
    
    const json = await data.json();

    console.log("data from api is", json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards.slice(1,10))

    setListOfRestaurants(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);

    console.log("List of restaurants is set", listOfRestaurants)
  }

  if (listOfRestaurants.length === 0)
  {
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) => res.avgRating > 4);

            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((res) => {
          return <RestaurantCard key={res.card.card.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
