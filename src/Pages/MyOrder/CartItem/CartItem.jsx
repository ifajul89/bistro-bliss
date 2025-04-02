import PropTypes from "prop-types";

const CartItem = ({ cart, handleDeleteCart }) => {
  const { _id, image, foodName, price, addedTime, foodOwner } = cart;

  return (
    <div>
      <div className="flex flex-col items-start gap-3 rounded-3xl border-4 p-3 sm:gap-7 md:flex-row md:items-center md:justify-between">
        <img
          className="w-full rounded-2xl md:w-24"
          src={image}
          alt="cart-image"
        />
        <h3 className="flex-1 text-2xl font-semibold">{foodName}</h3>
        <h4 className="flex-1 text-center text-xl font-medium">
          Price: <span className="text-primary">{price}</span> $
        </h4>
        <h4 className="flex-1 text-center text-lg font-medium">
          Ordered: <span className="text-primary">{addedTime}</span>
        </h4>
        <h4 className="flex-1 text-center text-lg font-medium">
          Owner: <span className="text-primary">{foodOwner}</span>
        </h4>
        <button
          onClick={() => handleDeleteCart(_id)}
          className="btn btn-sm border-0 bg-primary text-white md:btn-md hover:bg-[#c7873f]"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cart: PropTypes.object.isRequired,
  handleDeleteCart: PropTypes.func.isRequired,
};

export default CartItem;
