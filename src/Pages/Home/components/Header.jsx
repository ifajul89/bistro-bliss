import { RiMenuSearchFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Header = () => {
    return (
        <div className="grid grid-cols-10 gap-5 container mx-auto my-5 md:my-10 px-3 md:px-0">
            <div className="col-span-5 md:col-span-2 order-2 md:order-1 flex gap-5 flex-col items-center">
                <button className="btn rounded-full hover:bg-white hover:shadow-gray-400 shadow-gray-300 shadow-lg bg-white">
                    Book A Table
                </button>
                <div className="border-4 h-full w-full border-[#2F2F2F] rounded-full p-2">
                    <div className="border-4 aspect-square flex items-center justify-center border-[#2F2F2F] rounded-full">
                        <RiMenuSearchFill className="text-5xl"></RiMenuSearchFill>
                    </div>
                </div>
            </div>
            <div className="header-image order-1 md:order-2 col-span-10 md:col-span-6 rounded-[100px]">
                <div className="w-full h-full bg-black bg-opacity-50 text-white text-center header-title md:py-16 py-10 lg:py-28 xl:py-36 px-10 md:p-12 lg:p-20 text-3xl sm:text-6xl rounded-[100px]">
                    <h3 className="text-lg font-light">Welcome to,</h3>
                    <h2 className="my-1 sm:my-5">Bistro Bliss</h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                        Savor exquisite flavors at Bistro Bliss, where every
                        dish is a culinary masterpiece. Our cozy ambiance and
                        expertly crafted menu ensure a delightful dining
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        experience that's simply blissful
                    </p>
                </div>
            </div>
            <div className=" col-span-5 md:col-span-2 order-3 flex gap-5 flex-col items-center">
                <div className="border-4 h-full w-full border-[#2F2F2F] rounded-full p-2 flex items-end">
                    <div className="border-4 aspect-square flex items-center justify-center w-full border-[#2F2F2F] rounded-full">
                        <GiForkKnifeSpoon className="text-5xl"></GiForkKnifeSpoon>
                    </div>
                </div>
                <button className="btn rounded-full hover:bg-white hover:shadow-gray-400 shadow-gray-300 shadow-lg bg-white">
                    See Full Menu
                </button>
            </div>
        </div>
    );
};

export default Header;
