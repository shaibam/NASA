import React from 'react'

import style from './style/style.module.css'

type Props = {
    src?: string,
    cameraName?: string,
    displayDate?: string
}

const Image = ({ src, cameraName = '', displayDate = '' }: Props) => {
    if (!src) return null
    return (
        <div className={style.main}>
            <img className={style.image} src={src} alt="" />
            <div className={style.details}>
                <span>{cameraName}</span>
                <span>{displayDate}</span>
            </div>
        </div>
    )
}

export default Image