import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleItem = ({ food }) => {
    const { _id, image, foodName, category, price, quantity } = food;

    return (
        <div className="border-4 rounded-3xl p-3 lg:p-5 space-y-5">
            <img className="rounded-2xl" src={image} alt="" />
            <div className="space-y-2">
                <h3 className="text-lg lg:text-2xl font-semibold">
                    {foodName}
                </h3>
                <span className="text-lg px-2 rounded-full text-white bg-gray-400">
                    {category}
                </span>
                <h3 className="text-xl font-semibold">
                    Price:<span className="text-[#F2A64D]"> {price} $</span>
                </h3>
                <h3 className="font-light text-lg">Quantity: {quantity}</h3>
                <Link
                    to={`/all-items/${_id}`}
                    food={food}
                    className="btn btn-sm bg-[#F2A64D] text-white hover:bg-[#F2A64D] border-0"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

SingleItem.propTypes = {
    food: PropTypes.object.isRequired,
};

export default SingleItem;
