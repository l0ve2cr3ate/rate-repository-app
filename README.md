# fullstack-open-2020 part10 - React Native <br>

Course of the University of Helsinki about building single page applications with ReactJS that use REST APIs built with Node.js.

Learn how to build native Android and iOS mobile applications with JavaScript and React using the React Native framework. Dive into the React Native ecosystem by developing an entire mobile application from scratch. Along the way, we will learn concepts such as how to render native user interface components with React Native, how to create beautiful user interfaces, how to communicate with a server, and how to test a React Native application.

For more info see the course website: <br>
https://fullstackopen.com/en/part10

### Exercises a. Introduction to React Native

Exercise 10.1 <br>
Exercise 10.1: initializing the application <br>
Initialize your application with Expo command-line interface and set up the development environment either using an emulator or Expo's mobile app. It is recommended to try both and find out which development environment is the most suitable for you. The name of the application is not that relevant, you can, for example, go with rate-repository-app. <br>

To submit this exercise and all the future exercises you need to create a new GitHub repository. The name of the repository can be for example the name of the application you initialized with expo init. Now that the repository is created, run git init within your application's root directory to make sure that the directory is initialized as a Git repository. Next, to add the created repository as the remote run git remote add origin git@github.com:<YOURGITHUBUSERNAME>/<NAMEOFYOUR_REPOSITORY>.git (remember to replace the placeholder values in the command). Finally, just commit and push your changes into the repository and you are all done. <br>

Exercise 10.2 <br>
Exercise 10.2: setting up the ESLint <br>
Set up ESLint in your project so that you can perform linter checks by running npm run lint. To get most of linting it is also recommended to integrate ESLint with your editor. <br>

For more info about the exercises of part a, see: https://fullstackopen.com/en/part10/introduction_to_react_native <br>

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

### Exercises b. React Native Basics

Exercise 10.3. <br>
Exercise 10.3: the reviewed repositories list <br>
In this exercise, we will implement the first version of the reviewed repositories list. The list should contain the repository's full name, description, language, number of forks, number of stars, rating average and number of reviews. Luckily React Native provides a handy component for displaying a list of data, which is the FlatList component. <br>

Implement components RepositoryList and RepositoryItem in the components directory's files RepositoryList.jsx and RepositoryItem.jsx. The RepositoryList component should render the FlatList component and RepositoryItem a single item on the list (hint: use the FlatList component's renderItem prop). Use this as the basis for the RepositoryList.jsx file: <br>

```javascript
import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      // other props
    />
  );
};

export default RepositoryList;
```

Do not alter the contents of the repositories variable, it should contain everything you need to complete this exercise. Render the RepositoryList component in the Main component which we previously added to the Main.jsx file. <br>

Exercises 10.4. - 10.5. <br>
Exercise 10.4: the app bar <br>
We will soon need to navigate between different views in our application. That is why we need an app bar to display tabs for switching between different views. Create a file AppBar.jsx in the components folder with the following content:

```javascript
import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>{/* ... */}</View>;
};

export default AppBar;
```

Now that the AppBar component will prevent the status bar from overlapping the content, you can remove the marginTop style we added for the Main component earlier in the Main.jsx file. The AppBar component should currently contain a tab with text "Repositories". Make the tab touchable by using the TouchableWithoutFeedback component but you don't have to handle the onPress event in any way. Add the AppBar component to the Main component so that it is the uppermost component in the screen. <br>
The background color of the app bar in the image is #24292e but you can use any other color as well. It might be a good idea to add the app bar's background color into the theme configuration so that it is easy to change it if needed. Another good idea might be to separate the app bar's tab into its own component such as AppBarTab so that it is easy to add new tabs in the future.The background color of the app bar in the image is #24292e but you can use any other color as well. It might be a good idea to add the app bar's background color into the theme configuration so that it is easy to change it if needed. Another good idea might be to separate the app bar's tab into its own component such as AppBarTab so that it is easy to add new tabs in the future. <br>

