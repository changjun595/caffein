import styled from "styled-components";

const HeaderSection = () => {
    return(
        <Container>
            <div className="header_content">
                <div className="header_text">
                    개발은<br />카페인과 함께
                </div>
                <img
                className="header_image"
                src="https://raw.githubusercontent.com/changjun595/caffein/develop/public/assets/image.png" />
            </div>
        </Container>
    );
};
export default HeaderSection;

const Container = styled.header`
    width: 100%;
    height: 560px;
    background: linear-gradient(
        97.88deg, #854BFF -84.42%, #7179FF 15.02%, #6D83FF 36.89%, #698BFF 54.79%, #6499FF 80.65%, #659BF7 108.49%, #669FEA 148.27%, #69A9CD 197.99%, #6CB1B2 239.75%);

    .header_content{
        display: flex;
        justify-content: center;
        
    }
    .header_text{
        margin-top: 342px;
        margin-left: 10%;
        margin-right: 80.32px;
        color: #ffffff;
        font-weight: bold;
        font-size: 48px;
    }
    .header_image{
        border-radius: 10px;
        margin-top: 104px;
        margin-bottom: 56px;
        margin-right: 10%;
        width: 597.51px;
        height: 400px;
    }

`;