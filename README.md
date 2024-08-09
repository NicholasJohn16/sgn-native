# Welcome to SGN-Native

SGN Native is built with [React Native](https://reactnative.dev/) with [Expo](https://docs.expo.dev/).

* [Gluestack](https://gluestack.io/ui/docs/components/all-components)
    * high quality component library
* [NativeWind](https://www.nativewind.dev/v4/overview/) 
    * utility first styling library
* [TanStack Query](https://tanstack.com/query/latest).
    * state management library

## Usage

The app currently consists of three main parts, Dashboard, Notes and People.

The Dashboard displays a list of activities that have occurred on our API.
This feed is generated based on who the current user is following. Some activities, such as tasks, are not currently fully implemented.

![animated example of how to use the composer to post a note](./composer.gif)

Notes can be created using the Composer above the activity feed. This will 
post the Note to your profile where others can interact with it. Posting 
a note will automatically trigger a refresh of the activity feed and you'll
be able to see your note below.

![example of a note created activity in the feed](./note-example.png)

Clicking on "note" in the activity title will take you to the Note's page.
Here you can edit, reply with a comment and delete the note.

## Versions

This app was developed with using the below versioning. It should function
correctly with newer versions.

| Binary | Version |
| --- | --- |
| Node | 18.17.0 |
| npm | 9.6.7 |

## Installation  

Execute the below commands to install the application.

1. `git clone git@github.com:NicholasJohn16/sgn-native.git`

2. `cd sgn-native`

3. `npm install --legacy-peer-deps`

4. If on Windows, `node .\scripts\nativewind-fix.js`

    * This should print `'NativeWind fix applied successfully!'` to the console when completed.

5. `npx expo start -c`

This should display the command dashboard. With the terminal selected,
press `w` to launch the app in your default browser. NativeWind will 
first compile the css and the the app will build. It will automatically
launch when the build is complete.

![screenshot of the command dashboard showing the QR code and options](./command-windows.png)

> [!CAUTION]
> Due to CORS, **the app must be served at `localhost:8081`**.
> The API host is configured to respond with the correct CORS headers only
> to this address. Authentication and access to the API will not be possible otherwise.

As well, the authentication system is cookie based so cookies, including
third party cookies, will need to be enabled to access the API.

Dark mode has not been fully implemented yet and the app defaults to your browser settings. If your system or browser is set to dark mode, it
may be necessary to switch it to light mode to test the app in its current state.

### Android App

If you'd like to try the Android app, please follow [these instructions](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical)
on configuring your development environment. It is not current possible
to build for an iOS device.

#### Expo Go app

If you want to use the Expo Go app to demo the application, you must 
press `j` in the command dashboard to switch to a Expo Go build.

## Directory structure

The structure is highly based on the recommendations for [Bulletproof React]( https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md).

| Folder | Purpose |
| ---  | --- |
| /api | API wrapper |
| /app | routing and page layouts
| /components/core | components that handle functions throughout app |
| /components/helpers | helper functions that adjust strings and dates |
| /components/ui | imported components from Gluestack UI
| /features | app specific code
| /hooks | custom hooks for all app

## Feature List

| Feature | Location | Info |
| --- | --- | --- |
| Media Queries | /assets/global.css | Makes the InfiniteScroll components with responsive to screen size |
| Flexbox | /core/actor/SocialStats/index.jsx | React Native uses Flexbox by default. VStack and HStack components are flexbox wrappers that automatically arrange elements as needed. |
| Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app. | /features/todos/data.js <br> /features/todos/component/PrioritySelector.jsx | Task priorities are stored in the data.js file and loaded into a select list.
| Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved). | /features/notes/components/Composer.jsx | Regex checks that the input value is not whitespace and prevents submission if it is. |
| Analyze text and display useful information about it. (e.g. word/character count in an input field) | /features/notes/components/Composer.jsx | Shows character count to the bottom left of textarea input |
| Create a function that accepts two or more input parameters and returns a value that is calculated or determined by the inputs. | /features/notes/components/Composer.jsx<br>/components/helpers/truncate/index.jsx | React Components are functions, that take in many inputs and return the HTML as a result. |
| Create 3 or more unit tests for your application (and document how to run them) | `npm run storybook` then press `w` at the prompt | Storybook is a component development environment meant for isolation testing |
| Retrieve data from a third-party API and use it to display something within your app. | /api<br>/app/(app)/index.jsx | /api contains an API wrapper which is ues in /app pages to load data in several locations |
| Persist data to an external API and make the stored data accessible in your app | /features/notes/components/Composer.jsx<br>/app/(app)/notes/index.jsx | Composer.jsx components create forms that are used to post data to the API. app/index files then display that data.
| Interact with a database to store and retrieve information (e.g. MySQL, MongoDB, etc). | | Remote server uses MySQL |
| Implement modern interactive UI features (e.g. table/data sorting, autocomplete, drag-and-drop, calendar-date-picker, etc). | /components/core/InfiniteScroll/index.jsx | Implements a infinite scroll with skeletons on a loading indicator at bottom of list |
| Develop your project using a common JavaScript framework such as React, Angular, or Vue. | | App written in React Native |