Exercise 10.5: polished reviewed repositories list <br>
The current version of the reviewed repositories list looks quite grim. Modify the RepositoryListItem component so that it also displays repository author's avatar image. You can implement this by using the Image component. Counts, such as number of stars and forks, larger than or equal to 1000 should be displayed in thousands with precision of one decimal and with a "k" suffix. This means that for example fork count of 8439 should be displayed as "8.4k". <br>

Exercises 10.6. - 10.7. <br>
Exercise 10.6: the sign in view <br>
We will soon implement a form, which a user can use to sign in to our application. Before that, we must implement a view that can be accessed from the app bar. Create a file SignIn.jsx in the components directory.
Set up a route for this SignIn component in the Main component. Also add a tab with text "Sign in" in to the app bar next to the "Repositories" tab. User should be able to navigate between the two views by pressing the tabs (hint: use the Link component and its component prop). <br>

Exercise 10.7: scrollable app bar <br>
As we are adding more tabs to our app bar, it is a good idea to allow horizontal scrolling once the tabs won't fit the screen. The ScrollView component is just the right component for the job.

Wrap the tabs in the AppBar component's tabs with a ScrollView component.
Setting the horizontal prop true will cause the ScrollView component to scroll horizontally once the content won't fit the screen. Note that, you will need to add suitable style properties to the ScrollView component so that the tabs will be laid in a row inside the flex container. You can make sure that the app bar can be scrolled horizontally by adding tabs until the last tab won't fit the screen. Just remember to remove the extra tabs once the app bar is working as intended. <br>

Exercise 10.8. <br>
Exercise 10.8: the sign in form <br>
Implement a sign in form to the SignIn component we added earlier in the SignIn.jsx file. The sign in form should include two text fields, one for the username and one for the password. There should also be a button for submitting the form. You don't need to implement a onSubmit callback function, it is enough that the form values are logged using console.log when the form is submitted. <br>

Exercise 10.9. <br>
Exercise 10.9: validating the sign in form <br>
Validate the sign in form so that both username and password fields are required. Note that the onSubmit callback implemented in the previous exercise, should not be called if the form validation fails.

The current implementation of the FormikTextInput component should display an error message if a touched field has an error. Emphasize this error message by giving it a red color.

On top of the red error message, give an invalid field a visual indication of an error by giving it a red border color. Remember that if a field has an error, the FormikTextInput component sets the TextInput component's error prop as true. You can use the value of the error prop to attach conditional styles to the TextInput component. <br>

Exercise 10.10. <br>
Exercise 10.10: a platform specific font >br
Currently the font family of our application is set to System in the theme configuration located in the theme.js file. Instead of the System font, use a platform specific Sans-serif font. In the Android platform use the Roboto font and in the iOS platform use the Arial font. The default font can be System. <br>

For more info about the exercises of part b React Native Basics, see: <br>
https://fullstackopen.com/en/part10/react_native_basics <br>

### Notes part b. React Native Basics

In this section you will learn how to build user interfaces with RN's core components, how to add style properties to core components, how to transition between views, and how to manage form state. <br>

**Core components** <br>
React can be used to define components as functions, which receive props and return a tree of React elements. In the browser environment ReactDOM library is used to turn these components into a DOM tree which can be rendered by the browser. React is not bound to an environment, like the browser. Libraries like ReactDOM render a set of predefined components, like DOM elements in the browser. In RN these predefined components are called _core components_. These _core components_ utilize the platform's native components. <br>
Examples of _core components_:

- `Text` component: only RN component that can have textual children, similar to `<h1>` or `<p>`
- `View` component: similar to `<div>` element
- `TextInput` component: text field, similar to `<input>` element
- `TouchableWithoutFeedback` component: component capturing different press events, similar to `<button>` <br>

Differences between core components and DOM elements: <br>

