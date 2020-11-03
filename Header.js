import React from 'react';
import {ThemeContextConsumer} from './themeContext';

function Header() {
    return (
        <ThemeContextConsumer>
            {(theme) => (
                <header className={`${theme}-theme`}>
                    <h2>{`${theme === 'dark' ? 'Dark' : 'Light'}`} Theme</h2>
                </header>
            )
            }
        </ThemeContextConsumer>
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