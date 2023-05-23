import type { Meta, StoryObj } from '@storybook/react';
import { generateMockWeatherPoints } from '../../mocks/generateMockWeatherPoints';
import { URL } from '../hooks/useWeathePoints';
import WeatherPoints from './WeatherPoints';

const meta: Meta<typeof WeatherPoints> = {
    title: 'Pages/WeatherPoints',
    component: WeatherPoints,
    parameters: {
        mockData: [
            {
                url: URL,
                method: 'GET',
                status: 200,
                response: generateMockWeatherPoints(),
            }
        ]
    }
};

export default meta;

type Story = StoryObj<typeof WeatherPoints>;

export const Default: Story = {
    render: () => <WeatherPoints />,
};
