import React from "react";
import { Link } from "react-router-dom";
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, location, buttonStyle, buttonSize}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const handleClick = () => {
        if(location.includes("https")){
            window.open(location);
        }
        else{
            window.location.href = location
        }
    };

    return (
        <Link to={location} target="_blank" className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                onClick={handleClick}
                location={location} type={type}>
                    {children}
            </button>
        </Link>
    )
}
