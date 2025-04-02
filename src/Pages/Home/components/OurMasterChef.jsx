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
    <div className="container mx-auto px-3 py-5 md:px-0 md:py-10">
      <h3 className="font-cursive semibold mb-5 inline-block rounded-2xl border-4 bg-white px-4 py-3 md:mb-10 md:text-base lg:text-lg">
        OUR MASTER CHEFS
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-2 rounded-3xl shadow-lg md:col-span-1">
          <img className="w-full rounded-2xl" src={Chef1} alt="" />
          <div className="my-4 space-y-2 text-center text-[#626262]">
            <h3 className="font-semibold">Gordon Ramsay</h3>
            <div className="flex justify-center gap-3 text-xl">
              <FaInstagram className="duration-300 hover:text-[#F2A64D]"></FaInstagram>
              <BsPinterest className="duration-300 hover:text-[#F2A64D]"></BsPinterest>
              <BiLogoTelegram className="duration-300 hover:text-[#F2A64D]"></BiLogoTelegram>
              <RiTwitterXFill className="duration-300 hover:text-[#F2A64D]"></RiTwitterXFill>
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-3xl shadow-lg md:col-span-1">
          <img className="w-full rounded-2xl" src={Chef2} alt="" />
          <div className="my-4 space-y-2 text-center text-[#626262]">
            <h3 className="font-semibold">Gigachad</h3>
            <div className="flex justify-center gap-3 text-xl">
              <FaInstagram className="duration-300 hover:text-[#F2A64D]"></FaInstagram>
              <BsPinterest className="duration-300 hover:text-[#F2A64D]"></BsPinterest>
              <BiLogoTelegram className="duration-300 hover:text-[#F2A64D]"></BiLogoTelegram>
              <RiTwitterXFill className="duration-300 hover:text-[#F2A64D]"></RiTwitterXFill>
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-3xl shadow-lg md:col-span-1">
          <img className="w-full rounded-2xl" src={Chef3} alt="" />
          <div className="my-4 space-y-2 text-center text-[#626262]">
            <h3 className="font-semibold">Salt Bae</h3>
            <div className="flex justify-center gap-3 text-xl">
              <FaInstagram className="duration-300 hover:text-[#F2A64D]"></FaInstagram>
              <BsPinterest className="duration-300 hover:text-[#F2A64D]"></BsPinterest>
              <BiLogoTelegram className="duration-300 hover:text-[#F2A64D]"></BiLogoTelegram>
              <RiTwitterXFill className="duration-300 hover:text-[#F2A64D]"></RiTwitterXFill>
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-3xl shadow-lg md:col-span-1">
          <img className="w-full rounded-2xl" src={Chef4} alt="" />
          <div className="my-4 space-y-2 text-center text-[#626262]">
            <h3 className="font-semibold">CZN Burak</h3>
            <div className="flex justify-center gap-3 text-xl">
              <FaInstagram className="duration-300 hover:text-[#F2A64D]"></FaInstagram>
              <BsPinterest className="duration-300 hover:text-[#F2A64D]"></BsPinterest>
              <BiLogoTelegram className="duration-300 hover:text-[#F2A64D]"></BiLogoTelegram>
              <RiTwitterXFill className="duration-300 hover:text-[#F2A64D]"></RiTwitterXFill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMasterChef;
