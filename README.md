# To-do list application in React

## Part 2: Functional specifications

- When a user clicks on the + button, show a text input at the end of the list which can be editable, and hide the +button.
- Once text input is visible, If the user types and presses enter key, a new item should be added to the end of the list.
- Once text input is visible, If the user types nothing and presses enter key, give an error to enter something.
- Once text input is visible, If the user presses the Esc key, hide the text input and show back the + button again.
- The list should be scrollable but the date and time should be sticky at the top of the list.
- The list items created on a day should be available all the time, for the same day, and should not get removed on reloading. But if the user opens the list the next day, it should get reset with no items.

## 🚀 Live Demonstraion

- [Todo-List](https://todo-list-with-functionality.netlify.app/)

## Setup Project Environment

- install all packages

  > ` npm install` :

- write below command
  > `npm run dev` : Start project on default Port
  >
  > - running npm run dev will start a development server that serves the Vite application and watches for changes to the code.
  > - Specifically, npm run dev will run the vite command with the --mode development option, which starts a development server that uses the Vite build tool to serve the application.
  > - As you make changes to the code, Vite will detect those changes and automatically rebuild and reload the application in the browser. Vite uses a fast and efficient development server that leverages browser-native ES modules to avoid expensive transpilation and bundling steps during development, which makes it faster and more responsive than many other development servers.

## External packages used in this project

- `react-toastify`: [React-Toastify](https://fkhadra.github.io/react-toastify/introduction) is one of the top React toast libraries available. This tool allows you to add toast notifications to your application with ease and can also be used to set notifications and alerts.
- `short-uuid` : Generate and translate standard UUIDs into shorter - or just different - formats and back.

## Difference between dependencies & devDependencies

| dependencies                                                            | devDependencies                                                                                                                             |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Includes packages required for the application to run in production.    | Includes packages required during development, but not during production.                                                                   |
| Installed when the application is deployed to a production environment. | Typically used for development tools, testing libraries, or other utilities that are not required for the application to run in production. |
| Examples: `react`, `react-dom`, `axios`.                                | Examples: `babel`, `eslint`, `jest`.                                                                                                        |
