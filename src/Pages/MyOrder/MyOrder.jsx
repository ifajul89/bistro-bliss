import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import CartItem from "./CartItem/CartItem";

const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const { isPending, data: carts } = useQuery({
        queryKey: ["carts", user?.uid],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts/${user?.uid}`);
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
            {carts.length <= 0 ? (
                <div className="flex justify-center items-center h-80">
                    <h3 className="text-gray-500 text-xl">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <i>Cart is empty</i>
                    </h3>
                </div>
            ) : (
                <div className="px-3 md:px-0 space-y-3 mb-3">
                    {carts.map((cart) => (
                        <CartItem key={cart._id} cart={cart}></CartItem>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrder;
