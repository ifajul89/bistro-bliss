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
            confirmButtonColor: "#F2A64D"
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
            confirmButtonColor: "#F2A64D"
          });
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container mx-auto mb-5 flex flex-col gap-3 px-3 md:flex-row md:gap-5 md:px-0 lg:gap-10 lg:p-10">
      <Helmet>
        <title>Bistro Bliss | Log In</title>
      </Helmet>
      <div className="flex items-center justify-between gap-3 rounded-3xl border-4 p-2 md:w-1/3 md:flex-col md:justify-start md:gap-5 md:p-5 lg:p-10">
        <div className="w-[44px] sm:w-[70px] md:w-[170px] lg:w-[250px]">
          <img className="rounded-full" src={RegisterBg} alt="" />
        </div>
        <h3 className="font-cursive hidden text-lg font-light text-gray-500 md:inline-block">
          Hello User,
        </h3>
        <h4 className="font-cursive font bold text-center sm:text-2xl lg:text-4xl">
          Please Log In
        </h4>
        <h4 className="font-cursive font bold text-center text-primary sm:text-2xl lg:text-4xl">
          Bon Appétit
        </h4>
      </div>
      <div className="rounded-3xl border-4 bg-white p-3 md:w-2/3 md:p-5 lg:p-10">
        <form onSubmit={handleLogIn} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type Your Email"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type Your Password"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="mt-4">
            {error ? <p className="font-semibold text-red-600">{error}</p> : ""}
            {success ? (
              <p className="font-semibold text-green-600">{success}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mt-4 flex items-center gap-1">
            <input type="checkbox" name="" id="" required />
            <h3>
              I Accept The{" "}
              <a className="text-primary underline" href="#">
                Term and Conditions
              </a>
            </h3>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn rounded-full border-0 bg-primary text-white hover:bg-[#d68a34]"
              type="submit"
              value="Log In"
            />
          </div>
        </form>
        <div className="my-6 flex items-center gap-2">
          <div className="h-[2px] w-full rounded-full bg-slate-300"></div>
          <h3 className="text-lg font-medium text-slate-400">Or,</h3>
          <div className="h-[2px] w-full rounded-full bg-slate-300"></div>
        </div>
        <button
          className="btn w-full rounded-full"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle></FcGoogle>Continue With Google
        </button>
        <h3 className="mt-6 text-center text-sm font-medium sm:text-base">
          Are you new here? Please{" "}
          <Link
            to="/register"
            className="font-semibold text-primary duration-300 hover:underline"
          >
            Register
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Register;
