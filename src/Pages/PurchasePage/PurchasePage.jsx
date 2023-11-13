import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PurchasePage = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const [error, setError] = useState();

    const { image, foodName, quantity, price } = useLoaderData();

    return (
        <div className="container mx-auto grid gap-5 grid-cols-3 border-4 p-10 mb-5 rounded-3xl">
            <div className="col-span-1">
                <img className="w-full rounded-3xl" src={image} alt="" />
            </div>
            <div className="col-span-2">
                <form className="grid grid-cols-2 gap-5">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Food Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="foodName"
                            value={foodName}
                            className="input rounded-full w-full focus:outline-none bg-gray-100"
                            readOnly
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Price
                            </span>
                        </label>
                        <input
                            type="text"
                            name="price"
                            value={`${price} $`}
                            className="input rounded-full w-full focus:outline-none bg-gray-100"
                            readOnly
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Quantity
                            </span>
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Please Select Quantity"
                            className="input rounded-full w-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Buying Date
                            </span>
                        </label>
                        <input
                            type="date"
                            name="price"
                            placeholder="Please Select a Date"
                            className="input rounded-full w-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Buyer Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="buyerName"
                            value={displayName}
                            className="input rounded-full w-full focus:outline-none bg-gray-100"
                            readOnly
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Buyer Email
                            </span>
                        </label>
                        <input
                            type="text"
                            name="buyerEmail"
                            value={email}
                            className="input rounded-full w-full focus:outline-none bg-gray-100"
                            readOnly
                            required
                        />
                    </div>

                    <button className="btn border-0 mt-5 bg-[#F2A64D] text-white hover:bg-[#aa7436] col-span-2 rounded-full">
                        Purchase
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PurchasePage;
