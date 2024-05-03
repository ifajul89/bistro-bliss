import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const PurchasePage = () => {
    const { user } = useContext(AuthContext);
    const { uid, displayName, email } = user;
    const [error, setError] = useState("");
    const [quantityInput, setQuantityInput] = useState(1);

    const { _id, image, foodName, quantity, timesOrdered, price, madeBy } =
        useLoaderData();

    const calculatePrice = (newQuantity) => {
        const basePrice = price;
        return basePrice * newQuantity;
    };

    const [totalPrice, setTotalPrice] = useState(calculatePrice(1));

    const handleQuantity = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantityInput(newQuantity);
        setTotalPrice(calculatePrice(newQuantity));
    };

    const navigate = useNavigate();

    const handlePurchase = (e) => {
        e.preventDefault();
        const addedTime = e.target.date.value;
        setError("");

        if (quantityInput === 0) {
            setError("Please Select Quantity");
            return;
        }

        if (quantityInput < 0) {
            setError("Please Select A Valid Quantity");
            return;
        }

        if (quantity <= 0) {
            Swal.fire({
                title: "Sorry!",
                text: "We Are Out Of This Item",
                icon: "error",
            });
            return;
        }

        if (quantityInput > quantity) {
            Swal.fire({
                title: "Oops!",
                text: "You Can't Order More Than Stock Item",
                icon: "error",
            });
            return;
        }

        if (madeBy.id === uid) {
            Swal.fire({
                title: "Oops!",
                text: "You Can't Order Your Own Item",
                icon: "error",
            });
            return;
        }

        const newCart = {
            image,
            foodName,
            quantity: quantityInput,
            price: totalPrice,
            addedTime,
            foodOwner: madeBy.name,
            buyerId: uid,
            buyerName: displayName,
            buyerEmail: email,
        };

        axios.post("https://bistro-bliss-server.vercel.app/carts", newCart).then((data) => {
            if (data.data.insertedId) {
                Swal.fire({
                    title: "Success",
                    text: "Ordered Food Successfully",
                    icon: "success",
                });
                navigate("/");
            }
        });

        const updatedFood = {
            timesOrdered: timesOrdered + quantityInput,
            quantity: quantity - quantityInput,
        };

        axios
            .put(`https://bistro-bliss-server.vercel.app/food/${_id}`, updatedFood)
            .then(() => {});
    };

    return (
        <div className="mx-auto container px-3 md:px-0">
            <Helmet>
                <title>Bistro Bliss | Purchase {foodName}</title>
            </Helmet>
            <div className="grid gap-3 md:gap-5 grid-cols-3 border-4 p-3 md:p-10 mb-5 rounded-3xl">
                <div className="col-span-3 lg:col-span-1">
                    <img className="w-full rounded-3xl" src={image} alt="" />
                </div>
                <div className="col-span-3 lg:col-span-2">
                    <form
                        onSubmit={handlePurchase}
                        className="md:grid md:grid-cols-2 gap-5"
                    >
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
                                value={`${totalPrice} $`}
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
                                onChange={handleQuantity}
                                value={quantityInput}
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
                                name="date"
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
                        {error ? (
                            <p className="text-red-600 font-semibold duration-300">
                                {error}
                            </p>
                        ) : (
                            ""
                        )}
                        <button className="btn border-0 bg-[#F2A64D] text-white hover:bg-[#aa7436] col-span-2 rounded-full w-full mt-5 md:mt-0">
                            Purchase
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;
