import { Link } from "react-router-dom";
import {ICamp} from "../../../types/type";

interface IProps {
    title : string,
    camps : ICamp[],
}

const CampSection = ({title, camps} : IProps) => {
    return(
        <div>
        <div style={{ marginLeft : "240px"}}><h2>{title}</h2></div>
        <div style={{ display : "flex", marginLeft : "190px" }}>
            {camps.map((value, index)=>(
                 <Link to = {`/camp/${value.id}`} key={index} style={{textDecoration : "none"}}>
                <div 
                style={{  
                    color : "white",
                    margin : "21.5px",
                    background : `url(${value.thumbnail})`,
                    width : "224px",
                    height : "280px",
                    borderRadius : "10px"
                }}
                key={index}>
                    <div style={{ paddingTop :"190px", paddingLeft : "10px"}}>
                        <div style={{fontSize : "14px"}}>{value.status}</div>
                        <div style={{fontSize : "16px", marginBottom : "10px"}}>{value.name}</div>
                        <div style={{fontSize : "12px"}}>{value.startDate}</div>
                    </div>
                </div>
                </Link>
            ))}

        </div>
        
    </div>
    );
};

export default CampSection;