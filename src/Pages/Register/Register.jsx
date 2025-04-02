import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RegisterBg from "../../assets/register.jpg";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    setSuccess("");

    // Validation
    // Name Validation
    if (name.length < 3) {
      setError("Please Enter a Valid Name");
      return;
    }

    // Photo Url Validation
    const urlRegex =
      /^(?:https?):\/\/(\w+:? \w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+= &%! \-/]))?$/;
    if (urlRegex.test(photo) === false) {
      setError("Please Enter a valid Photo URL");
      return;
    }

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

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          setSuccess("User Created Successfully");
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          });
          Swal.fire({
            title: "Success",
            text: "User Created Successfully",
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
    <div className="container mx-auto mb-5 flex flex-col gap-3 px-3 md:flex-row md:gap-5 md:px-0 lg:gap-10 lg:p-10">
      <Helmet>
        <title>Bistro Bliss | Register</title>
      </Helmet>
      <div className="flex items-center justify-between gap-3 rounded-3xl border-4 p-2 md:w-1/3 md:flex-col md:justify-start md:gap-5 md:p-5 lg:p-10">
        <div className="w-[44px] sm:w-[70px] md:w-[170px] lg:w-[250px]">
          <img className="rounded-full" src={RegisterBg} alt="" />
        </div>
        <h3 className="font-cursive hidden text-lg font-light text-gray-500 md:inline-block">
          Hello User,
        </h3>
        <h4 className="font-cursive font bold text-center sm:text-2xl lg:text-4xl">
          Please Register
        </h4>
        <h4 className="font-cursive font bold text-center text-primary sm:text-2xl lg:text-4xl">
          Bon Appétit
        </h4>
      </div>
      <div className="rounded-3xl border-4 bg-white p-3 md:w-2/3 md:p-5 lg:p-10">
        <form onSubmit={handleRegister} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type Your Name"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="input rounded-full bg-gray-100 focus:outline-none"
              required
            />
          </div>
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
              value="Register"
            />
          </div>
        </form>
        <h3 className="mt-6 text-center text-sm font-medium sm:text-base">
          Have an account? Please{" "}
          <Link
            to="/login"
            className="font-semibold text-primary duration-300 hover:underline"
          >
            Log In
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Register;
