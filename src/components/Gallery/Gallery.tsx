import React, { useMemo, useState } from 'react'
import _ from 'lodash'
import style from './style/style.module.css'
import Image from '../Image/Image'

type Props = {
  images?: Array<{
    id: number,
    src?: string,
    cameraName?: string,
    date?: string
  }>
}

const Gallery = ({ images }: Props) => {
  const IMAGES_IN_VIEW = 15
  const [pageIndex, setPageIndex] = useState(0);

  const startImageIndex = useMemo(() => {
    return pageIndex * IMAGES_IN_VIEW
  }, [pageIndex])

  const pages = useMemo(() => {
    return Math.ceil((images?.length || 0) / IMAGES_IN_VIEW)
  }, [images])  

  return (
    <>
      <div className={style.images}>
        {_.map(images?.slice(startImageIndex, startImageIndex + IMAGES_IN_VIEW), ({ id, src, cameraName, date }, index) => {
          if (!src) return null;
          return <Image
            key={id}
            src={src}
          />
        })}
      </div>
      <ul className={style.pages}>
        <li>Next</li>
        <li>Prev</li>
      </ul>
    </>
  )
}

export default Gallery