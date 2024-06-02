import { FC } from "react";
import { ButtonProps } from "./Button.props";
import cl from 'classnames'
import style from './Button.module.scss'

const Button:FC<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button className={cl(style['button'], className)} {...props}>{children}</button>
    );
};

export default Button;