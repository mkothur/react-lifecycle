# react-lifecycle methods

```
React lifecycle methods as the series of events that happen from the birth of a React component to its death.

```

Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

- Mounting – Birth of your component
- Update – Growth of your component
- Unmount – Death of your component

As everything goes through a cycle of taking birth, growing, and death the same goes with React. Each component in React has a lifecycle that goes through three main phases Mounting, Updating, and Unmounting.

The react lifecycle method is used in the React class component. It helps us in creating our state and mutating them.

![Common lifecycles](./assets/lifecycle-methods.jpg)
![All lifecycle](./assets/lifecycle-methods_2.jpg)

## Common React Lifecycle Methods

### Mounting

The mounting means to put elements into the DOM. React uses virtual DOM to put all the elements into the memory. It has four built-in methods to mount a component namely

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()

#### 1.constructor()

**constructor** method is called when the component is initiated and it’s the best place to initialize our state. The constructor method takes **props** as an argument and starts by calling **super(props)** before anything else.
