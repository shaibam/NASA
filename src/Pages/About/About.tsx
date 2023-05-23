import React from 'react'
import AboutComponent from '../../components/About/About'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import _ from 'lodash'
import style from './style/style.module.css'
import { useImages } from '../hooks/useImages'

const About = () => {
    const date: string = (new Date()).toISOString().split('T')[0];
    const images = useImages(date);

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