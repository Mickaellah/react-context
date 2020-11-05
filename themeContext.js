import React, { Component, useEffect, useState } from 'react';

const ThemeContext = React.createContext();
// ThemeContext.Provider & ThemeContext.Consumer.

function ThemeContextProvider(props) {
    const [ themeColor, setThemeColor ] = useState({ theme: 'light'})

    function toggleTheme() {
        setThemeColor(prevState => {
            return {
                theme: prevState.theme === 'light' ? 'dark' : 'light'
            }
        })
    }

    useEffect(() => {
        toggleTheme();
    }, [])

    return (
        <ThemeContext.Provider value={{
            theme: themeColor.theme,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}


/**
 * Convert this ThemeContextProvider into a functional component that uses hooks
 * Tip: Use the browser dev tools if you run into a bug that isn't clear from the Scrimba console logs
 */