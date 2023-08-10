import reslist from "../utils/mockData";
import ReatauranCard from "./ReataurCard";


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    reslist.map((restaurant) => (
                        <ReatauranCard resData={restaurant} />
                    ))
                }
          </div>
        </div>
    )
}


export default Body;