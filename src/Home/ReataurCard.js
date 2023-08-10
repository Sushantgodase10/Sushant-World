import { CDN_URL } from "../utils/constants";


const ReatauranCard = (props) => {
const {resData} = props;
const {cloudinaryImageId, name,cuisine,locality,areaName,costForTwo,avgRating} =resData?.data;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL
             + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{locality}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}


export default ReatauranCard;

