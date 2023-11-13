import { Link, useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const {
        _id,
        image,
        foodName,
        category,
        price,
        madeBy,
        foodOrigin,
        shortDescription,
    } = useLoaderData();

    return (
        <div className="container mx-auto px-3 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 border-4 rounded-3xl p-3 md:p-10 my-5 gap-5">
                <div>
                    <img
                        className="w-full rounded-3xl"
                        src={image}
                        alt="food"
                    />
                </div>
                <div className="flex flex-col justify-center items-start space-y-3 lg:space-y-7">
                    <h3 className="text-2xl lg:text-5xl font-semibold">
                        {foodName}
                    </h3>
                    <span className="md:text-2xl px-2 rounded-full text-white bg-gray-400">
                        {category}
                    </span>
                    <h3 className="text-xl md:text-3xl font-semibold">
                        Price:<span className="text-[#F2A64D]"> {price} $</span>
                    </h3>
                    <h3 className="text-xl">
                        <span className="font-semibold">Made By: </span>
                        {madeBy?.name}
                    </h3>
                    <h3 className="text-xl">
                        <span className="font-semibold">Origin: </span>
                        {foodOrigin}
                    </h3>
                    <p className="font-light text-lg">{shortDescription}</p>
                    <Link
                        to={`/purchase/${_id}`}
                        className="btn bg-[#F2A64D] text-white border-0 hover:bg-[#c5863e]"
                    >
                        Order
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;
