import React from "react";

const UserContext = React.createContext("Mani");
// Default value 'Mani' is provided here.

// If you want to use the default value don't use provider in the component

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
