# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

 
## Phase 1 Requirements

> In Phase 1, we’re going to perform some refactoring of a Todo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

   - [ ] Create a Detailed UML.
   - [x] Properly modularize the application into separate components, note the proposed file structure below.
  - [ ] Implement the Context API to make some basic application settings available to components.
      - [x] Show three items by default.
      - [x] Hide completed items by default.
      - [x] Add the sort word ‘difficulty’ by default.


### Technical Requirements / Notes

> Create a settings Context component that can define how our components should display elements to the User.

1. Implement the React context API for defining settings across the entire application.
      - [x] Create React Context for managing application display settings and provide - [x] this at the application level.
      - [ ] Add the following defaults to the context provider’s state, they will not be changeable in this lab.
        - [x] Display three items.
        - [x] Hide completed items using a boolean.
        - [x] Define “difficulty” as a default sort word to optionally use in the stretch goal.
2. Consume and utilize context values throughout your components.
      - [x] Show a maximum of three items per screen by default in the <List /> component.
      - [x] Use the Mantine <Pagination /> component to allow users to navigate a list of items.
      - [x] Hide completed items in the list by default (the ability to show will be added in a later lab).



3. Implement the Context API to make some basic application settings available to components.
      - [ ] How many To Do Items to show at once.
      - [ ] Whether or not to show completed items.
        Hint: if reusing the custom useForm() hook, event validation may be necessary if using any Mantine component other than `<TextInput />`.
4. Provide the users with a form where they can change the values for those settings.
        This should be given in the form of a new component, perhaps linked to from the main navigation.
        
        Hint: Use Browser Router to create the page/route/component for this.
        Once settings are updated, render the updated settings to the right of the “form”. Consider using <Grid />, <Card />, and <When /> components.
5. Save the users choices in Local Storage.
6. Retrieve their preferences from Local Storage and apply them to the application on startup.
