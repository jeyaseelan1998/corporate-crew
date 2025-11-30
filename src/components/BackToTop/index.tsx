"use client";

import $ from "jquery-slim";
import { FaArrowUp } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Link from "../Button/Link";
import style from "./style.module.css";

const BackToTop = () => {

    const [progress, setProgress] = useState(0);

    const getScrollProgress = () => {
        const total = $(document).height() - $(window).height();
        const scrollY = window.scrollY;
        setProgress((scrollY / total) * 100);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getScrollProgress();
        window.addEventListener("scroll", getScrollProgress);
        return () => window.removeEventListener("scroll", getScrollProgress);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <Link
            className={`${style.progressBar} ${
                progress > 5 ? style.active : ""
            }`}
            onClick={scrollToTop}
        >
            <svg className={style.ring} viewBox="0 0 36 36">
                <circle
                    className={style.bg}
                    cx="18"
                    cy="18"
                    r="16"
                />
                <circle
                    className={style.progress}
                    cx="18"
                    cy="18"
                    r="16"
                    style={{
                        strokeDashoffset: `calc(100 - ${progress})`
                    }}
                />
            </svg>
{progress}
            <FaArrowUp className={style.icon} />
        </Link>
    );
};

export default BackToTop;
