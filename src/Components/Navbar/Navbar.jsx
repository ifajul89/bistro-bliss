import { Link, NavLink } from "react-router-dom";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiSolidCartAlt } from "react-icons/bi";

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
        <div className="flex justify-around items-center border-4 container mx-auto p-2 my-3 rounded-t-[50px] rounded-b-3xl">
            <div>
                <ul className="flex gap-5 font-medium">{navItems}</ul>
            </div>
            <div className="flex logo leading-none items-center">
                <h3 className="text-6xl">B</h3>
                <div className="text-xl font-semibold leading-none">
                    <h3>istro</h3>
                    <h3>liss~</h3>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <BiSolidCartAlt className="text-xl text-[#F2A64D]"></BiSolidCartAlt>
                <MdOutlinePersonOutline className="text-xl"></MdOutlinePersonOutline>
                <Link className="text-lg font-medium hover:text-[#F2A64D] duration-300" to="/login">Log In</Link>
                <span>|</span>
                <Link className="text-lg font-medium hover:text-[#F2A64D] duration-300" to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;
