const AddFood = () => {
    return (
        <div>
            <div className="register-bg">
                <div className="bg-gradient-to-r from-white to-transparent">
                    <form className="bg-white w-[400px]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="food_name"
                                placeholder="Type Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Enter Quantity"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="number"
                                name="u"
                                placeholder="Type Your Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Type Your Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn"
                                type="submit"
                                value="Register"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;
