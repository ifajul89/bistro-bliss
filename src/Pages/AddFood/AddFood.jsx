import { useContext } from "react";
import AddFoodBg from "../../assets/addproduct.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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

        axios.post("http://localhost:5000/foods", newFood).then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
                Swal.fire({
                    title: "Success",
                    text: "Ordered Food Successfully",
                    icon: "success",
                });
                navigate("/");
            }
        });
    };

    return (
        <div className="container mx-auto flex flex-col mb-5 md:flex-row gap-3 md:gap-5 lg:gap-10 lg:p-10 px-3 md:px-0">
            <div className="border-4 p-2 md:p-5 lg:p-10 flex justify-between md:justify-start md:flex-col items-center gap-3 md:gap-5 rounded-3xl md:w-1/3">
                <div className="w-[44px] sm:w-[70px] md:w-[170px] lg:w-[300px]">
                    <img className="rounded-full" src={AddFoodBg} alt="" />
                </div>
                <h3 className="font-cursive hidden md:inline-block font-light text-lg lg:text-2xl text-gray-500">
                    Hello {user ? user?.displayName : "User"},
                </h3>
                <h4 className="font-cursive font bold sm:text-2xl lg:text-5xl text-center">
                    Add a Food
                </h4>
                <h4 className="font-cursive font bold sm:text-2xl lg:text-5xl text-center text-[#F2A64D]">
                    Bon Appétit
                </h4>
            </div>
            <div className="bg-white border-4 md:w-2/3 rounded-3xl p-3 md:p-5 lg:p-10">
                <form onSubmit={handleAddFood} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Food Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="foodName"
                            placeholder="Type Food Name"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Food Photo Url
                            </span>
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter Food Photo URL"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Food Category
                            </span>
                        </label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Enter Food Category"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Quantity
                            </span>
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Enter Food Quantity"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Price
                            </span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter Food Price"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Made By
                            </span>
                        </label>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                name="name"
                                value={user?.displayName}
                                className="input rounded-full w-full focus:outline-none bg-gray-100"
                                readOnly
                            />
                            <input
                                type="text"
                                name="email"
                                value={user?.email}
                                className="input rounded-full w-full focus:outline-none bg-gray-100"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Food Origin
                            </span>
                        </label>
                        <input
                            type="text"
                            name="foodOrigin"
                            placeholder="Food Origin"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Food Description
                            </span>
                        </label>
                        <textarea
                            type="text"
                            name="shortDescription"
                            placeholder="Food Description"
                            className="input rounded-xl p-3 w-full h-20 focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn rounded-full bg-[#F2A64D] text-white border-0 hover:bg-[#d68a34]">
                            Add Food
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
