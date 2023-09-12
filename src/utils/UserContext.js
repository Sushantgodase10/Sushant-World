import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Defult User",
});

export default UserContext;