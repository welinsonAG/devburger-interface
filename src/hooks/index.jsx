import { UserProvider } from "./UserContext";
import { putUserData } from "../services/api"
const AppProvider = ({ children }) => {
  return (  <UserProvider>{ children }</UserProvider>
    );
};

export default AppProvider;