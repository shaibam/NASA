import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import LineChart from './LineChart';

const meta: Meta<typeof LineChart> = {
    title: 'LineChart',
    component: LineChart,
};

export default meta;
type Story = StoryObj<typeof LineChart>;

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
export const WithProps: Story = {
    render: () => <LineChart
        labels={labels}
        datasets={[
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]}
    />,
};

