import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

    const [theme, setTheme] = useState(false);
    const [userInfos, setUserInfos] = useState({
        isLogged: true,
        firstname: "ro",
        lastname: "14",
        hobbies: ["dev", "foot"],
    });

    const toggleTheme = () => {
        setTheme(!theme);
    }

    if(theme) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    return (

        <GlobalContext.Provider value={{toggleTheme, theme, userInfos}}>
            {props.children}

        </GlobalContext.Provider>

    )
}

export default GlobalContextProvider;