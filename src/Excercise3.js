// Use state hook to manage style of heading and slogan, heading should be Maroon and slogan should be Italic.
import { useState } from "react";

const Header = (props) => {
    const [headingStyle] = useState({ color: 'maroon'});
    const [sloganStyle] = useState({ fontStyle: 'italic' });
    return(
        <div>
            <h1 style={headingStyle} >{props.heading}</h1>
            <h3 style={sloganStyle} >{props.slogan}</h3>
        </div>
    );
}

const Excercise3 = () => {
    return(
        <Header heading='Welcome to my den folks' slogan="Don't just work hard also work smart"/>
    );
}

export default Excercise3;