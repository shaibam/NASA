import type { Meta, StoryObj } from '@storybook/react';

import Item from './Item';

const meta: Meta<typeof Item> = {
    title: 'Data point item',
    component: Item,
};

export default meta;
type Story = StoryObj<typeof Item>;

export const WithProps: Story = {
    render: () => <Item
        prop={'DataPoint:'}
        value='689'
    />,
};

export const Default: Story = {
    render: () => <Item />,
};
