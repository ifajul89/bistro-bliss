import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiSolidCartAlt } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Logged Out Successfully",
          icon: "success",
          confirmButtonColor: "#F2A64D",
        });
        navigate("/");
      })
      .catch(() => {});
  };

  const navItems = (
    <>
      <li>
        <NavLink className="duration-300 hover:text-primary" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="duration-300 hover:text-primary" to="/all-items">
          All Items
        </NavLink>
      </li>
      <li>
        <NavLink className="duration-300 hover:text-primary" to="/blog">
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="mx-3 my-3 flex items-center justify-around rounded-full border-4 px-3 md:mx-0 md:px-10">
        <div className="flex items-center">
          <ul className="hidden gap-5 font-medium lg:flex">{navItems}</ul>
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost drawer-button btn-sm flex items-center lg:hidden"
          >
            <HiMenuAlt1 className="text-3xl"></HiMenuAlt1>
          </label>
        </div>
        <Link
          to="/"
          className="logo flex flex-1 items-center justify-start leading-none lg:justify-center"
        >
          <h3 className="text-3xl text-primary md:text-6xl">B</h3>
          <div className="text-sm font-semibold leading-none md:text-xl">
            <h3>istro</h3>
            <h3>liss~</h3>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <Link to="/my-order">
            <BiSolidCartAlt className="text-xl text-primary"></BiSolidCartAlt>
          </Link>
          <div className="dropdown dropdown-end dropdown-bottom">
            <label tabIndex={0} className="m-1">
              {user ? (
                <img
                  className="w-10 rounded-full border-2"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <MdOutlinePersonOutline className="text-xl"></MdOutlinePersonOutline>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box z-[1] w-40 bg-base-100 p-2 shadow"
            >
              <li>
                <Link to="/add-food">Add a food</Link>
              </li>
              <li>
                <Link to="/my-added-food">My added food </Link>
              </li>
            </ul>
          </div>
          <div className="hidden items-center gap-5 lg:flex">
            {user ? (
              <>
                <span>|</span>
                <button
                  onClick={handleLogOut}
                  className="text-lg font-medium duration-300 hover:text-primary"
                  to="/login"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  className="text-lg font-medium duration-300 hover:text-primary"
                  to="/login"
                >
                  Log In
                </Link>
                <span>|</span>
                <Link
                  className="text-lg font-medium duration-300 hover:text-primary"
                  to="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
        <div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{/* Page content here */}</div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="min-h-full w-40 bg-white p-4 text-base-content">
                {/* Sidebar content here */}
                <h3 className="sidebar-title my-5 text-lg font-semibold">
                  Go to Page,
                </h3>
                <div className="space-y-1">
                  <li>
                    <NavLink className="duration-300 hover:text-primary" to="/">
                      Home
                    </NavLink>
                  </li>
                  <div className="h-[1px] w-full bg-slate-300"></div>
                  <li>
                    <NavLink
                      className="duration-300 hover:text-primary"
                      to="/all-items"
                    >
                      All Items
                    </NavLink>
                  </li>
                  <div className="h-[1px] w-full bg-slate-300"></div>
                  <li>
                    <NavLink
                      className="duration-300 hover:text-primary"
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <div className="h-[1px] w-full bg-slate-300"></div>
                  {user ? (
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="font-medium duration-300 hover:text-primary"
                        to="/login"
                      >
                        Log Out
                      </button>
                    </li>
                  ) : (
                    <>
                      <li>
                        <NavLink
                          className="font-medium duration-300 hover:text-primary"
                          to="/login"
                        >
                          Log In
                        </NavLink>
                      </li>
                      <div className="h-[1px] w-full bg-slate-300"></div>
                      <li>
                        <NavLink
                          className="font-medium duration-300 hover:text-primary"
                          to="/register"
                        >
                          Register
                        </NavLink>
                      </li>
                    </>
                  )}
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
