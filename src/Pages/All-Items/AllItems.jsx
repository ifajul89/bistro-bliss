import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem/SingleItem";

const AllItems = () => {
    const { isPending, data: foods } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/foods");
            return res.json();
        },
    });

    console.log(foods);

    if (isPending) {
        return (
            <span className="loading text-[#F2A64D] loading-dots loading-lg"></span>
        );
    }

    return (
        <div className="container mx-auto">
            <div>{foods.length}</div>

            <div className="grid grid-cols-3 gap-5">
                {foods.map((food) => (
                    <SingleItem key={food._id} food={food}></SingleItem>
                ))}
            </div>
        </div>
    );
};

export default AllItems;
