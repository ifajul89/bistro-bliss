import { Link } from "react-router-dom";
import Gif404 from "../../assets/404 page.gif";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-1 bg-[#fbfbfb]">
      <div className="w-1/2">
        <img className="w-full" src={Gif404} alt="" />
      </div>
      <div className="flex items-center gap-5">
        <h3 className="text-4xl font-semibold">
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
