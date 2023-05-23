import { useEffect, useState } from 'react'
import { WeatherPointType } from '../../Types/WeatherPointType'
import _ from 'lodash'
import { generateMockWeatherPoints } from '../../mocks/generateMockWeatherPoints'

export const URL = `https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`

export const remapWeather = (points: any) => {
    const data = _.omit(points, ['sol_keys', 'validity_checks']);
    return _.map(data, ({ AT, HWS, PRE, First_UTC, Last_UTC }, key) => {
        return {
            dataPoint: key,
            temperature: AT.av,
            wind: HWS.av,
            pressure: PRE.av,
            firstUTC: First_UTC,
            lastUTC: Last_UTC
        }
    })
}

export const useWeather = () => {
    const [weatherPointList, setWeatherPointList] = useState<WeatherPointType[]>([])

    useEffect(() => {
        fetch(URL)
            .then(r => r.json())
            .then(j => {
                if (j.error) {
                    const points: any = remapWeather(generateMockWeatherPoints());
                    setWeatherPointList(points);
                } else {
                    setWeatherPointList(remapWeather(j))
                }
            })
    }, [])

    return weatherPointList;
}

