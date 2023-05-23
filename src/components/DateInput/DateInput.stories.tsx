import type { Meta, StoryObj } from '@storybook/react';

import DateInput from './DateInput';

const meta: Meta<typeof DateInput> = {
    title: 'Date Input',
    component: DateInput,
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
    render: () => <DateInput />,
};
