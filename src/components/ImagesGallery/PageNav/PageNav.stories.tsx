
import type { Meta, StoryObj } from '@storybook/react';
import PageNav from './PageNav';

const meta: Meta<typeof PageNav> = {
    title: 'PageNav',
    component: PageNav,
};

export default meta;
type Story = StoryObj<typeof PageNav>;

export const WithIndex: Story = {
    render: () => <PageNav index={5} pages={9} />,
};

export const WithOutIndex: Story = {
    render: () => <PageNav pages={9} />,
};

export const Default: Story = {
    render: () => <PageNav />,
};

