import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

export default function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);
    
    const {resId} = useParams()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
      const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log("Data is: ", resInfo);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resInfo?.cards[2]?.card?.card.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log("itemCards: ", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>

      <h2>Menu</h2>
          <ul>
              {itemCards.map((item) => {
                  return <li key={item.card.info.id}>{item.card.info.name} - ₹{(item.card.info.price || item.card.info.defaultPrice)/100}</li>
              })}
      </ul>
    </div>
  );
}
