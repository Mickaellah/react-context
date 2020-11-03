import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeContextProvider} from './themeContext';

ReactDOM.render(
    <ThemeContextProvider value={"dark"}>
        <App />
    </ThemeContextProvider>, document.getElementById('root')
);


// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
// import Username from './userName'

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 */
// ReactDOM.render(
//     <Username.Provider value={"Clopedia"}>
//         <App />
//     </Username.Provider>, document.getElementById("root"));