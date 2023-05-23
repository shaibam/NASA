import type { Meta, StoryObj } from '@storybook/react';

import About from './About';

const meta: Meta<typeof About> = {
    title: 'About',
    component: About,
};

export default meta;
type Story = StoryObj<typeof About>;

export const WithProps: Story = {
    render: () => <About
        image={{
            caption: 'Curiosity rover image',
            src: 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FLB_657515400EDR_F0830306FHAZ00206M_.JPG'
        }}
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."        
    />,
};

export const Default: Story = {
    render: () => <About />,
};
