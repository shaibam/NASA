import type { Meta, StoryObj } from '@storybook/react';
import IMAGES from '../../../mocks/mockPhotos.json';
import Gallery from './Gallery';
import _ from 'lodash';

const meta: Meta<typeof Gallery> = {
    title: 'Gallery',
    component: Gallery,
};

export default meta;
type Story = StoryObj<typeof Gallery>;

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
    render: () => <Gallery
        images={filterPhotos(IMAGES.photos)} />,
};

export const Default: Story = {
    render: () => <Gallery />,
};
