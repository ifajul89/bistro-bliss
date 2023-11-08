import { RiMenuSearchFill } from "react-icons/ri";
import { SiCodechef } from "react-icons/si";

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
            <div className="header-image order-1 md:order-2 col-span-10 md:col-span-6 rounded-full">
                <div className="w-full h-full bg-black bg-opacity-50 text-white text-center header-title md:py-28 py-10 lg:py-44 text-3xl sm:text-6xl rounded-full">
                    <h3 className="text-lg font-light">Welcome to,</h3>
                    <h2>Bistro Bliss</h2>
                </div>
            </div>
            <div className=" col-span-5 md:col-span-2 order-3 flex gap-5 flex-col items-center">
                <div className="border-4 h-full w-full border-[#2F2F2F] rounded-full p-2 flex items-end">
                    <div className="border-4 aspect-square flex items-center justify-center w-full border-[#2F2F2F] rounded-full">
                        <SiCodechef className="text-5xl"></SiCodechef>
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
