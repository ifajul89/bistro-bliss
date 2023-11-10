import { Link } from "react-router-dom";

const TopItems = () => {



    return (
        <div className="container mx-auto">
            <h3 className="py-3 px-4  md:text-base lg:text-lg font-cursive semibold bg-white rounded-2xl border-4 inline-block ">
                OUR TOP FOODS
            </h3>
            <div className="grid"></div>
            <div className="flex justify-center">
                <Link className="btn bg-[#F2A64D] text-white hover:bg-[#F2A64D] border-0" to="/all-items">See All</Link>
            </div>
        </div>
    );
};

export default TopItems;
