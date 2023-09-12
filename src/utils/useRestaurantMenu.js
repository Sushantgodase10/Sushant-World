import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

  useEffect(() =>{
    fetchMenu();
  },[]);

const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const join = await data.json();
    setResInfo(join.data);
}


    return resInfo;
}

export default useRestaurantMenu;