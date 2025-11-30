import React from 'react'
import { IconType } from 'react-icons';

import Link from "./Link";
import Spinner from '../Spinner';
import { getReactIcons } from '@/src/utils/icons';

import style from "./style.module.css";

interface Props {
    to?: string;
    type?: 'submit' | 'button';
    target?: '_blank' | '_self';
    onClick?: () => void;
    className?: string;
    variant?: keyof typeof style;
    label?: string;
    size?: string;
    icon?: string;
    disabled?: boolean;
    loading?: boolean;
}

const Button = (props: Props) => {
    const { to, type, target, onClick, className, variant = "primary", label, disabled, loading, size = "24", icon = '' } = props;

    const Icon = getReactIcons(icon) as IconType;

    if (loading) {
        return (
            <div className={`${style.button}${className ? ` ${className}` : ''}${style[variant] ? ` ${style[variant]}` : ''}`}>
                <Spinner size={size} color='var(--red)' />
            </div>
        )
    }

    if (disabled) {
        return (
            <div className={`${style.button}${className ? ` ${className}` : ''}${style[variant] ? ` ${style[variant]}` : ''}`}>
                {
                    Icon && (
                        <Icon size={15} />
                    )
                }
                <span>{label}</span>
            </div>
        )
    }

    return (
        <Link href={to} type={type} target={target} onClick={onClick} className={`${style.button}${className ? ` ${className}` : ''}${style[variant] ? ` ${style[variant]}` : ''}`}>
            {
                Icon && (
                    <Icon size={15} />
                )
            }
            <span>{label}</span>
        </Link>
    )
}

export default Button;