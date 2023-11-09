import Chef1 from "../../../assets/chef1.jpg";
import Chef2 from "../../../assets/chef2.png";
import Chef3 from "../../../assets/chef3.jpg";
import Chef4 from "../../../assets/chef4.jpg";
import { FaInstagram } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

const OurMasterChef = () => {
    return (
        <div className="container mx-auto py-5 md:py-10 px-3 md:px-0">
            <h3 className="py-3 px-4  md:text-base lg:text-lg font-cursive semibold bg-white rounded-2xl border-4 inline-block mb-5">
                OUR MASTER CHEFS
            </h3>
            <div className="grid gap-5 grid-cols-4">
                <div className="col-span-1 shadow-lg rounded-3xl">
                    <img className="w-full rounded-2xl" src={Chef1} alt="" />
                    <div className="text-center text-[#626262] space-y-2 my-3">
                        <h3 className="font-semibold">Gordon Ramsay</h3>
                        <div className="flex justify-center gap-3 text-xl">
                            <FaInstagram className="hover:text-[#F2A64D] duration-300"></FaInstagram>
                            <BsPinterest className="hover:text-[#F2A64D] duration-300"></BsPinterest>
                            <BiLogoTelegram className="hover:text-[#F2A64D] duration-300"></BiLogoTelegram>
                            <RiTwitterXFill className="hover:text-[#F2A64D] duration-300"></RiTwitterXFill>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 shadow-lg rounded-3xl">
                    <img className="w-full rounded-2xl" src={Chef2} alt="" />
                    <div className="text-center text-[#626262] space-y-2 my-3">
                        <h3 className="font-semibold">Gigachad</h3>
                        <div className="flex justify-center gap-3 text-xl">
                            <FaInstagram className="hover:text-[#F2A64D] duration-300"></FaInstagram>
                            <BsPinterest className="hover:text-[#F2A64D] duration-300"></BsPinterest>
                            <BiLogoTelegram className="hover:text-[#F2A64D] duration-300"></BiLogoTelegram>
                            <RiTwitterXFill className="hover:text-[#F2A64D] duration-300"></RiTwitterXFill>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 shadow-lg rounded-3xl">
                    <img className="w-full rounded-2xl" src={Chef3} alt="" />
                    <div className="text-center text-[#626262] space-y-2 my-3">
                        <h3 className="font-semibold">Salt Bae</h3>
                        <div className="flex justify-center gap-3 text-xl">
                            <FaInstagram className="hover:text-[#F2A64D] duration-300"></FaInstagram>
                            <BsPinterest className="hover:text-[#F2A64D] duration-300"></BsPinterest>
                            <BiLogoTelegram className="hover:text-[#F2A64D] duration-300"></BiLogoTelegram>
                            <RiTwitterXFill className="hover:text-[#F2A64D] duration-300"></RiTwitterXFill>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 shadow-lg rounded-3xl">
                    <img className="w-full rounded-2xl" src={Chef4} alt="" />
                    <div className="text-center text-[#626262] space-y-2 my-3">
                        <h3 className="font-semibold">CZN Burak</h3>
                        <div className="flex justify-center gap-3 text-xl">
                            <FaInstagram className="hover:text-[#F2A64D] duration-300"></FaInstagram>
                            <BsPinterest className="hover:text-[#F2A64D] duration-300"></BsPinterest>
                            <BiLogoTelegram className="hover:text-[#F2A64D] duration-300"></BiLogoTelegram>
                            <RiTwitterXFill className="hover:text-[#F2A64D] duration-300"></RiTwitterXFill>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMasterChef;
