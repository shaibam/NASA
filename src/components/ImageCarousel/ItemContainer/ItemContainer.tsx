import React, { useEffect, useRef } from 'react'
import Image from '../../Image/Image';
import style from './style/style.module.css'
type Props = {
    scrollIntoView: boolean,
    src?: string,
}

const ItemContainer = ({ scrollIntoView, src }: Props) => {
    const itemRef = useRef<HTMLLIElement>(null);
    useEffect(() => {
        if (!itemRef.current || !scrollIntoView) return;
        itemRef.current.scrollIntoView({ behavior: "smooth" })
    }, [scrollIntoView])

    return (<li className={style.item} ref={itemRef}><Image src={src} /></li>)
}

export default ItemContainer