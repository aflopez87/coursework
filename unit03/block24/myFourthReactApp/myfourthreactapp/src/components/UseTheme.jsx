import React, { useState } from "react";


const ThemeContext = React.createContext()

const ThemeProvider =({children})=>{
    const [theme, setTheme] = useState("light");
    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark":"light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}



