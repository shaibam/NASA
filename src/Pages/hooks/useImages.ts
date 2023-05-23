import React, { useEffect, useState } from 'react'
import { PhotoType } from '../../Types/PhotoType'
import imagesMock from '../../mocks/mockPhotos.json'
import _ from 'lodash'

const remapPhotos = (photos: any): PhotoType[] => {
    return _.map(photos, ({ id, img_src, camera, earth_date }) => {
        return {
            id,
            src: img_src,
            cameraName: camera.full_name,
            date: earth_date
        }
    })
}

export const useImages = (date: string) => {
    const [images, setImages] = useState<PhotoType[]>([])

    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=DEMO_KEY&page=1`)
            .then(r => r.json())
            .then(j => {
                let remappedPhotos
                if (j?.photos?.length) {
                    remappedPhotos = remapPhotos(j.photos);
                    setImages(remappedPhotos)
                } else { // just for development as fallback when data does not arrive
                    remappedPhotos = remapPhotos(imagesMock.photos);
                    setImages(remappedPhotos)
                }
            })
    }, [date])

    return images;
}

