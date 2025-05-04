import React from 'react';

import Link from '../Link';

import style from "./style.module.css";

const Button = (props) => {
    const { text, color = "primary", type = "button", to, onClick, disabled = false, fetching = false } = props;

    if (fetching === true) {
        return (
            <div className="loading">
                <div className="loader"></div>
            </div>
        )
    }

    if (to) {
        return (
            <Link to={to} className={`${style.button}${style[color] ? ` ${style[color]}` : ""}`} disabled={disabled}>
                {text}
            </Link>
        )
    }

    return (
        <Link type={type} onClick={onClick} className={`${style.button}${style[color] ? ` ${style[color]}` : ""}`} disabled={disabled}>
            {text}
        </Link>
    )
}

export default Button;