import React from 'react'
import _ from 'lodash'
import style from './style/style.module.css'
import Image from '../../Image/Image'

type Props = {
  images?: Array<{
    id: number,
    src?: string,
    cameraName?: string,
    date?: string
  }>
}

const Gallery = ({ images }: Props) => {
  return (
    <>
      <div className={style.images}>
        {_.map(images, ({ id, src, cameraName, date }, index) => {
          if (!src) return null;
          const displayDate = !date ? '' : new Date(date).toDateString()
          return <Image
            key={id}
            src={src}
            cameraName={cameraName}
            displayDate={displayDate}
          />
        })}
      </div>

    </>
  )
}

export default Gallery