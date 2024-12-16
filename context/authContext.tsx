import { getCurrentUser } from "@/lib/appwrite";
import { createContext, useContext, useState, useEffect } from "react";

import { Alert } from "react-native";

const GlobalContext = createContext<any>(null);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      await getCurrentUser()
        .then((res) => {
          if (res) {
            setUser(res);
            setIsLoggedIn(true);
            setIsLoading(false);
          } else {
            setUser(null);
            setIsLoggedIn(false);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          Alert.alert("Error", err.message);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchUser();
  },[]);

  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser,isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
