import React from 'react';

import style from "./style.module.css";

const Spacer = ({ size = 25 }) => {
    return (
        <div className={`${style["s" + size]}`}></div>
    )
}

export default Spacer;