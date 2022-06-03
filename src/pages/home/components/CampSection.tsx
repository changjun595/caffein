import {ICamp} from "../../../types/type";

interface IProps {
    title : string,
    camps : ICamp[],
    isHeadField? : boolean;
}

const CampSection = ({title, camps, isHeadField = false} : IProps) => {
    return(
        <div>
        <div>{title}</div>
        <div>
            {camps.map((value, index)=>(
                <div key={index}>{value.name}{value.field}</div>
            ))}            
        </div>
    </div>
    );
};

export default CampSection;