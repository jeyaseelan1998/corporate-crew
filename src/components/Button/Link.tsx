import React from 'react';
import NextLink from 'next/link';

interface Props {
    href?: string;
    children: React.ReactNode;
    type?: 'submit' | 'button';
    target?: '_blank' | '_self';
    onClick?: () => void;
    className?: string;
}

const Link = (props: Props) => {
    const { type, children, onClick, href, className, target = "_self" } = props;

    const email = typeof href === "string" && href.startsWith("mailto:");
    const tel = typeof href === "string" && href.startsWith("tel:");

    if ( email || tel) {
        return (
            <a href={href} className={className} target={target}>{children}</a>
        )
    }

    if (href) {
        return (
            <NextLink href={href} className={className} target={target}>{children}</NextLink>
        )
    }

    if (type === "submit") {
        return (
            <button className={className} type='submit'>{children}</button>
        )
    }

    return (
        <button className={className} type='button' onClick={onClick}>{children}</button>
    )
}

export default Link;