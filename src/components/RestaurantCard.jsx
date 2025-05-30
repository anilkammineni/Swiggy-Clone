import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log("Resdata is: ",resData)

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData.card.card.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 style={{ fontStyle: "italic" }}>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

export default RestaurantCard;
