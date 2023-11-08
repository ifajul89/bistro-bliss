import { RiMenuSearchFill } from "react-icons/ri";
import { SiCodechef } from "react-icons/si";

const Header = () => {
    return (
        <div className="grid grid-cols-5 gap-5 container mx-auto my-10">
            <div className="col-span-1 flex gap-5 flex-col items-center">
                <button className="btn rounded-full hover:bg-white hover:shadow-gray-400 shadow-gray-300 shadow-lg bg-white">
                    Book A Table
                </button>
                <div className="border-4 h-full w-full border-[#2F2F2F] rounded-full p-2">
                    <div className="border-4 aspect-square flex items-center justify-center border-[#2F2F2F] rounded-full">
                        <RiMenuSearchFill className="text-5xl"></RiMenuSearchFill>
                    </div>
                </div>
            </div>
            <div className="header-image col-span-3 rounded-full">
                <div className="w-full h-full bg-black bg-opacity-50 text-white text-center header-title py-44 text-6xl rounded-full">
                    <h3 className="text-lg font-light">Welcome to,</h3>
                    <h2>Bistro Bliss</h2>
                </div>
            </div>
            <div className="col-span-1 flex gap-5 flex-col items-center">
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
