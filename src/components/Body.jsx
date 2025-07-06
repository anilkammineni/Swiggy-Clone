import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import {UserContext} from "../utils/context-api/UserContext";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.406498&lng=78.47724389999999&str=Rolls&trackingId=undefined&submitAction=ENTER&queryUniqueId=fa25ebf9-8d99-7b0a-f44e-9a4241985633&selectedPLTab=RESTAURANT"
    );
    
    const json = await data.json();

    const restaurants =
      json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;

    setListOfRestaurants(restaurants);

    setFilteredRestaurants(restaurants);
  }

  function handleFilter() {
    let filteredRestaurants = listOfRestaurants.filter(res => res?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurants(filteredRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline!! Please check your internet connection</h1>
  }

  const { userName, login} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-bl"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 m-4 bg-green-100 rounded-lg hover:cursor-pointer"
            onClick={handleFilter}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg hover:cursor-pointer"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (res) => res?.card?.card?.info?.avgRating > 4
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
          <div className="search m-4 p-4 flex items-center">
            <label>User Name :</label>
          <input className="border border-black ml-1" value={userName} onChange={(e) => login(e.target.value)}/>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((res) => {
          return (
            <Link
              key={res.card.card.info.id}
              to={"/restaurants/" + res.card.card.info.id}
            >
              {res.card.card.info.promoted === true ? (
                <RestaurantCardPromoted resData={res.card.card.info} />
              ) : (
                <RestaurantCard resData={res.card.card.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
