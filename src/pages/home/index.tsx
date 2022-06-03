import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setSourceMapRange } from "typescript";
import { Navigation } from "../../components";
import { ICamp } from "../../types/type";
import { HeaderSection } from "./components";
import { CampSection } from "./components";

const campList : ICamp = {
    id : 0,
    name : "직접 해보는 페이스북 마케팅 실무",
    type : "인기",
    status : "모집중",
    field : "마케팅",
    skill : "Excel",
    startDate : "2021-03-13",
    thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
};

const Home = () => {
    const [popuarCamps, setPopularCamps] = useState<ICamp[]>([]);
    
    useEffect(() =>{
        setPopularCamps([campList, campList]);
    }, [])
    
    return(
        <div>
            <Navigation />
            <HeaderSection />
            <CampSection title="인기부트캠프" camps={popuarCamps}/>
        </div>
    );
};

export default Home;