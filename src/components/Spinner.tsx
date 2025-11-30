import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Spinner = ({ size = "24", color = "grey", wrapperClass = "" }) => {
    return (
        <RotatingLines
            visible={true}
            height={size}
            width={size}
            color={color}
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperClass={wrapperClass}
        />
    )
}

export default Spinner;