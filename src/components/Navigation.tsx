import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../style/colors";
import { maxWidth } from "../style/widthmax";

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
        <Container>
            <div className="main">
                <Link to="/" className="title">
                    Caffein
                </Link>
                <img
                    id="peopleImage" 
                    className="peopleImage" 
                    src="https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/icons/ic-person-white.png" 
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave} /> 
            </div>
        </Container>
    );
};

export default Navigation;

const Container = styled.nav`
    width: 100%; 
    background: linear-gradient(97.88deg, #854BFF -84.42%, #7179FF 15.02%, #6D83FF 36.89%, #698BFF 54.79%, #6499FF 80.65%, #659BF7 108.49%, #669FEA 148.27%, #69A9CD 197.99%, #6CB1B2 239.75%);
    
    .main{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .title{
        margin-top: 16px;
        color: white;
        font-size: 24px;
        font-weight: 700;
        font-family: "Roboto stab";
        text-decoration: none;
        margin-left: 10%;
    }
    .peopleImage{
        margin-top: 16px;
        width: 20px;
        height: 20px;
        margin-right: 10%;
        cursor: pointer;
    }
    
`;