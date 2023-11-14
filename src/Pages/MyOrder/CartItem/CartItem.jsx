import PropTypes from "prop-types";

const CartItem = ({ cart }) => {
    const { image, foodName, price, addedTime, foodOwner, buyerId } = cart;

    return (
        <div>
            <div className="border-4 rounded-3xl p-3 gap-3 sm:gap-7 flex flex-col md:flex-row items-start md:items-center md:justify-between">
                <img
                    className="w-full  md:w-24 rounded-2xl"
                    src={image}
                    alt="cart-image"
                />
                <h3 className="flex-1 text-2xl font-semibold">{foodName}</h3>
                <h4 className="flex-1 text-center text-xl font-medium">
                    Price: <span className="text-[#F2A64D]">{price}</span> $
                </h4>
                <h4 className="flex-1 text-center text-lg font-medium">
                    Ordered: <span className="text-[#F2A64D]">{addedTime}</span>
                </h4>
                <h4 className="flex-1 text-center text-lg font-medium">
                    Owner: <span className="text-[#F2A64D]">{foodOwner}</span>
                </h4>
                <button className="btn btn-sm md:btn-md bg-[#F2A64D] hover:bg-[#c7873f] border-0 text-white">
                    Delete
                </button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    cart: PropTypes.object.isRequired,
};

export default CartItem;
