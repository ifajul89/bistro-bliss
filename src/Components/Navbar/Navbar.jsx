import { Link, NavLink } from "react-router-dom";
import DefaultUser from "../../assets/default-user.jpg";
import { LuMenuSquare } from "react-icons/lu";
import Login from "../../Pages/LogIn/Login";
import Register from "../../Pages/Register/Register";

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
        <div className="container px-3 md:px-0 my-1 md:my-2 mx-auto flex justify-between gap-10 items-center bg-base-100">
            <div className="flex items-center">
                <div className="drawer">
                    <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="lg:hidden">
                            <LuMenuSquare className="text-pink-700 text-2xl md:text-4xl md:ml-3 mr-3"></LuMenuSquare>
                        </label>
                    </div>
                    <div className="drawer-side lg:hidden">
                        <label
                            htmlFor="my-drawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="p-4 w-52 flex flex-col justify-between min-h-full bg-base-200 rounded-r-lg text-lg font-semibold">
                            {/* Sidebar content here */}
                            <div className="space-y-1">
                                <li>
                                    <NavLink
                                        className="hover:text-pink-700 duration-300"
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <div className="h-[1px] w-full bg-gray-300"></div>
                                <li>
                                    <NavLink
                                        className="hover:text-pink-700 duration-300"
                                        to="/"
                                    >
                                        All Foods
                                    </NavLink>
                                </li>
                                <div className="h-[1px] w-full bg-gray-300"></div>
                                <li>
                                    <NavLink
                                        className="hover:text-pink-700 duration-300"
                                        to="/"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <div className="h-[1px] w-full bg-gray-300"></div>
                            </div>

                            <div className="flex gap-2 justify-center">
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
                        </ul>
                    </div>
                </div>
                <Link
                    to="/"
                    className="normal-case  md:text-2xl font-semibold leading-none"
                >
                    <h4>fusion</h4>
                    <h4 className="text-lg md:text-3xl">
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
                <div className="bg-pink-700 rounded-full p-[1px]">
                    <img
                        className="rounded-full w-8 md:w-10"
                        src={DefaultUser}
                        alt=""
                    />
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className="text-lg text-black font-semibold hover:text-pink-700 duration-300"
                        >
                            Log In
                        </Link>
                        <span className="text-lg">|</span>
                        <Link
                            to="/register"
                            className="text-lg text-black font-semibold hover:text-pink-700 duration-300"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
