import PropTypes from "prop-types";

const SingleItem = ({ food }) => {
    const { image, foodName, category, price, quantity } = food;
    return (
        <div className="border-2 rounded-3xl p-5">
            <img className="rounded-2xl" src={image} alt="" />
            <div>
                <h3>{foodName}</h3>
                <h3>{category}</h3>
                <h3>{price}</h3>
                <h3>{quantity}</h3>
                <button className="btn">Details</button>
            </div>
        </div>
    );
};

SingleItem.propTypes = {
    food: PropTypes.object.isRequired,
};

export default SingleItem;
