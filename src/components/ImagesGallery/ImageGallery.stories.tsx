import type { Meta, StoryObj } from '@storybook/react';
import IMAGES from './mock/mockPhotos.json';
import ImageGallery from './ImagesGallery';
import _ from 'lodash';

const meta: Meta<typeof ImageGallery> = {
    title: 'ImageGallery',
    component: ImageGallery,
};

export default meta;
type Story = StoryObj<typeof ImageGallery>;

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
    render: () => <ImageGallery
        images={filterPhotos(IMAGES.photos)} />,
};

export const Default: Story = {
    render: () => <ImageGallery />,
};
