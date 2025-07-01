import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  return (
    listOfRestaurants.length ===
    0 ? <Shimmer/> : ( 
      <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
              <button onClick={handleFilter}>Search</button>
            </div>
          <button
            className="filter-btn"
            
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

        <div className="res-container">
          {filteredRestaurants.map((res) => {
            return (
              <Link
                key={res.card.card.info.id}
                to={"/restaurants/" + res.card.card.info.id}
              >
                <RestaurantCard resData={res.card.card.info} />
              </Link>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Body;
