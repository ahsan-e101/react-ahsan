//Use props to set heading and slogan

const Header = (props) => {
    return(
        <div>
            <h1>{props.heading}</h1>
            <h3>{props.slogan}</h3>
        </div>
    );
}

const Excercise2 = () => {
    return(
        <Header heading='Welcome to my den folks' slogan="Don't just work hard also work smart"/>
    );
}

export default Excercise2;