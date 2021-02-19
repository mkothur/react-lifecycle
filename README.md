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
![All lifecycle](./assets/lifecylce-methods_2.jpg)

## Common React Lifecycle Methods

### Mounting

The mounting means to put elements into the DOM. React uses virtual DOM to put all the elements into the memory. It has four built-in methods to mount a component namely

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()

#### 1. constructor()

**constructor** method is called when the component is initiated and it’s the best place to initialize our state. The constructor method takes **props** as an argument and starts by calling **super(props)** before anything else. See src/components/Counter.js

```
    class Cunstructor extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            name: "cunstructor() method example"
            };
        }
        render() {
            return (
            <div>
                <h4> 1. This is a {this.state.name}</h4>
            </div>
            );
        }
    }
```

Here **name** is our initial state inside our constructor method and then we are calling our initial state to **render** method using **this.state.name**. The following code will output `This is a Constructor Method` .

#### 3. render()

The render() method is the most used lifecycle method. You will see it in all React classes. This is because render() is the only required method within a class component in React.

As the name suggests it handles the rendering of your component to the UI. It happens during the mounting and updating of your component.

```
    class Hello extends Component{
        render(){
            return <div>Hello {this.props.name}</div>
        }
    }
```

As you can see in the example above, the render() method returns JSX that is displayed in the UI. A render() can also return a null if there is nothing to render for that component.

##### A _render()_ method has to be pure with no side-effects.

React requires that your render() is pure. Pure functions are those that do not have any side-effects and will always return the same output when the same inputs are passed. This means that you can not setState() within a render().

```
    You cannot modify the component state within the _render()_.
```

If you do need to modify state that would have to happen in the other lifecycle methods, therefore keeping render() pure.
