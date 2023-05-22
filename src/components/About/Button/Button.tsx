import React from 'react'
import style from './style/style.module.css';

type Props = {
    children?: any
    onClick?: () => any
}

const Button = ({ children, onClick }: Props) => {
    return (
        <button className={style.button} onClick={onClick}>{children}</button>
    )
}

export default Button