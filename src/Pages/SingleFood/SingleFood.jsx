import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Bistro Bliss | {foodName}</title>
      </Helmet>
      <div className="my-5 grid grid-cols-1 gap-5 rounded-3xl border-4 p-3 md:grid-cols-2 md:p-10">
        <div>
          <img className="w-full rounded-3xl" src={image} alt="food" />
        </div>
        <div className="flex flex-col items-start justify-center space-y-3 lg:space-y-7">
          <h3 className="text-2xl font-semibold lg:text-5xl">{foodName}</h3>
          <span className="rounded-full bg-gray-400 px-2 text-white md:text-2xl">
            {category}
          </span>
          <h3 className="text-xl font-semibold md:text-3xl">
            Price:<span className="text-primary"> {price} $</span>
          </h3>
          <h3 className="text-xl">
            <span className="font-semibold">Made By: </span>
            {madeBy?.name}
          </h3>
          <h3 className="text-xl">
            <span className="font-semibold">Origin: </span>
            {foodOrigin}
          </h3>
          <p className="text-lg font-light">{shortDescription}</p>
          <Link
            to={`/purchase/${_id}`}
            className="btn border-0 bg-primary text-white hover:bg-[#c5863e]"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
