import { Link as Anchor } from 'react-router-dom';
import React from 'react';

import style from './style.module.css';

const Link = (props) => {
    const {
        to,
        className,
        children,
        onClick,
        target = "_self",
        rel = "noopener noreferrer",
        type = "button",
        disabled = false,
    } = props;

    if (disabled === true) {
        return (
            <div className={`${style.disabled}${className ? ` ${className}` : ""}`}>
                {children}
            </div>
        )
    }

    if (to) {
        const isExternalLink = to.startsWith('http://') || to.startsWith('https://');

        return (
            <Anchor className={`${className ? ` ${className}` : ""}`} target={isExternalLink ? "_blank" : target} rel={rel} to={to}>
                {children}
            </Anchor>
        )
    }

    return (
        <button className={`${className ? ` ${className}` : ""}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Link;