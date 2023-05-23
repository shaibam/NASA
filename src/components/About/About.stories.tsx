import type { Meta, StoryObj } from '@storybook/react';
import {
    createBrowserRouter,
    RouterProvider,
    // Route,
    // Link,
} from "react-router-dom";

import About from './About';

const meta: Meta<typeof About> = {
    title: 'About',
    component: About,
    parameters: {
        reactRouter: {
            routePath: '/',
        }
    }
};

const router = createBrowserRouter([
    {
        path: "*",
        element: (<About />),
    },
    {
        path: "about",
        element: (<div />),
    },
    {
        path: "images",
        element: (<div />),
    },
    {
        path: "weather-points",
        element: (<div />),
    },
]);

export default meta;
type Story = StoryObj<typeof About>;

export const WithProps: Story = {
    render: () => <RouterProvider router={router} />,
};

export const Default: Story = {
    render: () => <About />,
};
