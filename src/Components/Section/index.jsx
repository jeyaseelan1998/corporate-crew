import React from 'react';

import Container from '../Container';

import style from './style.module.css';

const Section = ({ tag = "section", children, color = "primary" }) => {
    const Tag = tag;
    return (
        <Tag className={`${style.section} ${style[color]}`}>
            <Container>
                {children}
            </Container>
        </Tag>
    )
}

export default Section;