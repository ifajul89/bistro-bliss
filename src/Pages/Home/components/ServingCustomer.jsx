import ServingCustomer1 from "../../../assets/servingCustomer1.jpg";

const ServingCustomer = () => {
    return (
        <div className="container mx-auto">
            <div className="border-2 grid grid-cols-5">
                <div className="col-span-2 space-y-3">
                    <h3 className="py-3 px-4">SERVING CUSTOMER</h3>
                    <div>
                        <img src={ServingCustomer1} alt="" />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ServingCustomer;
