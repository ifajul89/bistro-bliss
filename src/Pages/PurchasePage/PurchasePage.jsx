import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PurchasePage = () => {
    const { user } = useContext(AuthContext);

    const {
        image,
        foodName,
        category,
        price,
        madeBy,
        foodOrigin,
        shortDescription,
    } = useLoaderData();

    return (
        <div className="container mx-auto grid grid-cols-3">
            <div className="col-span-1">
                <img className="w-full" src={image} alt="" />
            </div>
            <div className="col-span-2">
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Food Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="foodName"
                            value={foodName}
                            className="input rounded-full focus:outline-none bg-gray-100"
                            readOnly
                            required
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PurchasePage;