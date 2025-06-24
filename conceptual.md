### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It is used to create fast, interactive, and dynamic user experiences through a component-based architecture. Developers use React when they need to build complex UIs that respond efficiently to user interactions and changes in data.


- What is Babel?

Babel is a JavaScript compiler that allows developers to write modern JavaScript (including JSX syntax) and have it transformed into backward-compatible JavaScript that can run in older browsers.


- What is JSX?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript used in React that looks similar to HTML. JSX allows developers to write markup directly in their JavaScript code, making it easier to define the structure of the user interface.


- How is a Component created in React?

In React, a component can be created either as a function or as a class. A functional component is a plain JavaScript function that returns JSX. A class component is a JavaScript class that extends React.Component and has a render() method that returns JSX.


- What are some difference between state and props?

Props are used to pass data from a parent component to a child component and are read-only, meaning the child cannot modify them. State, on the other hand, is a way for a component to manage its own internal data that can change over time. While props are set externally, state is managed within the component itself.


- What does "downward data flow" refer to in React?

"Downward data flow" in React refers to the principle that data flows in one direction, from parent components down to child components through props. This helps maintain predictable data management and makes debugging easier.


- What is a controlled component?

A controlled component is a form element in React (like an input or select) whose value is controlled by React state. The component updates its state based on user input, and the state determines what is displayed in the UI.


- What is an uncontrolled component?

An uncontrolled component is a form element that maintains its own internal state and is not directly controlled by React. Instead of using state, you access the form value using a ref to read the value from the DOM.


- What is the purpose of the `key` prop when rendering a list of components?

The key prop is used by React to uniquely identify elements in a list. This helps React efficiently update the list when items change, by determining which elements have been added, removed, or changed.


- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using an array index as a key is discouraged because it can lead to rendering issues, especially when items in the list are added, removed, or reordered. React may reuse incorrect DOM elements, causing bugs or unexpected behavior.


- Describe useEffect.  What use cases is it used for in React components?

The useEffect hook is used to perform side effects in React functional components, such as fetching data, setting up event listeners, or interacting with the DOM. It can also be used for cleanup by returning a function from the effect. The hook runs after the component renders and can be controlled with a dependency array.


- What does useRef do?  Does a change to a ref value cause a rerender of a component?

The useRef hook creates a mutable object that persists across renders. It is often used to reference DOM elements or store values that should not trigger a re-render when changed. Updating a useRef value does not cause the component to re-render.


- When would you use a ref? When wouldn't you use one?

You would use a ref when you need to directly access a DOM element (like focusing an input) or store a value that persists without causing re-renders. You should avoid using refs for data that affects the visual output or needs to trigger re-renders, as state is more appropriate for that purpose.


- What is a custom hook in React? When would you want to write one?

A custom hook is a reusable function that uses one or more React hooks to encapsulate logic. You would write a custom hook when you need to share complex logic (like fetching data or handling form inputs) across multiple components, helping to keep your code clean and maintainable.