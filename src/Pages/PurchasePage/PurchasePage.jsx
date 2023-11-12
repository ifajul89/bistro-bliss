// import { useLoaderData } from "react-router-dom";

const PurchasePage = () => {
    
    // const {
    //     _id,
    //     image,
    //     foodName,
    //     category,
    //     price,
    //     madeBy,
    //     foodOrigin,
    //     shortDescription,
    // } = useLoaderData();

    return (
        <div>
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
                        id="readOnlyField"
                        // value={foodName}
                        className="input rounded-full focus:outline-none bg-gray-100"
                        required
                    />
                </div>
            </form>
        </div>
    );
};

export default PurchasePage;
