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
    background-image: url("https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/home_header_bg.jpg");
    background-repeat: no-repeat;

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
        margin-left: 246px;
    }
    .peopleImage{
        margin-top: 16px;
        width: 20px;
        height: 20px;
        margin-right : 20%;
        cursor: pointer;
    }
`;