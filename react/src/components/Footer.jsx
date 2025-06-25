import React from "react";

const Footer = (props) => {
    let localClassName = "text-muted"
    if (props.environment === "development"){
        localClassName = "text-bold bg-yellow text-center"
    }
    else if (props.environment === "production"){
        localClassName = "text-bold bg-green text-center"
    }
    
    return (


    
    <footer className={localClassName}>
        <div><strong>{props.environment}</strong></div>
    </footer>
    );
};

export default Footer;