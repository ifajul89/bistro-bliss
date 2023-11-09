import Header from "./components/Header";
import OurMasterChef from "./components/OurMasterChef";
import ServingCustomer from "./components/ServingCustomer";
import TopItems from "./components/TopItems";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopItems></TopItems>
            <ServingCustomer></ServingCustomer>
            <OurMasterChef></OurMasterChef>
        </div>
    );
};

export default Home;
