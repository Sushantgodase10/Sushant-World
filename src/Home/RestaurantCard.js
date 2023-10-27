import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
const {resData} = props;

const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;


return (
        <div className=" m-4 p-1 w-[260px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-300 shadow-lg border borer-gray-300" >
            <img 
            className="rounded-lg"
            alt="res-logo"
            src={CDN_URL
             + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className=" text-base font-medium text-dark hover:text-primary">{cuisines.join(", ")}</h4>
            <h4 className=" text-base font-medium text-dark hover:text-primary">{deliveryTime}</h4>
            <h4 className=" text-base font-medium text-dark hover:text-primary">{costForTwo}</h4>
            <h4 className=" rounded-lg bg-green-400  w-12 p-1">{avgRating}⭐</h4>
        </div>
    );
};

// export const withPromtedLabel = (RestaurantCard) => {
//     return (props) => {
//         return (
//             <div>
//                 <label className="absolute bg-black text-white m-2 p-2 ">Promoted</label>
//                 <RestaurantCard {...props} />
//             </div>
//         );
//     };
//  };


export default RestaurantCard;

// Note This files