import SingleItem from "./SingleItem/SingleItem";
import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./AllItems.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

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
        `https://bistro-bliss-server.vercel.app/foods?search=${search}&page=${currentPage}&size=${itemsPerPage}`,
      );
      return res.json();
    },
  });

  if (isPending) {
    return (
      <div className="my-20 flex justify-center duration-300">
        <span className="loading loading-dots loading-lg text-[#F2A64D]"></span>
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
    if (currentPage < pagesNumber.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto px-3 md:px-0">
      <Helmet>
        <title>Bistro Bliss | All Items</title>
      </Helmet>
      <h3 className="font-cursive rounded-2xl border-4 bg-white px-4 py-3 text-center font-semibold md:text-base lg:text-lg">
        ALL ITEMS
      </h3>
      <form
        onSubmit={handleSearch}
        className="mt-5 flex w-full justify-center gap-2"
      >
        <input
          type="text"
          name="search"
          placeholder="Search Your Food"
          className="input w-full rounded-full bg-gray-100 focus:outline-none md:w-1/2"
        />
        <button className="btn btn-circle border-0 bg-[#F2A64D] text-white hover:bg-[#aa7436]">
          <BiSearchAlt className="text-xl"></BiSearchAlt>
        </button>
      </form>
      <div>{error ? <h3>{error}</h3> : ""}</div>
      <div className="my-5 grid gap-5 md:grid-cols-3">
        {foods.map((food) => (
          <SingleItem key={food._id} food={food}></SingleItem>
        ))}
      </div>
      <div className="mb-5 flex justify-center gap-2">
        <button
          onClick={handlePrevious}
          className="btn btn-circle btn-sm flex items-center justify-center border-0 bg-[#F2A64D] text-white hover:bg-[#aa7436]"
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        {pagesNumber.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleSetCurrentPage(pageNumber)}
            className={`btn btn-circle btn-sm flex items-center justify-center border-0 bg-[#F2A64D] text-white hover:bg-[#aa7436] ${
              currentPage === pageNumber ? "selected" : ""
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="btn btn-circle btn-sm flex items-center justify-center border-0 bg-[#F2A64D] text-white hover:bg-[#aa7436]"
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default AllItems;
