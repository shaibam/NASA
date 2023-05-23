import type { Meta, StoryObj } from '@storybook/react';
import IMAGES from './mock/mockPhotos.json';
import ImageCarousel from './ImageCarousel';
import _ from 'lodash';

const meta: Meta<typeof ImageCarousel> = {
    title: 'ImageCarousel',
    component: ImageCarousel,
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;

const filterPhotos = (photos: any) => {
    return _.map(photos, ({ id, img_src, camera, earth_date }) => {
        return {
            id,
            src: img_src,
            cameraName: camera.full_name,
            date: earth_date
        }
    })
}

export const WithProps: Story = {
    render: () => <ImageCarousel
        images={filterPhotos(IMAGES.photos)} />,
};

export const Default: Story = {
    render: () => <ImageCarousel />,
};

