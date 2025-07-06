import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/redux/cartSlice";

const CartItemsList = ({item}) => {

    const { imageId, name, price, defaultPrice } = item?.card?.info;

    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(removeItem(item))
    }

    const handleAddItem = () => {
        dispatch(addItem(item));
    }

    return (
        <div className="m-4 p-4 shadow-lg flex">
            <div className="w-1/12">
                <img src={CDN_URL + imageId} />
            </div>
            <div className="w-7/12 flex items-center text-center">
                <span className="p-2 m-auto">{ name }</span>
            </div>
            <div className="w-2/12 border border-gray-400 flex items-center justify-around">
                <button className="text-gray-400 hover:cursor-pointer text-3xl" onClick={handleRemoveItem}>-</button>
                <button className="hover:cursor-pointer">{ item.qty }</button>
                <button className="text-green-300 hover:cursor-pointer text-2xl" onClick={handleAddItem}>+</button>
            </div>
            <div className="w-2/12 flex items-center">
                <span className="m-auto">₹{ price ? price/100 : defaultPrice/100}</span>
            </div>
        </div>
    )
};

export default CartItemsList;