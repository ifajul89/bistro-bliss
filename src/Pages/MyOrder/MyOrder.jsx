import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import CartItem from "./CartItem/CartItem";
import axios from "axios";
import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";

const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const [cartFoods, setCartFoods] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/carts/${user?.uid}`)
            .then((res) => setCartFoods(res.data));
    }, [user?.uid]);

    const handleDeleteCart = (id) => {
        axios.delete(`http://localhost:5000/carts/${id}`).then((data) => {
            if (data.data.deletedCount > 0) {
                const remaining = cartFoods.filter(
                    (cartFood) => cartFood._id !== id
                );
                setCartFoods(remaining);
            }
        });
    };

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Bistro Bliss | My Order</title>
            </Helmet>
            {cartFoods?.length <= 0 ? (
                <div className="flex justify-center items-center h-80">
                    <h3 className="text-gray-500 text-xl">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <i>Cart is empty</i>
                    </h3>
                </div>
            ) : (
                <div className="px-3 md:px-0 space-y-3 mb-3">
                    {cartFoods.map((cart) => (
                        <CartItem
                            key={cart._id}
                            cart={cart}
                            handleDeleteCart={handleDeleteCart}
                        ></CartItem>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrder;
