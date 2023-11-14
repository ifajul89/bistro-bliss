import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AddedFood from "./AddedFood/AddedFood";
import axios from "axios";

const MyAddedFood = () => {
    const { user } = useContext(AuthContext);

    // const { isPending, data: addedFoods } = useQuery({
    //     queryKey: ["cartFoods"],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/foods/${user.emial}`);
    //         return res.json();
    //     },
    // });

    const [addedFoods, setAddedFoods] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/foods/${user.email}`)
            .then((data) => setAddedFoods(data.data));
    }, [user.email]);

    // if (isPending) {
    //     return (
    //         <div className="flex justify-center my-20 duration-300">
    //             <span className="loading text-[#F2A64D] loading-dots loading-lg"></span>
    //         </div>
    //     );
    // }

    return (
        <div className="container mx-auto">
            <div className="px-3 md:px-0">
                {addedFoods.map((addedFood) => (
                    <AddedFood key={addedFood._id}></AddedFood>
                ))}
            </div>
        </div>
    );
};

export default MyAddedFood;
