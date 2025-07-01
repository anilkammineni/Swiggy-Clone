import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestaurantMenu() {
    
  const {resId} = useParams()

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resInfo?.cards[2]?.card?.card.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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
