import SingleItem from "./SingleItem/SingleItem";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AllItems = () => {
    // const [dataCount, setDataCount] = useState(0);

    const { count } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");

    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pagesNumber = [...Array(numberOfPages).keys()];

    useEffect(() => {
        axios.get( `http://localhost:5000/foods?search=${search}&page=${currentPage}&size=${itemsPerPage}`)
        .then(data => {
            setFoods(data.data)
        })
    }, [search, currentPage, itemsPerPage])

    const handleSetCurrentPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchFieldValue = e.target.search.value;
        setSearch(searchFieldValue);
    };

    return (
        <div className="container mx-auto px-3 md:px-0">
            <h3 className="py-3 px-4  md:text-base lg:text-lg font-cursive font-semibold bg-white rounded-2xl border-4 text-center ">
                ALL ITEMS
            </h3>
            <form onSubmit={handleSearch} className="flex">
                <div className="form-control">
                    <input
                        type="text"
                        name="search"
                        className="input rounded-full focus:outline-none bg-gray-100"
                    />
                </div>
                <input className="btn" type="submit" value="Search" />
            </form>
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
