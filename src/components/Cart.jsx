import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";
import CartItemsList from "./CartItemsList";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);

	const dispatch = useDispatch();

	const handleClearCart = () => {
		// Dispath an action
		dispatch(clearCart());
  };

  const totalValue = CartItems.reduce(
		(price, item) =>
			price +
			item.qty *
				(item?.card?.info?.price
					? item?.card?.info?.price / 100
					: item?.card?.info?.defaultPrice/100),
		0
  );

	return (
		<div className="m-4 p-4">
			<div className="flex justify-between">
				<div className="left-section w-5/12">
					<div className="account border border-gray-50 shadow-lg flex justify-between">
						<div className="w-10/12">
							<h1 className="font-bold text-lg text-left p-2">
								Account
							</h1>
							<p className="p-2 text-left">
								To place your order now, log in to your existing account
								or sign up.
							</p>
							<div>
								<button className="font-bold w-[150px] bg-white text-green-300 border border-green-300 rounded-lg p-4 m-4">
									Login
								</button>
								<button className="font-bold w-[150px] bg-green-300 text-white border rounded-lg p-4 m-4">
									Sign Up
								</button>
							</div>
						</div>
						<div className="w-2/12 flex justify-center items-center">
							<img
								className="w-20"
								src={
									"https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740"
								}
							/>
						</div>
					</div>
					<div className="h-[120px] border my-4 border-gray-50 shadow-lg text-left">
						<h1 className="font-bold text-left text-gray-400">
							Delivery Address
						</h1>
						<div className="flex">
							<input
								className="border border-black w-full"
								placeholder="Address 1"
							/>
							<input
								className="border border-black mx-2 w-full"
								placeholder="Address 2"
							/>
						</div>
						<div className="flex mt-2">
							<input
								className="border border-black w-full"
								placeholder="City"
							/>
							<input
								className="border border-black mx-2 w-full"
								placeholder="Zipcode"
							/>
						</div>
					</div>
					<div className="h-[100px] border my-4 border-gray-50 shadow-lg text-left">
						<h1 className="font-bold text-gray-400">Payment</h1>
						<label>Enter Card Details: </label>
						<input className="border border-black" placeholder="XXXX" />
						<input
							className="ml-2 border border-black"
							placeholder="CVV"
						/>
					</div>
				</div>
				<div className="right-section">
					<div className="h-[500px] overflow-y-scroll">
						{CartItems &&
							CartItems.map((item) => (
								<CartItemsList key={item?.card?.info?.id} item={item} />
							))}
					</div>
          <div className="my-2 flex justify-between">
            {CartItems.length > 0 && <button className="p-4 m-2 font-bold text-gray-500 hover:cursor-pointer border border-black" onClick={handleClearCart}>Clear Cart</button>}
            <h1 className="p-4 m-2 font-bold text-2xl">Total</h1>
            <h1 className="p-4 m-2 text-2xl">₹{ totalValue }</h1>
          </div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
