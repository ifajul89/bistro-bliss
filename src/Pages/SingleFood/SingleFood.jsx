import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const {
        image,
        foodName,
        category,
        price,
        quantity,
        madeBy,
        foodOrigin,
        shortDescription,
    } = useLoaderData();

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 border-4 rounded-3xl p-10 my-5 gap-5">
                <div>
                    <img className="w-full rounded-3xl" src={image} alt="food" />
                </div>
                <div>
                    <h3>{foodName}</h3>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleFood;
