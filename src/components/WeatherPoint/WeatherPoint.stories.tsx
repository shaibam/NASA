import type { Meta, StoryObj } from '@storybook/react';

import WeatherPoint from './WeatherPoint';

const meta: Meta<typeof WeatherPoint> = {
  title: 'WeatherPoint',
  component: WeatherPoint,
};

export default meta;
type Story = StoryObj<typeof WeatherPoint>;

export const WithProps: Story = {
  render: () => <WeatherPoint
    dataPoint="689"
    temperature={-60.96}
    wind={8.45}
    pressure={745.784}
    firstUTC="2023-05-22T17:57:07.40Z"
    lastUTC="2023-05-22T17:57:07.40Z"
  />,
};

export const Default: Story = {
  render: () => <WeatherPoint />,
};

