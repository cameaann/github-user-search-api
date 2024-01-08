import { useContext } from "react";
import { UserContext } from "../components/main";
import { UserContextType } from "../components/main";

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };