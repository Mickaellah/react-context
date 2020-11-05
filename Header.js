import React, { useContext } from 'react';
import {ThemeContext} from './themeContext';

function Header() {
    const context = useContext(ThemeContext);
    return (
        <header className={`${context.theme}-theme`}>
            <h2>{`${context.theme === 'dark' ? 'Dark' : 'Light'}`} Theme</h2>
        </header>
    );
}

export default Header;


// import { func } from "prop-types"
// import React, {Component} from "react"
// import Username from "./userName"
// function Header() {
//     return (
//         <Username.Consumer>
//             {(userName) => (
//                 <header>
//                     <p>Welcome, {`${userName}`}!</p>
//                 </header>
//             )}
//         </Username.Consumer>
//     )
// }

// export default Header