import React, { useMemo, useState } from 'react'
import WeatherPoint from '../WeatherPoint/WeatherPoint'
import style from './style/style.module.css'
import _ from 'lodash'
import PageNav from '../ImagesGallery/PageNav/PageNav'

type Props = {
    points: any
}

const WeatherPoints = ({ points = [] }: Props) => {

    const ITEMS_IN_VIEW = 9;
    const [pageIndex, setPageIndex] = useState(0);

    const startImageIndex = useMemo(() => {
        return pageIndex * ITEMS_IN_VIEW
    }, [pageIndex])

    const pages = useMemo(() => {
        return Math.ceil((points?.length || 0) / ITEMS_IN_VIEW)
    }, [points])

    const pointsMemo = useMemo(() => {
        return points?.slice(startImageIndex, startImageIndex + ITEMS_IN_VIEW);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageIndex, pages])

    return (
        <>
            <div className={style.points}>
                {_.map(pointsMemo, ({ dataPoint, temperature, wind, pressure, firstUTC, lastUTC }) => {
                    return <WeatherPoint
                        dataPoint={dataPoint}
                        temperature={temperature}
                        wind={wind}
                        pressure={pressure}
                        firstUTC={firstUTC}
                        lastUTC={lastUTC}
                    />
                })}
            </div>
            <div className={style.pageNav}>
                <PageNav pages={pages} index={pageIndex} onSetPage={setPageIndex} />
            </div>
        </>
    )
}

export default WeatherPoints