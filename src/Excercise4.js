// Use state hook to manage style of heading and slogan, heading should be Maroon and slogan should be Italic.
import { useState } from "react";

const Header = (props) => {

    const [theme, setTheme] = useState({name: 'light', style: { backgroundColor: 'white'}})
    // Click Handler
    function themeHandler() {
        //If theme is dark then switch to light theme.
        if (theme.name === 'dark'){
            setTheme({ name: 'light', style: { background: 'white'} })
        }
        //If theme is light then switch to dark.
        else if(theme.name === 'light'){
            setTheme({ name: 'dark', style: { background: 'grey'} })
        }
    }

    return(
        <div style={theme.style}>
            <p>Welcome to React js guys.</p>
            <buttton id="themebutton" onClick={themeHandler}>Press me</buttton>
        </div>
    );
}

const Excercise4 = () => {
    return(
        <Header heading='Welcome to my den folks' slogan="Don't just work hard also work smart"/>
    );
}

export default Excercise4;