

const HeaderSection = () => {
    return(
        <div
        style={{
            background: "url(https://raw.githubusercontent.com/congchu/caffein/week3/src/assets/images/home_header_bg.jpg)",  
            width : "1438px",
            height : "560px",
            left : "0px",
            top : "0px",
        }}>

        <div
        style={{
            position : "absolute",
            width : "278.84px",
            height : "100.8px",
            left : "238.18px",
            top : "342.6px",
            fontFamily : "Noto Sans",
            fontStyle : "normal",
            fontWeight : "700",
            fontSize : "32px",
            lineHeight : "65px",
            color : "white",
        }}>
            개발은<br />카페인과 함께
        </div>
        <img
        style={{
            position : "absolute",
            width: "597.51px",
            height: "400px",
            left: "597.33px",
            top: "104px",
        }}
        >
        </img>
        </div>
    );
};
export default HeaderSection;