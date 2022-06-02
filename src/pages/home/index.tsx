import { Link } from "react-router-dom";
import { Navigation } from "../../components";
import { HeaderSection } from "./components";

const Home = () => {
    return(
        <div>
            <Navigation />
            <HeaderSection />
        </div>
    );
};

export default Home;