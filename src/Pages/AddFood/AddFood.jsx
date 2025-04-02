import { useContext } from "react";
import AddFoodBg from "../../assets/addproduct.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const id = user.uid;
    const name = form.name.value;
    const email = form.email.value;
    const foodOrigin = form.foodOrigin.value;
    const shortDescription = form.shortDescription.value;
    const newFood = {
      foodName,
      image,
      category,
      quantity,
      price,
      timesOrdered: 0,
      madeBy: { id, name, email },
      foodOrigin,
      shortDescription,
    };

    axios
      .post("https://bistro-bliss-server.vercel.app/foods", newFood)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Food Added Successfully",
            icon: "success",
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="container mx-auto mb-5 flex flex-col gap-3 px-3 md:flex-row md:gap-5 md:px-0 lg:gap-10 lg:p-10">
      <Helmet>
        <title>Bistro Bliss | Add Food</title>
      </Helmet>
      <div className="flex items-center justify-between gap-3 rounded-3xl border-4 p-2 md:w-1/3 md:flex-col md:justify-start md:gap-5 md:p-5 lg:p-10">
        <div className="w-[44px] sm:w-[70px] md:w-[170px] lg:w-[300px]">
          <img className="rounded-full" src={AddFoodBg} alt="" />
        </div>
        <h3 className="font-cursive hidden text-lg font-light text-gray-500 md:inline-block lg:text-2xl">
          Hello {user ? user?.displayName : "User"},
        </h3>
        <h4 className="font-cursive font bold text-center sm:text-2xl lg:text-5xl">
          Add a Food
        </h4>
        <h4 className="font-cursive font bold text-center text-primary sm:text-2xl lg:text-5xl">
          Bon Appétit
        </h4>
      </div>
      <div className="rounded-3xl border-4 bg-white p-3 md:w-2/3 md:p-5 lg:p-10">
        <form onSubmit={handleAddFood} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Food Name</span>
            </label>
            <input
              type="text"
              name="foodName"
              placeholder="Type Food Name"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Food Photo Url</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter Food Photo URL"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Food Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter Food Category"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter Food Quantity"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter Food Price"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Made By</span>
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                name="name"
                value={user?.displayName}
                className="input w-full rounded-full bg-gray-100 focus:outline-none"
                readOnly
              />
              <input
                type="text"
                name="email"
                value={user?.email}
                className="input w-full rounded-full bg-gray-100 focus:outline-none"
                readOnly
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Food Origin</span>
            </label>
            <input
              type="text"
              name="foodOrigin"
              placeholder="Food Origin"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Food Description</span>
            </label>
            <textarea
              type="text"
              name="shortDescription"
              placeholder="Food Description"
              className="input h-20 w-full rounded-xl bg-gray-100 p-3 focus:outline-none"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn rounded-full border-0 bg-primary text-white hover:bg-[#d68a34]">
              Add Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
