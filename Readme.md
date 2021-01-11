# Getting Started

Offline caching through service workers is enabled in production mode.

Please not that if running in production mode some dev tools extensions may interfere with the app https://github.com/facebook/react/issues/17954. Please run in incognito mode in Chrome else.

Redux and Typescript has been used and few test cases have been written, using enzyme

The resposiveness has been handled using Flexbox and Styled components has been used as a CSS-IN-JSS library.

The websocket connections are being handled in Redux Middleware.

Please connect both the players to start the game.

TSLINT errors have not been fixed

## Learn More

The Websocket url can be replaced in src/common/constants/constants-utility in URL_SOCKET variable. The Serverless Backend app is hosted in the repo https://github.com/shaunak1111/ScooberGameBackend

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.