- Text component is the only RN component that can have textual children, while in React for example `<div>` element can have text in it.
- Event handlers like `onClick` can be added to basically any element, such as `<div>` and `<button>`, while in RN you have to look into the API docs to know what event handlers a components accepts. `TouchableWithoutFeedback` component for example accepts `onPress` prop (which is similar to `onClick`). <br>

**Manually reloading the app** <br>
Expo automatically reloads app when you make changes. If this doesn't work, you can manually reload the app by shaking your device or using `Ctrl + M` shortcut on Windows/Linux. This will open up the developer menu, where you can press `Reload`. <br>

**Style** <br>
In RN most core components accept a `style` prop, which accepts an object with style properties and their values. Property names use camelCase, like `fontSize`. In RN all dimension related values are _unitless_ and represent _density-independent-pixels_. Defining styles directly in style prop is not very readable. Define styles outside the component using `StyleSheet.create()` method, which accepts a single argument: an object consisting of named style objects. `Style` prop also accepts an array of objects. These objects are merged from left to right, so latter style properties take presence. It works recursively. Values evaluating to false are ignored. This makes conditional styling possible: <br>

```javascript
const textStyles = [
  styles.text,
  isBlue && styles.blueText,
  isBig && styles.bigText,
];
```

**Consistent user interface with theming** <br>
Theming leads to increased consistency and flexibility. You can use variables like `colors.primary` instead of `#fff`. RN does not support global style. You can store your theme values in an object: <br>

```javascript
const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
```

and use theme in components like this: <br>

```javascript
import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
```

**Using flexbox for layout** <br>
Flexbox is a layout entity consisting of two separate components:

- _flex container_: can be created using `display: 'flex'`, and has flex items as it's direct children.
- _flex items_: immediate children of _flex container_.

Most important properties of _flex container_: <br>

- `flexDirection`: Direction in which flex items are laid out in container:`row`, `row-reverse`, `column` (default), `column-reverse`. `row` --> positions flex items from left to right. `column` --> positions flex items from top to bottom.
- `justifyContent`: alignment of flex items along **main** axis.
- `alignItems`: same as `justifyContent` but for **opposite** axis. <br>

One of the most commonly used properties of _flex item_ is `flexGrow` property. If all flex items have `flexGrow: 1`, they will share available space evenly. If one flex item has `flexGrow: 0` it will only take the space it's content requires, and leave the rest of the space for the other flex items. <br>
**Note:** In RN the _property names_ are the same as in CSS, except the naming uses camelCase in RN, but the _property values_ (`flex-start`) are exactly the same. <br>

**Routing** <br>
In RN you can't reference pages with urls typed into browser address bar, nor can you navigate back and forth using the browser's history API. But you can use React Router. Only `BrowserRouter` needs to be replaced with `NativeRouter` from `react-router-native` lib. Using `react-router-native` lib will break Expo's web browser preview. This can be fixed by extending Expo's Webpack config, so it transpiles `react-router-native` lib sources with Babel. For this you will need to install `@expo/webpack-config` lib, and add the following to `webpack.config.js` file in the root directory of your project: <br>

```javascript
const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.js$/,
    loader: "babel-loader",
    include: [path.join(__dirname, "node_modules/react-router-native")],
  });

  return config;
};
```

Now you can wrap the `Main` component in the `App.jsx` file with `NativeRouter` and add routes to `Main.jsx` file. <br>

**Form state management** <br>
Form implementation relies heavily on state management. `useState` can be good enough for small forms, but for more complex forms state management can quite tedious --> `Formik` to the rescue. Formik's main concepts are: `context` and `fields`. The formik context is provided by the `Formik` component that contains the form's state. It contains info of form fields, like value and validation errors. State's fields can be referenced by their name using `useField` hook or `Field` component.
Initial values for fields are provided to `initalValues` prop as object, with fieldnames as keys and inital values as values. Submit callback is provided through `onSubmit` prop. It gets called when `handleSubmit` function is called **and** there are NO validation errors. <br>
`useField` hook has one argument: name of the field and returns an array with three values: <br>
`[field, meta, helpers]`. <br>

