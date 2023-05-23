import type { Meta, StoryObj } from '@storybook/react';
import { generateMockWeatherPoints } from '../../mocks/generateMockWeatherPoints';
import { remapWeather } from '../../Pages/hooks/useWeathePoints';
import WeatherPoints from './WeatherPoints';

const meta: Meta<typeof WeatherPoints> = {
    title: 'WeatherPoints',
    component: WeatherPoints,

};

export default meta;

type Story = StoryObj<typeof WeatherPoints>;

const generatedPoints = generateMockWeatherPoints();
const remapWeatherPoints = remapWeather(generatedPoints)

export const Default: Story = {
    render: () => <WeatherPoints points={remapWeatherPoints} />,
};
