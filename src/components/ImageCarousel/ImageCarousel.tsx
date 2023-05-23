import clsx from 'clsx'
import _ from 'lodash'
import React, { useState } from 'react'
import ItemContainer from './ItemContainer/ItemContainer'
import style from './style/style.module.css'

export type Record = {
    id: number,
    src?: string,
    cameraName?: string,
    date?: string
}

export type Props = {
    images?: Array<Record>
}

const ImageCarousel = ({ images }: Props) => {
    const IMAGES_IN_VIEW = 5
    const [inView, setInView] = useState({
        start: 0,
        end: IMAGES_IN_VIEW - 1,
        direction: 1
    })

    if (!images?.length) return null;

    const handleNext = () => {
        setInView(({ start, end }) => (
            {
                start: start + 1,
                end: Math.min(end + 1, images.length),
                direction: 1
            }
        ))
    }

    const handleBack = () => {
        setInView(({ start, end }) => (
            {
                start: Math.max(start - 1, 0),
                end: end - 1,
                direction: -1
            }
        ))
    }
    return (
        <div className={style.main}>
            <div className={style.arrowContainer}>
                <button className={clsx(style.arrow, style.left)} onClick={handleBack}></button>
            </div>
            <ul className={style.list}>
                {_.map(images, ({ id, src, cameraName, date }, index) => {
                    if (!src) return null;
                    return <ItemContainer
                        key={id}
                        src={src}
                        scrollIntoView={index === (inView.direction === 1 ? inView.end : inView.start)}
                    />
                })}
            </ul>
            <div className={style.arrowContainer}>
                <button className={clsx(style.arrow, style.right)} onClick={handleNext}></button>
            </div>
        </div >
    )
}

export default ImageCarousel