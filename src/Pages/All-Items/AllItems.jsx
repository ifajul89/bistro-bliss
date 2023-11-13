import SingleItem from "./SingleItem/SingleItem";
import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./AllItems.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const AllItems = () => {
    const { count } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState("");

    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pagesNumber = [...Array(numberOfPages).keys()];
    const [error, setError] = useState("");

    const { isPending, data: foods } = useQuery({
        queryKey: ["foods", search, currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/foods?search=${search}&page=${currentPage}&size=${itemsPerPage}`
            );
            return res.json();
        },
    });

    if (isPending) {
        return (
            <div className="flex justify-center my-20 duration-300">
                <span className="loading text-[#F2A64D] loading-dots loading-lg"></span>
            </div>
        );
    }

    if (foods.length < 0) {
        setError("Sorry!! We don't have that item");
        return;
    }

    const handleSetCurrentPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchFieldValue = e.target.search.value;
        setSearch(searchFieldValue);
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < 9) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="container mx-auto px-3 md:px-0">
            <h3 className="py-3 px-4  md:text-base lg:text-lg font-cursive font-semibold bg-white rounded-2xl border-4 text-center ">
                ALL ITEMS
            </h3>
            <form
                onSubmit={handleSearch}
                className="flex justify-center w-full gap-2 mt-5"
            >
                <input
                    type="text"
                    name="search"
                    placeholder="Search Your Food"
                    className="input rounded-full w-full md:w-1/2 focus:outline-none bg-gray-100"
                />
                <button className="btn btn-circle border-0 bg-[#F2A64D] text-white hover:bg-[#aa7436]">
                    <BiSearchAlt className="text-xl"></BiSearchAlt>
                </button>
            </form>
            <div>{error ? <h3>{error}</h3> : ""}</div>
            <div className="grid md:grid-cols-3 gap-5 my-5">
                {foods.map((food) => (
                    <SingleItem key={food._id} food={food}></SingleItem>
                ))}
            </div>
            <div className="flex justify-center gap-2 mb-5">
                <button
                    onClick={handlePrevious}
                    className="btn btn-sm btn-circle border-0 bg-[#F2A64D] text-white flex justify-center items-center hover:bg-[#aa7436]"
                >
                    <FaArrowLeft></FaArrowLeft>
                </button>
                {pagesNumber.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handleSetCurrentPage(pageNumber)}
                        className={`btn btn-sm btn-circle border-0 bg-[#F2A64D] text-white flex justify-center items-center hover:bg-[#aa7436] ${
                            currentPage === pageNumber ? "selected" : ""
                        }`}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    onClick={handleNext}
                    className="btn btn-sm btn-circle border-0 bg-[#F2A64D] text-white flex justify-center items-center hover:bg-[#aa7436]"
                >
                    <FaArrowRight></FaArrowRight>
                </button>
            </div>
        </div>
    );
};

export default AllItems;
