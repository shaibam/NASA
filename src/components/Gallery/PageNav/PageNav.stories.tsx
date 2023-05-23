
import type { Meta, StoryObj } from '@storybook/react';
import PageNav from './PageNav';
import _ from 'lodash';

const meta: Meta<typeof PageNav> = {
    title: 'PageNav',
    component: PageNav,
};

export default meta;
type Story = StoryObj<typeof PageNav>;


export const Default: Story = {
    render: () => <PageNav />,
};
export const WithProps: Story = {
    render: () => <PageNav index={0} pages={9} />,
};
