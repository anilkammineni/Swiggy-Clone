import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-4 m-2 border-gray-200 border-b-1 text-left flex justify-around"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {(item?.card?.info?.price
                    ? item?.card?.info?.price
                    : item?.card?.info?.defaultPrice) / 100}
                </span>
              </div>
              <div>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
            </div>
                <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="p-2 mx-24 mt-32 bg-white rounded-lg shadow-lg m-auto">Add +</button>
                        </div>
                <img src={CDN_URL + item?.card?.info?.imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
