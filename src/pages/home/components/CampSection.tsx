import {ICamp} from "../../../types/type";

interface IProps {
    title : string,
    camps : ICamp[],
}

const CampSection = ({title, camps} : IProps) => {
    return(
        <div>
        <div>{title}</div>
        <div style={{ display : "flex", }}>
            {camps.map((value, index)=>(
                <div 
                style={{
                    margin : "21.5px",
                    background : `url(${value.thumbnail})`,
                    width : "224px",
                    height : "280px",
                    borderRadius : "10px"
                }}
                key={index}>
                        {value.status}<br />
                        {value.name}<br />
                        {value.startDate}
                </div>
            ))}

        </div>
    </div>
    );
};

export default CampSection;