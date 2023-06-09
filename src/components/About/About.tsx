import React from 'react'
import Button from './Button/Button'
import style from './style/style.module.css'
import { Link } from "react-router-dom";

type Props = {
}

const About = (props: Props) => {    
    return (
        <div className={style.main}>
            <div className={style.imageWrapper}>
                <img className={style.image} src='https://mars.nasa.gov/internal_resources/586/' alt='cover' />
                <span className={style.imageDescription} >Curiosity rover image</span>
            </div>
            <div className={style.right}>
                <p className={style.details}>
                    Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars. It launched Nov. 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).
                    Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.
                </p>
                <div className={style.buttons}>
                    <Button>
                        {!process.env.STORYBOOK_DEV ? <Link to={'/images'}>View Images By Date</Link> : 'View Images By Date'}
                    </Button>
                    <Button>
                        {!process.env.STORYBOOK_DEV ? <Link to={'/weather-points'}>View Weather</Link> : 'View Weather'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default About