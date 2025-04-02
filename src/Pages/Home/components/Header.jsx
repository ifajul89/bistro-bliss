import { RiMenuSearchFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto my-5 grid grid-cols-10 gap-5 px-3 md:my-10 md:px-0">
      <div className="order-2 col-span-5 flex flex-col items-center gap-5 md:order-1 md:col-span-2">
        <Link
          to="/all-items"
          className="btn rounded-full bg-white shadow-lg shadow-gray-300 hover:bg-white hover:shadow-gray-400"
        >
          Book A Table
        </Link>
        <div className="h-full w-full rounded-full border-4 border-[#2F2F2F] p-2">
          <div className="flex aspect-square items-center justify-center rounded-full border-4 border-[#2F2F2F]">
            <RiMenuSearchFill className="text-5xl"></RiMenuSearchFill>
          </div>
        </div>
      </div>
      <div className="header-image order-1 col-span-10 rounded-3xl md:order-2 md:col-span-6 md:rounded-[100px]">
        <div className="header-title h-full w-full rounded-3xl bg-black bg-opacity-50 px-10 py-10 text-center text-3xl text-white sm:text-6xl md:rounded-[100px] md:p-12 md:py-16 lg:p-20 lg:py-28 xl:py-36">
          <h3 className="text-lg font-light">Welcome to,</h3>
          <h2 className="my-1 sm:my-5">Bistro Bliss</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Savor exquisite flavors at Bistro Bliss, where every dish is a
            culinary masterpiece. Our cozy ambiance and expertly crafted menu
            ensure a delightful dining
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            experience that's simply blissful
          </p>
        </div>
      </div>
      <div className="order-3 col-span-5 flex flex-col items-center gap-5 md:col-span-2">
        <div className="flex h-full w-full items-end rounded-full border-4 border-[#2F2F2F] p-2">
          <div className="flex aspect-square w-full items-center justify-center rounded-full border-4 border-[#2F2F2F]">
            <GiForkKnifeSpoon className="text-5xl"></GiForkKnifeSpoon>
          </div>
        </div>
        <Link
          to="/all-items"
          className="btn rounded-full bg-white shadow-lg shadow-gray-300 hover:bg-white hover:shadow-gray-400"
        >
          See Full Menu
        </Link>
      </div>
    </div>
  );
};

export default Header;
