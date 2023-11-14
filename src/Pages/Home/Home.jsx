import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import OurMasterChef from "./components/OurMasterChef";
import ServingCustomer from "./components/ServingCustomer";
import TopItems from "./components/TopItems";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Bliss | Your Food Heaven</title>
            </Helmet>
            <Header></Header>
            <TopItems></TopItems>
            <ServingCustomer></ServingCustomer>
            <OurMasterChef></OurMasterChef>
        </div>
    );
};

export default Home;
