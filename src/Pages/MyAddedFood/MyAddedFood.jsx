import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AddedFood from "./AddedFood/AddedFood";

const MyAddedFood = () => {
    const { user } = useContext(AuthContext);

    const { isPending, data: addedFoods } = useQuery({
        queryKey: ["cartFoods"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/foods/${user?.uid}`);
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

    return (
        <div className="container mx-auto">
            {addedFoods.length <= 0 ? (
                <div className="flex justify-center items-center h-80">
                    <h3 className="text-gray-500 text-xl">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <i>You haven't added any food</i>
                    </h3>
                </div>
            ) : (
                <div className="px-3 md:px-0 space-y-3 mb-3">
                    {addedFoods.map((addedFood) => (
                        <AddedFood
                            key={addedFood._id}
                            addedFood={addedFood}
                        ></AddedFood>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyAddedFood;
