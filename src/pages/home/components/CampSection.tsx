import { Link } from "react-router-dom";
import {ICamp} from "../../../types/type";
import styled from "styled-components";
import { maxWidth } from "../../../style/widthmax";

interface IProps {
    title : string,
    camps : ICamp[],
}

const CampSection = ({title, camps} : IProps) => {
    return(
        <Container>
        <div className="camp_title"><h2>{title}</h2></div>
            <div className="camp_card">
            {camps.map((value, index)=>(
                 <Link to = {`/camp/${value.id}`} key={index} className="camp_component">
                <div className="camp_background" style={{background : `url(${value.thumbnail})`, backgroundRepeat : "no-repeat"}}>
                    <div className="camp_context">
                        <div className="camp_status">{value.status}</div>
                        <div className="camp_name">{value.name}</div>
                        <div className="camp_startDate">{value.startDate}</div>
                    </div>
                </div>
                </Link>
            ))}
            </div>        
    </Container>
    );
};

export default CampSection;

const Container = styled.div`
    width: 100%;

    .camp_title{
        text-align: center;
    }
    .camp_card{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .camp_component{
        text-decoration: none;
    }
    .camp_background{
        color : white;
        margin : 21.5px;
        width : 224px;
        height : 280px;
        border-radius : 10px;
    }
    .camp_context{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: flex-end;
        margin-left: 5%;
        margin-right: 5%;
    }
    .camp_status{
        font-size: 14px;
        margin-bottom: 5px;
    }
    .camp_name{
        font-size: 16px;
        margin-bottom: 5px;
    }
    .camp_startDate{
        font-size: 12px;
        padding-bottom: 5%;
    }
    @media (max-width: 960px) {
        .camp_title{
            margin-top: 350px;
        }
        .camp_card{
            flex-direction: column;
        }
        .camp_background{
            margin-bottom: 10px;
            border-radius: 20px;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;