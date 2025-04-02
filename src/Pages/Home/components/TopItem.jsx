import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TopItem = ({ food }) => {
  const { _id, image, foodName, category, price } = food;
  return (
    <div className="space-y-5 rounded-3xl border-4 p-3 lg:p-5">
      <img className="rounded-2xl" src={image} alt="" />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold lg:text-2xl">{foodName}</h3>
        <span className="rounded-full bg-gray-400 px-2 text-lg text-white">
          {category}
        </span>
        <h3 className="text-xl font-semibold">
          Price:<span className="text-[#F2A64D]"> {price} $</span>
        </h3>
        <Link
          to={`/all-items/${_id}`}
          food={food}
          className="btn btn-sm border-0 bg-[#F2A64D] text-white hover:bg-[#F2A64D]"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

TopItem.propTypes = {
  food: PropTypes.object.isRequired,
};

export default TopItem;
