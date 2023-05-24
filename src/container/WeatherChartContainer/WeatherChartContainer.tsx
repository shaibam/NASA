import React from 'react'
import LineChart from '../../components/LineChart/LineChart';
import _ from 'lodash';

type Props = {
    points: any
}

const WeatherChartContainer = ({ points }: Props) => {
    const labels: string[] = _.map(points, 'dataPoint');
    const datasets: any[] = [
        {
            label: 'AT',
            data: _.map(points, 'temperature'),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'HWS',
            data: _.map(points, 'wind'),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'PRE',
            data: _.map(points, 'pressure'),
            borderColor: 'rgb(155, 99, 32)',
            backgroundColor: 'rgba(155, 99, 32, 0.5)',
        },
    ]

    return (<>
        <LineChart
            labels={labels}
            datasets={datasets}
        />
    </>)
}

export default WeatherChartContainer