import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  console.log(cartItem);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem?.length === 0 && (
          <h1 className=" m-5 border-gray-200 border-b-2 text-left flex justify-center w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-7 rounded-lg"> Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;