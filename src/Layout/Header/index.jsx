import { Link, useLocation } from "react-router-dom";
import React from "react";

import Container from "../../Components/Container";
import logo from "../../assets/logo.png";

import style from './style.module.css';

const links = [
    { title: "Home", url: "/" },
    { title: "Services", url: "/services" },
    { title: "About us", url: "/about-us" },
    { title: "Contact", url: "/contact" }
];

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className={style.header}>
            <Container className={style.background}>
                <div className={style.logoContainer}>
                    <div className={style.logo}>
                        <img src={logo} alt="Crew Logo" />
                    </div>
                </div>
                <nav className={style.nav}>
                    <ul className={style.list}>
                        {
                            links.map((link, index) => (
                                <li key={`menu_link_${index}`}>
                                    <Link to={link.url} className={`underline ${style.navLink}${pathname === link.url ? ` ${style.active}` : ""}`}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;