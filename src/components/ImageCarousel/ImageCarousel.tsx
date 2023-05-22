import _ from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import Image from '../Image/Image'
import style from './style/style.module.css'

type ItemProps = {
    scrollIntoView: boolean,
    src?: string,
}

const Item = ({ scrollIntoView, src }: ItemProps) => {
    const itemRef = useRef<HTMLLIElement>(null);
    useEffect(() => {
        if (!itemRef.current || !scrollIntoView) return;
        console.log('go', itemRef.current)
        itemRef.current.scrollIntoView({ behavior: "smooth" })
    }, [scrollIntoView])

    return (<li className={style.item} ref={itemRef}><Image src={src} /></li>)
}

type Props = {
    images?: Array<{
        id: number,
        src?: string,
        cameraName?: string,
        date?: string
    }>
}

const ImageCarousel = ({ images }: Props) => {
    const [startIndex, setStartIndex] = useState(4)
    const listRef = useRef<any>()

    useEffect(() => {
        if (listRef?.current) {

        }
    }, [startIndex])

    if (!images?.length) return null;

    const handleNext = () => {
        setStartIndex(current => current + 1)
    }

    return (
        <div className={style.main}>
            <ul className={style.list} ref={listRef}>
                {_.map(images, ({ id, src, cameraName, date }, index) => {                    
                    if (!src) return null;
                    return <Item
                        key={id}
                        src={src}
                        scrollIntoView={index === startIndex}
                    />
                })}
            </ul>
            <button onClick={handleNext}>Next</button>
        </div >
    )
}

export default ImageCarousel