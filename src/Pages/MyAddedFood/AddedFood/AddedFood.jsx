import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AddedFood = ({ addedFood }) => {
  const { _id, image, foodName, price } = addedFood;

  return (
    <div className="flex items-center justify-between gap-3 rounded-3xl border-4 p-3 sm:gap-10">
      <img
        className="w-10 rounded-md sm:w-14 md:w-24 md:rounded-2xl"
        src={image}
        alt=""
      />
      <h3 className="flex-1 text-base font-semibold sm:text-xl md:text-3xl">
        {foodName}
      </h3>
      <h4 className="flex-1 text-center text-sm font-medium sm:text-lg md:text-2xl">
        Price: <span className="text-primary">{price}</span> $
      </h4>
      <Link
        className="btn btn-sm border-0 bg-primary text-white md:btn-md hover:bg-[#c7873f]"
        to={`/update-food/${_id}`}
      >
        Update
      </Link>
    </div>
  );
};

AddedFood.propTypes = {
  addedFood: PropTypes.object.isRequired,
};

export default AddedFood;
