# Ebay assignment for createing a simple ReactJS app using NASA's APIs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
developed using [Storybook](https://storybook.js.org/) and [React Router](https://reactrouter.com/en/main).

It was written in Typescript and uses css modules.

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run storybook`

Runs the storybook app displaying all pages and components in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## File Hierarchy
*   Every **.tsx** component/page has it's own folder with a **.stories.tsx** file next to it, and a style folder containing **style.module.css**
*   Elements are placed according to their role in either **components** or **pages** folder
*   If a component is only used under a specific parent component and is never reused it is placed according to the above rules in it's parent folder. If it is reused it moves to the root of te components folder,
## Notes
*   During development, the API's returned a **status:error** because of too many requests, so a mock API was used instead.
*   Bonus task done - Toggle weather points view from list to chart
*   Bonus task done - Display basic info on image hover
*   Responsiveness wasn't implemented.

