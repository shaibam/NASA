import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';

const meta: Meta<typeof Image> = {
  title: 'Image',
  component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

export const WithProps: Story = {
  render: () => <Image src='https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FLB_657515400EDR_F0830306FHAZ00206M_.JPG'/>,
};

export const Default: Story = {
  render: () => <Image />,
};

