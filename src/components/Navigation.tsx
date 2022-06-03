import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <div
        style={{
            background: "url(https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/home_header_bg.jpg)",
            display: "flex",
            padding: "20px",
            gap: "20px",
        }} 
        >
            <Link to="/">
                <div
                style={{
                    fontFamily : "Roboto Slab",
                    fontStyle : "normal",
                    fontWeight : "700",
                    fontSize : "24px",
                    lineHeight : "32px",
                }}>Caffein</div>
            </Link>
        </div>
    );
};

export default Navigation;