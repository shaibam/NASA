import React, { useEffect, useMemo, useRef } from 'react'
import Image from '../../Image/Image';
import style from './style/style.module.css'
type Props = {
    scrollIntoView: boolean,
    src?: string,
    cameraName?: string,
    date?: string

}

const ItemContainer = ({ scrollIntoView, src, cameraName, date }: Props) => {
    const itemRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (!itemRef.current || !scrollIntoView) return;
        itemRef.current.scrollIntoView({ behavior: "smooth" })
    }, [scrollIntoView])

    const displayDate = useMemo(() => {
        if (!date) return ''
        return new Date(date).toDateString()
    }, [date])

    return (<li
        className={style.item}
        ref={itemRef}
    >
        <Image
            src={src}
            cameraName={cameraName}
            displayDate={displayDate}
        />
        {/* <div className={style.details}>
            <span>{cameraName}</span>
            <span>{displayDate}</span>
        </div> */}
    </li>)
}

export default ItemContainer