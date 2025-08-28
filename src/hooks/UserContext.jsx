import {createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState ({});

    const putUserData = (data) => {
        setUserInfo(data)

        localStorage.setItem('devburger:userData', JSON.stringify(data))
    }

const logout = () => {
setUserInfo({})
    localStorage.removeItem('devburger:userData')
}

useEffect(() => {
  const userInfoLocalStorage = localStorage.getItem('devburger:userData');

  if (userInfoLocalStorage) {
    try {
      setUserInfo(JSON.parse(userInfoLocalStorage));
    } catch (error) {
      console.error('Erro ao ler userInfo do localStorage:', error);
      localStorage.removeItem('devburger:userData'); // limpa se estiver corrompido
      setUserInfo({});
    }
  }
}, []);


    return (
        <UserContext.Provider value={{userInfo, putUserData, logout }}>{children}</UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be a valid context');
    }
    return context;
};