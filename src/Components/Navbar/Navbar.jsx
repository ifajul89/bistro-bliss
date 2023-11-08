import { Link, NavLink } from "react-router-dom";
import DefaultUser from "../../assets/default-user.jpg";

const Navbar = () => {
    const navItems = (
        <>
            <li>
                <NavLink className="hover:text-pink-700 duration-300" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="hover:text-pink-700 duration-300" to="/">
                    All Foods
                </NavLink>
            </li>
            <li>
                <NavLink className="hover:text-pink-700 duration-300" to="/">
                    Blog
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="container my-2 mx-auto flex justify-between gap-10 items-center bg-base-100">
            <div className="flex items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link
                    to="/"
                    className="normal-case text-2xl font-semibold leading-none"
                >
                    <h4>fusion</h4>
                    <h4 className="text-3xl">
                        food
                        <span className="font-black leading-none text-pink-700">
                            .
                        </span>
                    </h4>
                </Link>
            </div>
            <div className="flex-1 hidden lg:flex">
                <ul className="flex gap-5 font-semibold text-lg text-black">
                    {navItems}
                </ul>
            </div>
            <div className="justify-end flex items-center gap-3">
                <div className="bg-pink-700 rounded-full p-[2px]">
                    <img
                        className="rounded-full w-10"
                        src={DefaultUser}
                        alt=""
                    />
                </div>
                <Link
                    to="login"
                    className="text-lg text-black font-semibold hover:text-pink-700 duration-300"
                >
                    Log In
                </Link>
                <span className="text-lg">|</span>
                <Link
                    to="register"
                    className="text-lg text-black font-semibold hover:text-pink-700 duration-300"
                >
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