- _field_ object contains the value of the field.
- _meta_ object contains field meta info like possible error message.
- _helpers_ object contains actions for changing the sate of the field, like _setValue_ function.

**Note**: the component that uses `useField` hook has to be **withtin** Formik's context. In other words, the component has to be a descendant of the Formik component. <br>

Using `useField` hook for multiple text fields in a form causes repetitive code, which can be extracted into a separate component to create a custome TextInput component:

```javascript
import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
```

```javascript
import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
```

The `TextInput` let's you reuse your styled TextInput field, while the `FormikTextInput` creates formik bindings in a reusable component, to prevent repetitive code. The `FormikTextInput` can be used inside a component like this:

```javascript
<FormikTextInput name="mass" placeholder="Weight (kg)" />
```

**Form Validation** <br>
Formik has two ways to handle form validation:

- validation function
- validation schema

_Validation function_ is a function provided for formik components as the value of the `validate` prop. It takes in form values as a argument and returns an object containing possible field specific error messages. <br>
A _validation schema_ can be created with a validation library `Yup`, and is provided for Formik components as value of `validationSchema` prop. <br>
By default validation is done when a field's value changes and when `handleSubmit` function is called. If validation fails, the function provided for `onSubmit` prop of Formik component is not called. You can also choose to display an error only when a field is touched (received and lost focus):

```javascript
const showErrror = meta.touched && meta.error;
```

**Platform specific code** <br>
The user's platform can be accessed through `Platform.OS` constant, which can be 'android' or 'ios'. You can also use `Platform.select`, which will return the most fitting platform the user is currently running on, choosing from 'ios', 'android', 'native' and 'default'. You can use these to implement platform specific styling. If you want to use platform specific components you could use `Platform.select` or just use `.ios.jsx` or `.android.jsx` file extensions. <br>

### Exercises c. Communicating with the server

In this part data will be fetched from a server. The server can be found in this repository: https://github.com/fullstack-hy2020/rate-repository-api Follow the instructions in the README to setup the server. <br>
To start the Expo app on mobile device: <br>
Copy the content of `.env.template` file to `.env` file in the root directory, change the ip-address, and run the command: <br>
`npm start` and open the Expo app on your mobile and scan the QR code. <br>

Exercise 10.11. <br>
Exercise 10.11: fetching repositories with Apollo Client <br>
We want to replace the Fetch API implementation in the useRepositories hook with a GraphQL query. Open the GraphQL Playground at http://localhost:5000/graphql and open the documentation by clicking the docs tab. Look up the repositories query. The query has some arguments, however, all of these are optional so you don't need to specify them. In the GraphQL Playground form a query for fetching the repositories with the fields you are currently displaying in the application. The result will be paginated and it contains the up to first 30 results by default. For now, you can ignore the pagination entirely.

Once the query is working in the GraphQL Playground, use it to replace the Fetch API implementation in the useRepositories hook. This can be achieved using the useQuery hook. The gql template literal tag can be imported from the Apollo Boost as instructed earlier. Consider using the structure recommended earlier for the GraphQL related code. To avoid future caching issues, use the cache-and-network fetch policy in the query. It can be used with the useQuery hook like this:

```javascript
useQuery(MY_QUERY, {
  fetchPolicy: "cache-and-network",
  // Other options
});
```

The changes in the useRepositories hook should not affect the RepositoryList component in any way. <br>

Exercise 10.12. <br>
Exercise 10.12: environment variables <br>
Instead of the hardcoded Apollo Server's URL, use an environment variable defined in the .env file when initializing the Apollo Client. You can name the variable for example APOLLO_URI. <br>

Note: My `.env` file is in `.gitignore`. Copy the content of `.env.template` file to `.env` file, and change the ip-address.
