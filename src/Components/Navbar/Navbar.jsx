import { Link, NavLink } from "react-router-dom";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiSolidCartAlt } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
    const navItems = (
        <>
            <li>
                <NavLink className="hover:text-[#F2A64D] duration-300" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="hover:text-[#F2A64D] duration-300"
                    to="/all-items"
                >
                    All Items
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="hover:text-[#F2A64D] duration-300"
                    to="/blog"
                >
                    Blog
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="container mx-auto">
            <div className="flex justify-around items-center mx-3 md:mx-0 border-4 p-2 my-3 rounded-full px-3 md:px-10">
                <div className="flex items-center">
                    <ul className="hidden lg:flex gap-5 font-medium">
                        {navItems}
                    </ul>
                    <label
                        htmlFor="my-drawer"
                        className="btn btn-sm btn-ghost flex items-center lg:hidden drawer-button"
                    >
                        <HiMenuAlt1 className="text-3xl"></HiMenuAlt1>
                    </label>
                </div>
                <Link
                    to="/"
                    className="flex logo flex-1 justify-start lg:justify-center leading-none items-center"
                >
                    <h3 className="text-3xl md:text-6xl text-[#F2A64D]">B</h3>
                    <div className="text-sm md:text-xl font-semibold leading-none">
                        <h3>istro</h3>
                        <h3>liss~</h3>
                    </div>
                </Link>
                <div className="flex gap-5 items-center">
                    <BiSolidCartAlt className="text-xl text-[#F2A64D]"></BiSolidCartAlt>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="m-1">
                            <MdOutlinePersonOutline className="text-xl"></MdOutlinePersonOutline>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
                        >
                            <li>
                                <Link to="/add-food">Add a food</Link>
                            </li>
                            <li>
                                <Link>My added food </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex items-center gap-5">
                        <Link
                            className="text-lg font-medium hover:text-[#F2A64D] duration-300"
                            to="/login"
                        >
                            Log In
                        </Link>
                        <span>|</span>
                        <Link
                            className="text-lg font-medium hover:text-[#F2A64D] duration-300"
                            to="/register"
                        >
                            Register
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="drawer">
                        <input
                            id="my-drawer"
                            type="checkbox"
                            className="drawer-toggle"
                        />
                        <div className="drawer-content">
                            {/* Page content here */}
                        </div>
                        <div className="drawer-side">
                            <label
                                htmlFor="my-drawer"
                                aria-label="close sidebar"
                                className="drawer-overlay"
                            ></label>
                            <ul className="p-4 w-40 min-h-full bg-white text-base-content">
                                {/* Sidebar content here */}
                                <h3 className="sidebar-title font-semibold text-lg my-5">
                                    Go to Page,
                                </h3>
                                <div className="space-y-1">
                                    <li>
                                        <NavLink
                                            className="hover:text-[#F2A64D] duration-300"
                                            to="/"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <div className="h-[1px] w-full bg-slate-300"></div>
                                    <li>
                                        <NavLink
                                            className="hover:text-[#F2A64D] duration-300"
                                            to="/all-items"
                                        >
                                            All Items
                                        </NavLink>
                                    </li>
                                    <div className="h-[1px] w-full bg-slate-300"></div>
                                    <li>
                                        <NavLink
                                            className="hover:text-[#F2A64D] duration-300"
                                            to="/blog"
                                        >
                                            Blog
                                        </NavLink>
                                    </li>
                                    <div className="h-[1px] w-full bg-slate-300"></div>
                                    <li>
                                        <NavLink
                                            className="font-medium hover:text-[#F2A64D] duration-300"
                                            to="/login"
                                        >
                                            Log In
                                        </NavLink>
                                    </li>
                                    <div className="h-[1px] w-full bg-slate-300"></div>
                                    <li>
                                        <NavLink
                                            className="font-medium hover:text-[#F2A64D] duration-300"
                                            to="/register"
                                        >
                                            Register
                                        </NavLink>
                                    </li>
                                    <div className="h-[1px] w-full bg-slate-300"></div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
