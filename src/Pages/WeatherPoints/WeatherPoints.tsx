import React, { useState } from 'react'
import { useWeather } from '../hooks/useWeathePoints';
import WeatherPointsList from '../../components/WeatherPoints/WeatherPoints';
import style from './style/style.module.css';
import WeatherChartContainer from '../../container/WeatherChartContainer/WeatherChartContainer';

type Props = {}

const VIEWS = {
  LIST: 'list',
  GRAPH: 'graph'
}

const WeatherPoints = (props: Props) => {

  const [view, setView] = useState(VIEWS.LIST)
  const points = useWeather();

  const handleListView = () => {
    setView(VIEWS.LIST)
  }

  const handleGraphView = () => {
    setView(VIEWS.GRAPH)
  }

  return (
    <div className={style.main}>
      <div className={style.header}>
        <h1 className={style.pageTitle}>Mars Weather</h1>
        <div className={style.views}>
          <button className={view === VIEWS.LIST ? style.selected : undefined} onClick={handleListView}>List view</button>
          <button className={view === VIEWS.GRAPH ? style.selected : undefined} onClick={handleGraphView}>Graph view</button>
        </div>
      </div>
      {view === VIEWS.LIST ?
        <WeatherPointsList points={points} />
        :
        <WeatherChartContainer points={points} />
      }
      <h3>AT - Atmospheric temperature sensor</h3>
      <h3>HWS - Horizontal wind sensor</h3>
      <h3>PRE - Atmospheric pressure sensor</h3>
    </div>
  )
}

export default WeatherPoints