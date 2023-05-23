import React, { useState } from 'react'
import DateInput from '../../components/DateInput/DateInput'
import ImagesGallery from '../../components/ImagesGallery/ImagesGallery'
import { useImages } from '../hooks/useImages'
import style from './style/style.module.css'
type Props = {}

const TODAY: string = (new Date()).toISOString().split('T')[0];

const Images = (props: Props) => {

    const [date, setDate] = useState<string>(TODAY)
    const images = useImages(date);

    const handleDateChange = (date: string) => {
        setDate(date)
    }

    return (
        <div className={style.main}>
            <h1 className={style.pageTitle}>Mars Images By Date</h1>
            <div className={style.date}>
                <DateInput
                    date={date}
                    onChange={handleDateChange}
                />
            </div>
            <ImagesGallery
                images={images}
            />
        </div>
    )
}

export default Images