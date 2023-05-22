import _ from 'lodash'
import React from 'react'
import Button from './Button/Button'
import style from './style/style.module.css'

type Props = {
    text?: string,
    image?: object,
    onViewByDate?: () => any,
    onViewWeather?: () => any,
}

const About = ({ text, image, onViewByDate, onViewWeather }: Props) => {
    if (!text && _.isEmpty(image)) return null
    return (
        <div className={style.main}>
            <div className={style.imageWrapper}>
                <img className={style.image} src='https://mars.nasa.gov/internal_resources/586/' />
                <span>Curiosity rover image</span>
            </div>
            <div className={style.right}>
                <p className={style.details}>
                    Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars. It launched Nov. 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).
                    Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.
                </p>
                <div className={style.buttons}>
                    <Button onClick={onViewByDate}>View Images By Date</Button>
                    <Button onClick={onViewByDate}>View Weather</Button>
                </div>
            </div>
        </div>
    )
}

export default About