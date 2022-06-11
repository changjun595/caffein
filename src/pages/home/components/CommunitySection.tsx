
import { Comments } from "../../../components";
import { ICommunity } from "../../../types/type"
import styled from "styled-components";
import fonts from "../../../style/fonts";

interface IProps {
    title : string,
    communites : ICommunity[];

}
interface IComment{
    community : IComment;
}
const CommunitySection = ({title, communites} : IProps) => {
    return (
        <Container>
        <div className="community_container">
            <div className="community_title">{title}</div>
            <div className="community_card">
                { 
                communites.map((value, index) =>(
                    <div key={index}>
                        <div>{value.tags}</div>
                        <div><h3>{value.title}</h3></div>
                        <div>{value.content}</div>    
                    </div>
                ))
                }
            </div>            
        </div>
        </Container>
    );
};
export default CommunitySection;

const Container = styled.div`
    width: 100%;
    
    .community_title{
        ${fonts.H2}
        margin-top: 132px;
        margin-bottom: 36px;
        text-align: center;
    }
    .community_card{
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    @media (max-width: 960px) {
        .community_container{
            visibility: hidden;
        }
    }
`