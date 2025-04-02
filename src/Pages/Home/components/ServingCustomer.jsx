import ServingCustomer1 from "../../../assets/servingCustomer1.jpg";
import ServingCustomer2 from "../../../assets/servingCustomer2.jpg";

const ServingCustomer = () => {
  return (
    <div className="container mx-auto px-3 py-5 md:px-0 md:py-10">
      <div className="grid grid-cols-5 gap-10 rounded-b-3xl rounded-t-[50px] border-4 p-5 md:p-10 lg:p-20">
        <div className="col-span-5 flex flex-col items-center gap-10 md:col-span-2">
          <h3 className="font-cursive semibold inline-block rounded-2xl border-4 bg-white px-4 py-3 md:text-base lg:text-lg">
            SERVING CUSTOMER
          </h3>
          <div>
            <img className="w-full rounded-2xl" src={ServingCustomer1} alt="" />
          </div>
        </div>
        <div className="col-span-5 flex flex-col items-center gap-5 md:col-span-3 lg:gap-10">
          <div className="order-2 md:order-1">
            <img className="w-full rounded-2xl" src={ServingCustomer2} alt="" />
          </div>
          <div className="order-1 space-y-2 md:order-2 lg:space-y-5">
            <h3 className="text-lg">OVER THE YEARS</h3>
            <div className="flex gap-10 lg:gap-20">
              <div>
                <h3 className="text-3xl font-semibold text-primary lg:text-5xl">
                  30+
                </h3>
                <p className="text-[10px] font-medium text-gray-600 sm:text-sm lg:text-base">
                  BREAKFAST
                  <br />
                  OPTIONS
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-primary lg:text-5xl">
                  50+
                </h3>
                <p className="text-[10px] font-medium text-gray-600 sm:text-sm lg:text-base">
                  DINNER
                  <br />
                  OPTIONS
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-primary lg:text-5xl">
                  8+
                </h3>
                <p className="text-[10px] font-medium text-gray-600 sm:text-sm lg:text-base">
                  NEW
                  <br />
                  LOCATION
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600 lg:text-sm">
              Our menu features a variety of dishes all made with seasonal
              ingredients
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-3 md:p-10">
        <div className="grid grid-cols-4 gap-5 text-center md:gap-10">
          <div>
            <h3 className="text-xl font-semibold text-primary md:text-6xl">
              26
            </h3>
            <p className="text-[10px] font-medium text-gray-600 sm:text-sm lg:text-base">
              YEAR EXPERIENCE
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary md:text-6xl">
              100
            </h3>
            <p className="text-[10px] font-medium text-gray-600 sm:text-sm lg:text-base">
              MENU/DISH
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary md:text-6xl">
              50
            </h3>
            <p className="text-[10px] font-medium text-gray-600 sm:text-sm lg:text-base">
              STAFFS
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary md:text-6xl">
              15,000
            </h3>
            <p className="text-[10px] font-medium text-gray-600 sm:text-sm lg:text-base">
              HAPPY CUSTOMER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServingCustomer;
