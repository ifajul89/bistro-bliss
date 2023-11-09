import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RegisterBg from "../../assets/register.jpg";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mx-auto flex flex-col mb-5 md:flex-row gap-3 md:gap-5 lg:gap-10 lg:p-10 px-3 md:px-0">
            <div className="border-4 p-2 md:p-5 lg:p-10 flex justify-between md:justify-start md:flex-col items-center gap-3 md:gap-5 rounded-3xl md:w-1/3">
                <div className="w-[44px] sm:w-[70px] md:w-[170px] lg:w-[250px]">
                    <img className="rounded-full" src={RegisterBg} alt="" />
                </div>
                <h3 className="font-cursive hidden md:inline-block font-light text-lg text-gray-500">
                    Hello User,
                </h3>
                <h4 className="font-cursive font bold text-2xl lg:text-4xl text-center">
                    Please Register
                </h4>
                <h4 className="font-cursive font bold text-2xl lg:text-4xl text-center text-[#F2A64D]">
                    Bon Appétit
                </h4>
            </div>
            <div className="bg-white border-4 md:w-2/3 rounded-3xl p-3 md:p-5 lg:p-10">
                <form onSubmit={handleRegister} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Type Your Name"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Photo
                            </span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter Photo URL"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Type Your Email"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Type Your Password"
                            className="input rounded-full focus:outline-none bg-gray-100"
                            required
                        />
                    </div>
                    <div className="mt-4 flex items-center gap-1">
                        <input type="checkbox" name="" id="" />
                        <h3>
                            I Accept The{" "}
                            <a className="underline text-[#F2A64D]" href="#">
                                Term and Conditions
                            </a>
                        </h3>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            className="btn rounded-full bg-[#F2A64D] text-white border-0 hover:bg-[#d68a34]"
                            type="submit"
                            value="Register"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
