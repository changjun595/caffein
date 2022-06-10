import styled from "styled-components";
import fonts from "../style/fonts";

const Footer = () => {
    return (
        <Container>
            <footer>
                <div className="footer_container">
                    <img
                        className="logo" 
                        src="https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/logo-primary.png"></img>
                    <div className="footer_text">
                    <div>대표 : 홍길동. 서울특별시 중구 한강대로 416, 서울 스퀘어 15층 101호</div>
                    <br />
                    <div> Copyright by (주)카페인.</div>
                    <div> All right reserved. 이용약관 개인정보처리방침</div>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
    margin-top : 274px;
    text-align: center;
    background-color: #EEEEEE;
    height: 160px;

    .footer_container{
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .logo{
        width: 60px;
        height: 20px;
        padding-top: 32px;
        padding-right: 130px;
    }
    .footer_text{
        ${fonts.Caption}
        padding-top: 32px;
    }
`;