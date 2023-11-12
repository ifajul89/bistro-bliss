import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem/SingleItem";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
// import { useEffect, useState } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

const AllItems = () => {
    // const [dataCount, setDataCount] = useState(0);

    const { count } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    // const [foods, setFoods] = useState([]);

    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pagesNumber = [...Array(numberOfPages).keys()];

    const { isPending, data: foods } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/foods?page=${currentPage}&size=${itemsPerPage}`
            );
            return res.json();
        },
    });

    // useEffect(() => {
    //     fetch(
    //         `http://localhost:5000/foods?page=${currentPage}&size=${itemsPerPage}`
    //     )
    //         .then((res) => res.json())
    //         .then((data) => setFoods(data));
    // }, [currentPage, itemsPerPage]);

    const handleSetCurrentPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (isPending) {
        return (
            <div className="flex justify-center my-40">
                <span className="loading text-[#F2A64D] loading-dots loading-lg"></span>
            </div>
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
            <p>{currentPage}</p>
            <div className="flex justify-center gap-2 mb-5">
                {pagesNumber.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handleSetCurrentPage(pageNumber + 1)}
                        className="btn btn-sm btn-circle border-0 bg-[#F2A64D] text-white flex justify-center items-center hover:bg-[#aa7436]"
                    >
                        {pageNumber + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllItems;
