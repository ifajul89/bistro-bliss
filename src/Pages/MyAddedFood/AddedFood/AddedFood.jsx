import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AddedFood = ({ addedFood }) => {
    const { _id, image, foodName, price } = addedFood;

    return (
        <div className="border-4 rounded-3xl p-3 gap-3 sm:gap-10 flex items-center justify-between">
            <img
                className="w-10 sm:w-14 rounded-md md:w-24 md:rounded-2xl"
                src={image}
                alt=""
            />
            <h3 className="flex-1 text-base sm:text-xl md:text-3xl font-semibold">
                {foodName}
            </h3>
            <h4 className="flex-1 text-center text-sm sm:text-lg md:text-2xl font-medium">
                Price: <span className="text-[#F2A64D]">{price}</span> $
            </h4>
            <Link
                className="btn btn-sm md:btn-md bg-[#F2A64D] hover:bg-[#c7873f] border-0 text-white"
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
