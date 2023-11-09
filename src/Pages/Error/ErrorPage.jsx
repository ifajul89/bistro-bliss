import { Link } from "react-router-dom";
import Gif404 from "../../assets/404 page.gif";
import "./ErrorPage.css";

const ErrorPage = () => {
    return (
        <div className="flex bg-[#fbfbfb] gap-1 flex-col h-screen w-full justify-center items-center">
            <div className="w-1/2">
                <img className="w-full" src={Gif404} alt="" />
            </div>
            <div className="flex gap-5 items-center">
                <h3 className="font-semibold text-4xl">
                    <span className="font-bold">404 </span>Not Found
                </h3>
                <Link to="/" className="btn bg-[#F2A64D] text-white hover:bg-[#f8a03a]">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
