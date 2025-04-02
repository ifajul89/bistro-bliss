import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import TopItem from "./TopItem";

const TopItems = () => {
  const { isPending, data: top6Data } = useQuery({
    queryKey: ["top6Data"],
    queryFn: async () => {
      const res = await fetch(
        "https://bistro-bliss-server.vercel.app/top-foods",
        {
          credentials: "include",
        },
      );
      return res.json();
    },
  });

  if (isPending) {
    return (
      <div className="my-20 flex justify-center duration-300">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-5 px-3 md:px-0 lg:mt-10">
      <h3 className="font-cursive semibold inline-block rounded-2xl border-4 bg-white px-4 py-3 md:text-base lg:text-lg">
        OUR TOP FOODS
      </h3>
      <div className="my-5 grid gap-5 md:grid-cols-3">
        {top6Data?.map((data) => (
          <TopItem key={data._id} food={data}></TopItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          className="btn border-0 bg-primary text-white hover:bg-primary"
          to="/all-items"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default TopItems;
