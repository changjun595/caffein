
import { Comments } from "../../../components";
import { ICommunity } from "../../../types/type"

interface IProps {
    title : string,
    communites : ICommunity[];

}
interface IComment{
    community : IComment;
}
const CommunitySection = ({title, communites} : IProps) => {
    return (
        <div>
            <div style={{position : "absolute",
                        left : "245px",
                        top : "1580px",
                        fontSize : "24px",
                        fontWeight : "700"}}>{title}</div>
            <div style={{position : "absolute",
                        display : "flex",
                        width : "977.5px",
                        height : "320px",
                        top : "1634px",
                        left : "241px",
                        }}>
                { 
                communites.map((value, index) =>(
                    <div key={index} style={{marginRight : "21.5px"}}>
                        <div style={{marginBottom : "15px"}}>{value.tags}</div>
                        <div><h3>{value.title}</h3></div>
                        <div>{value.content}</div>    
                    
                    </div>
                ))
                }
                
            </div>            
        </div>
    );
};
export default CommunitySection;