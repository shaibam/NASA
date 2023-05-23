import React from 'react'
import { useWeather } from '../hooks/useWeathePoints';
import WeatherPointsList from '../../components/WeatherPoints/WeatherPoints';

import style from './style/style.module.css';
import _ from 'lodash';

type Props = {}

const WeatherPoints = (props: Props) => {

  const points = useWeather();

  return (
    <div className={style.main}>
      <h1 className={style.pageTitle}>Mars Weather</h1>
      <WeatherPointsList points={points} />
      <h3>AT - Atmospheric temperature sensor</h3>
      <h3>HWS - Horizontal wind sensor</h3>
      <h3>AT - Atmospheric pressure sensor</h3>
    </div>
  )
}

export default WeatherPoints