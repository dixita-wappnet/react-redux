# React-Redux

## What is React Redux?

- Redux is an open-source JavaScript library.
- Redux was inspired by Flux but it omitted the unnecessary complexity: it does not have Dispatcher concept, has a single Store and the Action objects is received and handled directly by Store in the Redux.
- Redux is used by ReactJS for building the user interface and to manage the application state.
- The official React binding for Redux is React Redux which is used to read data from a Redux Store, and dispatch Actions to the Store to update data.
- It also helps the apps to scale.

## Importance of React Redux 

- Being the official UI bindings for React Application, it is always kept up-to-date with any API changes.
- Good ‘React’ architecture is encouraged by React Redux.
- Many performance optimizations are implemented internally, to re-render components only when needed.

## Redux Architecture 

- here are three main components of Redux architecture.

### STORE:

- The entire state of an application lists at a place called Store. It acts as a brain and manages the status of the application. It also has a dispatch(action) function.

### ACTION:

- An action is a pure object which is sent or dispatched from the view. It is created to store information about the user’s event such as info about the type of action, the time of occurrence, the location of occurrence, info about its coordinates, and info about the state it aims to change.

### REDUCER:

- Reducer is a pure function which is used to return a new state from the initial state. It reads the payloads from the actions. The reducer then updates the store via the state accordingly.

## Why need to use Redux 

- When a JavaScript application grows big, it becomes difficult for the user to manage its state.
- Redux solves this problem by managing application's state with a single global object called store.
- Makes testing very easy.
- Consistency throughout the application.

## Redux Installation:

- To install Redux, React 16.8.3 or higher version is required and is a must.

### Command: To use Redux with React application.
```
$npm install redux react-redux –save
```
