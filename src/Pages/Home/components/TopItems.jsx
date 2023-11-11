import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import TopItem from "./TopItem";

const TopItems = () => {
    const { isPending, data: top6Data } = useQuery({
        queryKey: ["top6Data"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/top-foods");
            return res.json();
        },
    });

    if (isPending) {
        return (
            <span className="loading text-[#F2A64D] loading-dots loading-lg"></span>
        );
    }

    return (
        <div className="container mx-auto px-3 md:px-0 mt-5 lg:mt-10">
            <h3 className="py-3 px-4  md:text-base lg:text-lg font-cursive semibold bg-white rounded-2xl border-4 inline-block ">
                OUR TOP FOODS
            </h3>
            <div className="grid md:grid-cols-3 gap-5 my-5">
                {top6Data.map((data) => (
                    <TopItem key={data._id} food={data}></TopItem>
                ))}
            </div>
            <div className="flex justify-center">
                <Link
                    className="btn bg-[#F2A64D] text-white hover:bg-[#F2A64D] border-0"
                    to="/all-items"
                >
                    See All
                </Link>
            </div>
        </div>
    );
};

export default TopItems;
