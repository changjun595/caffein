import React from "react";
import styled from "styled-components";
import { maxWidth } from "../../../style/widthmax";

const HomeBanner = () =>{
    return (
        <Container>
            <div>
                <h2 className="homebanner_text">
                    <div className="text_first">현직자와 소통하며 배우는</div>
                    <div className="test_second">실무 스킬, 퍼스널 트레이닝</div>
                </h2>
            </div>
       </Container>
    );
};

export default HomeBanner;

const Container = styled.div`
    margin-top: 56px;
    position: relative;
    width: 1020px;
    height: 100px;
    display: flex;
    background: url("https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/home_header_bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    margin-left: auto;
    margin-right : auto;

    h2{
        display: flex;
        position: absolute;
        padding-left: 42px;
        top: 50%;
        margin: 0;
        transform: translateY(-50%);
    }
    @media (max-width: 960px) {
        .homebanner_text{
            flex-direction: column;
        }
    }
`