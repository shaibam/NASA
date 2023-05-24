import React, { useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },        
    },
};

type Props = {
    labels: string[]
    datasets: any[]
}
const LineChart = ({ labels, datasets }: Props) => {
    const data = useMemo(() => {
        return { labels, datasets }
    }, [labels, datasets])

    return <Line options={options} data={data} />;
}

export default LineChart
