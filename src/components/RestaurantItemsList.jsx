import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/redux/cartSlice";

const RestaurantItemsList = ({ items }) => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items)

  const getQuantity = (id) => {
    const findItemWithId = cartItems.find(item => item?.card?.info?.id == id);

    return findItemWithId?.qty || 0;
  };

  const handleAddItem = (item) => {
    // Dispath an action

    dispatch(addItem(item));
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  }

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
              {getQuantity(item?.card?.info?.id) == 0 ? <div className="absolute p-2 w-25 mx-8 mt-32 bg-white rounded-lg shadow-lg m-auto text-center hover:cursor-pointer">
								<button className="font-bold text-green-700" onClick={() => handleAddItem(item)}>Add</button>
						</div> :
            <div className="absolute border p-2 w-25 mx-8 mt-32 bg-white rounded-lg border-gray-400 flex items-center justify-around">
                <button data-testid = "removeItem" className="text-gray-600 hover:cursor-pointer text-3xl" onClick={() => handleRemoveItem(item)}>-</button>
                <button data-testid = "quantity" className="text-green-600 hover:cursor-pointer">{ getQuantity(item?.card?.info?.id)}</button>
                <button data-testid = "addItem" className="text-green-600 hover:cursor-pointer text-2xl" onClick={() =>handleAddItem(item)}>+</button>
            </div>}
						<img src={CDN_URL + item?.card?.info?.imageId} alt="item"/>
					</div>
				</div>
			);
      })}
    </div>
  );
};

export default RestaurantItemsList;
