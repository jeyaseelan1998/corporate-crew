"use client";
import Button from '@/src/components/Button';
import Section from '@/src/components/Section';
import { useContextAPI } from '@/src/components/store';
import React from 'react';

// import HEADER_DATA from "../../data/header.json";

const Header = () => {
    const { theme, setTheme } = useContextAPI();

    return (
        <Section tag='header'>
            <h1 onClick={() => setTheme((v: string) => v === "light" ? "dark" : "light")}>{theme}</h1>
            <Button variant="primaryDark" icon="send" />
        </Section>
    )
}

export default Header;