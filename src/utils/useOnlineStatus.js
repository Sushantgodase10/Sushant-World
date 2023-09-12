import { useEffect, useState } from "react";


const useOnlineStatus = () => {
 
    const [OnlineStatus, setOnlieStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlieStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlieStatus(true);
        });
    },[]);

    return OnlineStatus;
};

export default useOnlineStatus;