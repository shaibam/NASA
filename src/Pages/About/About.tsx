import React, { useEffect, useState } from 'react'
import AboutComponent from '../../components/About/About'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import { Record as imagesType } from '../../components/ImageCarousel/ImageCarousel'
import _ from 'lodash'
import style from './style/style.module.css'

const filterPhotos = (photos: any): imagesType[] => {
    return _.map(photos, ({ id, img_src, camera, earth_date }) => {
        return {
            id,
            src: img_src,
            cameraName: camera.full_name,
            date: earth_date
        }
    })
}

const About = () => {
    const [images, setImages] = useState<imagesType[]>([])

    useEffect(() => {
        const date: string = (new Date()).toISOString().split('T')[0];        
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=DEMO_KEY&page=1`)
            .then(r => r.json())
            .then(j => {
                if (j?.photos?.length) {
                    const filteredPhotos = filterPhotos(j.photos);
                    setImages(filteredPhotos)
                }
            })
    }, [])

    return (
        <div className={style.main}>
            <h1 className={style.pageTitle}>About The Program</h1>
            <div className={style.aboutPage}>
                <div className={style.top}>
                    <AboutComponent />
                </div>
                <div className={style.bottom}>
                    <div className={style.carouselTitle}>
                        <span>Curiosity rover images</span> <span className={style.secondary}>from today</span>
                    </div>
                    <ImageCarousel images={images} />
                </div>
            </div>
        </div>
    )
}

export default About