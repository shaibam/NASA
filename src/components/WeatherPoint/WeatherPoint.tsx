import React from 'react'
import style from './style/style.module.css'
import Item from './Item/Item';
import _ from 'lodash';

type Props = {
    dataPoint?: string,
    temperature?: number,
    wind?: number,
    pressure?: number,
    firstUTC?: string,
    lastUTC?: string
}

const WeatherPoint = ({ dataPoint, temperature, wind, pressure, firstUTC, lastUTC }: Props) => {
    if (_.isNil(dataPoint)) return null
    return (
        <div className={style.main}>
            <ul className={style.list}>
                <Item prop={`Data point:`} value={dataPoint} />
                <Item prop={`Temperature[AVG]:`} value={String(temperature)} />
                <Item prop={`Wind[AVG]:`} value={String(wind)} />
                <Item prop={`Pressure[AVG]:`} value={String(pressure)} />
                <Item prop={`First UTC:`} value={firstUTC} />
                <Item prop={`Last UTC:`} value={lastUTC} />
            </ul>
        </div>
    )
}

export default WeatherPoint
