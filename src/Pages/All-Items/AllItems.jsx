import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem/SingleItem";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

const AllItems = () => {
    const [dataCount, setDataCount] = useState();

    const { isPending, data: foods } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/foods");
            return res.json();
        },
    });

    // useEffect(() => {
    //     fetch("http:localhost:5000/foods-count")
    // .then((res) => res.json())
    // .then((data) => setDataCount(data));
    // }, []);

    // console.log(dataCount);

    // const itemsPerPage = 9;
    // const numberOfPages = dataCount / itemsPerPage;
    // const pagesNumber = [...Array(numberOfPages).keys()];

    // console.log(pagesNumber);

    if (isPending) {
        return (
            <span className="loading text-[#F2A64D] loading-dots loading-lg"></span>
        );
    }

    return (
        <div className="container mx-auto px-3 md:px-0">
            <h3 className="py-3 px-4  md:text-base lg:text-lg font-cursive font-semibold bg-white rounded-2xl border-4 text-center ">
                ALL ITEMS
            </h3>
            <div className="grid md:grid-cols-3 gap-5 my-5">
                {foods.map((food) => (
                    <SingleItem key={food._id} food={food}></SingleItem>
                ))}
            </div>
        </div>
    );
};


export default AllItems;
