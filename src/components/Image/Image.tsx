import React from 'react'

import style from './style/style.module.css'

type Props = {
    src?: string
}

const Image = ({ src }: Props) => {
    if (!src) return null
    return (
        <div className={style.main}>
            <img className={style.image} src={src} alt="" />
        </div>
    )
}

export default Image