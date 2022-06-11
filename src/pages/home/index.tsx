import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navigation } from "../../components";
import { ICamp, ICommunity } from "../../types/type";
import { CommunitySection, HeaderSection, HomeBanner } from "./components";
import { CampSection } from "./components";
import styled from "styled-components";
import { maxWidth } from "../../style/widthmax";

const campList0 : ICamp = {
    id : 0,
    name : "직접 해보는 페이스북 마케팅 실무",
    type : "인기",
    status : "모집중",
    field : "마케팅",
    skill : "Excel",
    startDate : "2021-03-13",
    thumbnail: "https://raw.githubusercontent.com/changjun595/caffein/develop/public/assets/1.png",
};
const campList1 : ICamp = {
    id : 1,
    name : "직접 해보는 페이스북 마케팅 실무",
    type : "인기",
    status : "모집중",
    field : "마케팅",
    skill : "Excel",
    startDate : "2021-03-13",
    thumbnail: "https://raw.githubusercontent.com/changjun595/caffein/develop/public/assets/2.png",
};
const campList2 : ICamp = {
    id : 2,
    name : "직접 해보는 페이스북 마케팅 실무",
    type : "인기",
    status : "모집중",
    field : "마케팅",
    skill : "Excel",
    startDate : "2021-03-13",
    thumbnail: "https://raw.githubusercontent.com/changjun595/caffein/develop/public/assets/3.png",
};
const campList3 : ICamp = {
    id : 3,
    name : "직접 해보는 페이스북 마케팅 실무",
    type : "인기",
    status : "모집중",
    field : "마케팅",
    skill : "Excel",
    startDate : "2021-03-13",
    thumbnail: "https://raw.githubusercontent.com/changjun595/caffein/develop/public/assets/4.png",
};
const campList4 : ICamp = {
    id : 4,
    name : "직접 해보는 페이스북 마케팅 실무",
    type : "인기",
    status : "모집중",
    field : "마케팅",
    skill : "Excel",
    startDate : "2021-03-13",
    thumbnail: "https://raw.githubusercontent.com/changjun595/caffein/develop/public/assets/5.png",
};
const campList5 : ICamp = {
    id : 5,
    name : "직접 해보는 페이스북 마케팅 실무",
    type : "인기",
    status : "모집중",
    field : "마케팅",
    skill : "Excel",
    startDate : "2021-03-13",
    thumbnail: "https://raw.githubusercontent.com/changjun595/caffein/develop/public/assets/6.png",
};
const campList6 : ICamp = {
    id : 6,
    name : "직접 해보는 페이스북 마케팅 실무",
    type : "인기",
    status : "모집중",
    field : "마케팅",
    skill : "Excel",
    startDate : "2021-03-13",
    thumbnail: "https://raw.githubusercontent.com/changjun595/caffein/develop/public/assets/7.png",
};
const campList7 : ICamp = {
    id : 7,
    name : "직접 해보는 페이스북 마케팅 실무",
    type : "인기",
    status : "모집중",
    field : "마케팅",
    skill : "Excel",
    startDate : "2021-03-13",
    thumbnail: "https://raw.githubusercontent.com/changjun595/caffein/develop/public/assets/8.png",
};
const communityList : ICommunity = {
    id: 0,
    tags: ["조회수TOP", "취업 고민"],
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comments: [
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "와우",
        nickname: "멘토1234",
      },
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "와우",
        nickname: "멘토1234",
      },
    ],
    
}

const Home = () => {
    const [popuarCamps, setPopularCamps] = useState<ICamp[]>([]);
    const [saleCamps, setSaleCamps] = useState<ICamp[]>([]);
    const [communities, setCommunities] = useState<ICommunity[]>([]);

    useEffect(() =>{
        setPopularCamps([campList0, campList1, campList2, campList3]);
        setSaleCamps([campList4, campList5, campList6, campList7]);
        setCommunities([
            communityList,
            communityList,
            communityList,
            communityList,
        ]);
    }, []);
    
    return(
        <Container>
            <Navigation />
            <HeaderSection />
            <main>
                <CampSection title="인기 부트 캠프" camps={popuarCamps} />
                <CampSection title="특가 할인 캠프" camps={saleCamps} />
                <HomeBanner />
                <CommunitySection title="커뮤니티" communites={communities} />
            </main>
            <Footer />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    margin: 0 auto;
    
    main {
        ${maxWidth}
        margin: 0 auto;
    }
`