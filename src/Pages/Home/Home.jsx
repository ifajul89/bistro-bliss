import Header from "./components/Header";
import OurMasterChef from "./components/OurMasterChef";
import ServingCustomer from "./components/ServingCustomer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServingCustomer></ServingCustomer>
            <OurMasterChef></OurMasterChef>
        </div>
    );
};

export default Home;
