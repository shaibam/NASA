import type { Meta, StoryObj } from '@storybook/react';

import Item from './Item';

const meta: Meta<typeof Item> = {
    title: 'Item',
    component: Item,
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
    render: () => <Item />,
};

export const WithProps: Story = {
    render: () => <Item
        prop={'DataPoint:'}
        value='689'
    />,
};
