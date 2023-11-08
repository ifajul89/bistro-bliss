import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import AuthRoot from "./AuthRoot";

const Root = () => {
    return (
        <div className="duration-300">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <AuthRoot></AuthRoot>
        </div>
    );
};

export default Root;