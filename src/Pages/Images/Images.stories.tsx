import type { Meta, StoryObj } from '@storybook/react';
import imagesMock from '../../mocks/mockPhotos.json'

import Images from './Images';

const meta: Meta<typeof Images> = {
    title: 'Pages/Images',
    component: Images,
    parameters: {
        mockData: [
            {
                url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-11-1&api_key=DEMO_KEY&page=1',
                method: 'GET',
                status: 200,
                response: imagesMock,
            }
        ]
    }
};

export default meta;

type Story = StoryObj<typeof Images>;

export const Default: Story = {
    render: () => <Images />,
};
