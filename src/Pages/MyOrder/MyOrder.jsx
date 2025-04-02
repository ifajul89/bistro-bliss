import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import CartItem from "./CartItem/CartItem";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const [cartFoods, setCartFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/carts/?id=${user?.uid}`, {
        withCredentials: true,
      })
      .then((res) => setCartFoods(res.data));
  }, [user?.uid]);

  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/carts/?id=${id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              const remaining = cartFoods.filter(
                (cartFood) => cartFood._id !== id,
              );
              setCartFoods(remaining);
              Swal.fire("Deleted!", "Your Food has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Bistro Bliss | My Order</title>
      </Helmet>
      {cartFoods?.length <= 0 ? (
        <div className="flex h-80 items-center justify-center">
          <h3 className="text-xl text-gray-500">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <i>Cart is empty</i>
          </h3>
        </div>
      ) : (
        <div className="mb-3 space-y-3 px-3 md:px-0">
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
