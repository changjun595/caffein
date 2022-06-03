const HomeBanner = () =>{
    return (
        <div style={{
            background : "url(https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/home_header_bg.jpg)",
            position : "absolute",
            width : "960px",
            height : "100px",
            left : "240px",
       }}>
        <h2 style={{
            marginTop : "33px",
            color : "white",
            textAlign : "center"

        }}>
            현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝
        </h2>
       </div>
    );
};

export default HomeBanner;