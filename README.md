# fullstack-open-2020 part10 - React Native <br>

Course of the University of Helsinki about building single page applications with ReactJS that use REST APIs built with Node.js.

Learn how to build native Android and iOS mobile applications with JavaScript and React using the React Native framework. Dive into the React Native ecosystem by developing an entire mobile application from scratch. Along the way, we will learn concepts such as how to render native user interface components with React Native, how to create beautiful user interfaces, how to communicate with a server, and how to test a React Native application.

For more info see the course website: <br>
https://fullstackopen.com/en/part10

### Notes a. Introduction to React Native

React Native is a framework for developing native Android and iOS apps using JS and React. It provides a set of cross-platform components that utilize the platforms native components. <br>

**What we will be building** <br>
In this part we will create an app for rating GitHub repo's. The app will contain features such as filtering and sorting reviewed repo's, registering a use, logging in and creating a review for a repo. The backend of the app will be provided. <br>

**Initializing React Native app**
_Expo_ is like `create-react-app` for React Native. To use expo, you will need to install expo-cli: <br>
`npm install --global expo-cli` <br>
To initialize the app, use the command: <br>
`expo init name-of-app` <br>

`app.json` file in expo project contains the expo related config.
Running `npm start` script will start the Metro bundler, a JS bundler for React Native (kind of like webpack for react native ecosystem). To run the app in the browser, click `Run in webbrowser` in expo development tools. <br>

**Setting up the development environment** <br>
Android and iOS devices van be emulated in computers using specific emulators. macOS can use both Android and iOS emulators, while other operating systems like Linux and Windows can only use Android emulators. After setting up an emulator, you can run your React Native app in it.
You can also use Expo mobile app to preview your app on an actual mobile device. <br>

**ESlint** <br>
To add eslint to expo project install `eslint babel-eslint eslint-plugin-react` as dev dependencies and add linting rules in `.eslintrc` file in the root of project. Add a lint script to `package.json`: <br>
`"lint": "eslint ./src/**/*{js, jsx} -no-error-on-unmatched-pattern"` --> `-no-error-unmatched-pattern` prevents error when there are no files in linting directory. <br>

**Viewing logs** <br>
Expo developments tools display log messages. Errors and warnings can also be viewed in emulator and mobile expo app. `console.log` can be used to help with debugging. <br>
