import React, { useMemo, useState } from 'react'
import Gallery from './Gallery/Gallery'
import PageNav from './PageNav/PageNav'
import _ from 'lodash'

type Props = {
    images?: Array<{
        id: number,
        src?: string,
        cameraName?: string,
        date?: string
    }>
}

const ImagesGallery = ({ images }: Props) => {

    const IMAGES_IN_VIEW = 15
    const [pageIndex, setPageIndex] = useState(0);

    const startImageIndex = useMemo(() => {
        return pageIndex * IMAGES_IN_VIEW
    }, [pageIndex])

    const pages = useMemo(() => {
        return Math.ceil((images?.length || 0) / IMAGES_IN_VIEW)
    }, [images])

    const imagesMemo = useMemo(() => {
        return images?.slice(startImageIndex, startImageIndex + IMAGES_IN_VIEW);
    }, [pages])
    
    console.log({pages,pageIndex})
    return (
        <>
            <Gallery images={imagesMemo} />
            <PageNav pages={pages} index={pageIndex} onSetPage={setPageIndex}/>
        </>
    )
}

export default ImagesGallery