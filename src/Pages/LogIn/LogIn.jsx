import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RegisterBg from "../../assets/register.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError("");
        setSuccess("");

        // Validation
        // Email Validation
        const emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailRegex.test(email) === false) {
            setError("Please Enter a Valid Email Address");
        }

        // Password Validation
        if (password.length < 8) {
            setError("Password Must Have at least 8 Characters");
            return;
        }

        const smallLetter = /^(?=.*[a-z]).+$/;
        if (smallLetter.test(password) === false) {
            setError("Password Must Have a Small Letter");
            return;
        }

        const capitalLetter = /^(?=.*[A-Z]).+$/;
        if (capitalLetter.test(password) === false) {
            setError("Password Must Have a Capital Letter");
            return;
        }

        const specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;
        if (specialCharacterRegex.test(password) === false) {
            setError("Password Must Have A Special Character");
            return;
        }

        signInUser(email, password)
            .then((result) => {
                if (result.user) {
                    setSuccess("Signed In Successfully");
                    Swal.fire({
                        title: "Success",
                        text: "Signed In Successfully",
                        icon: "success",
                    });
                    navigate(location?.state ? location.state : "/");
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                if (result.user) {
                    setSuccess("Signed In Successfully");
                    Swal.fire({
                        title: "Success",
                        text: "Signed In Successfully",
                        icon: "success",
                    });
                    navigate(location?.state ? location.state : "/");
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="container mx-auto flex flex-col mb-5 md:flex-row gap-3 md:gap-5 lg:gap-10 lg:p-10 px-3 md:px-0">
            <Helmet>
                <title>Bistro Bliss | Log In</title>
            </Helmet>
            <div className="border-4 p-2 md:p-5 lg:p-10 flex justify-between md:justify-start md:flex-col items-center gap-3 md:gap-5 rounded-3xl md:w-1/3">
                <div className="w-[44px] sm:w-[70px] md:w-[170px] lg:w-[250px]">
                    <img className="rounded-full" src={RegisterBg} alt="" />
                </div>
                <h3 className="font-cursive hidden md:inline-block font-light text-lg text-gray-500">
                    Hello User,
                </h3>
                <h4 className="font-cursive font bold sm:text-2xl lg:text-4xl text-center">
                    Please Log In
                </h4>
                <h4 className="font-cursive font bold sm:text-2xl lg:text-4xl text-center text-[#F2A64D]">
                    Bon Appétit
                </h4>
            </div>
            <div className="bg-white border-4 md:w-2/3 rounded-3xl p-3 md:p-5 lg:p-10">
                <form onSubmit={handleLogIn} className="">
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
                    <div className="mt-4">
                        {error ? (
                            <p className="text-red-600 font-semibold">
                                {error}
                            </p>
                        ) : (
                            ""
                        )}
                        {success ? (
                            <p className="text-green-600 font-semibold">
                                {success}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="mt-4 flex items-center gap-1">
                        <input type="checkbox" name="" id="" required />
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
                <div className="flex gap-2 items-center my-6">
                    <div className="h-[2px] w-full bg-slate-300 rounded-full"></div>
                    <h3 className="text-slate-400 text-lg font-medium">Or,</h3>
                    <div className="h-[2px] w-full bg-slate-300 rounded-full"></div>
                </div>
                <button
                    className="btn rounded-full w-full"
                    onClick={handleGoogleSignIn}
                >
                    <FcGoogle></FcGoogle>Continue With Google
                </button>
                <h3 className="font-medium text-sm sm:text-base text-center mt-6">
                    Are you new here? Please{" "}
                    <Link
                        to="/register"
                        className="text-[#F2A64D] font-semibold hover:underline duration-300"
                    >
                        Register
                    </Link>
                </h3>
            </div>
        </div>
    );
};

export default Register;
