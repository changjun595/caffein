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
    background-image: url("https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/home_header_bg.jpg");
    background-repeat: no-repeat;

    .header_content{
        display: flex;
        justify-content: flex-end;
        
    }
    .header_text{
        margin-top: 342px;
        margin-right: 80px;
        color: #ffffff;
        font-weight: bold;
        font-size: 48px;
    }
    .header_image{
        border-radius: 10px;
        margin-top: 104px;
        margin-bottom: 56px;
        margin-right: 20px;
        width: 597.51px;
        height: 400px;
    }

`;