import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
    
    const handleMouseOver = () => {
        const peopleImageOver = document.getElementById("peopleImage") as HTMLInputElement;
        peopleImageOver.src = "https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/icons/ic-person-primary.png";
    }
    const handleMouseLeave = () => {
        const peopleImageLeave = document.getElementById("peopleImage") as HTMLInputElement;
        peopleImageLeave.src = "https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/icons/ic-person-white.png";
    }    
    return(
        <div
        style={{
            background: "url(https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/home_header_bg.jpg)",
            backgroundRepeat : "no-repeat",
            display: "flex",
            padding: "20px",
            gap: "20px",
        }} 
        >
            <div style={{display : "flex"}}>
            <Link to="/" style={{ textDecoration : "none", color : "white"}}>
                <div
                style={{
                    fontFamily : "Roboto Slab",
                    fontStyle : "normal",
                    fontWeight : "700",
                    fontSize : "24px",
                    lineHeight : "32px",
                    marginLeft : "248px"
                }}>Caffein</div>
            </Link>
            <img id="peopleImage" src="https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/icons/ic-person-white.png" 
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                style={{
                    width : "18px", 
                    height : "18px", 
                    marginLeft : "820px",        
                }}> 
            </img>
            </div>
        </div>
    );
};

export default Navigation;