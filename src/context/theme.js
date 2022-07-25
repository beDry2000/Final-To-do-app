
import { createContext, useState } from "react";


const ThemeContext = createContext();
export {ThemeContext};

const ThemeProvider = ({children}) => {
    const [light, setLight] = useState(true);
    const handleLight = () => {
        setLight(!light);
        console.log('Setting')
    }
    const value = {
        light, 
        handleLight
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;