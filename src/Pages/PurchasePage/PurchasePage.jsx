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

    axios
      .post("https://bistro-bliss-server.vercel.app/carts", newCart)
      .then((data) => {
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
    <div className="container mx-auto px-3 md:px-0">
      <Helmet>
        <title>Bistro Bliss | Purchase {foodName}</title>
      </Helmet>
      <div className="mb-5 grid grid-cols-3 gap-3 rounded-3xl border-4 p-3 md:gap-5 md:p-10">
        <div className="col-span-3 lg:col-span-1">
          <img className="w-full rounded-3xl" src={image} alt="" />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <form
            onSubmit={handlePurchase}
            className="gap-5 md:grid md:grid-cols-2"
          >
            <div className="w-full">
              <label className="label">
                <span className="label-text text-gray-600">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                value={foodName}
                className="input w-full rounded-full bg-gray-100 focus:outline-none"
                readOnly
                required
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-gray-600">Price</span>
              </label>
              <input
                type="text"
                name="price"
                value={`${totalPrice} $`}
                className="input w-full rounded-full bg-gray-100 focus:outline-none"
                readOnly
                required
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-gray-600">Quantity</span>
              </label>
              <input
                type="number"
                onChange={handleQuantity}
                value={quantityInput}
                name="quantity"
                placeholder="Please Select Quantity"
                className="input w-full rounded-full bg-gray-100 focus:outline-none"
                required
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-gray-600">Buying Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Please Select a Date"
                className="input w-full rounded-full bg-gray-100 focus:outline-none"
                required
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-gray-600">Buyer Name</span>
              </label>
              <input
                type="text"
                name="buyerName"
                value={displayName}
                className="input w-full rounded-full bg-gray-100 focus:outline-none"
                readOnly
                required
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-gray-600">Buyer Email</span>
              </label>
              <input
                type="text"
                name="buyerEmail"
                value={email}
                className="input w-full rounded-full bg-gray-100 focus:outline-none"
                readOnly
                required
              />
            </div>
            {error ? (
              <p className="font-semibold text-red-600 duration-300">{error}</p>
            ) : (
              ""
            )}
            <button className="btn col-span-2 mt-5 w-full rounded-full border-0 bg-primary text-white hover:bg-[#aa7436] md:mt-0">
              Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
