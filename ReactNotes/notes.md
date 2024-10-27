## ReactJS Notes

- ### React is a JS Library.
- ### A JS library for building user interfaces.
- ### Used to build Single Page Applications
  - ### A single-page website is a type of web design where all the content is displayed on a single, scrollable page. Unlike multi-page websites, which have separate pages for different sections (like "About," "Services," or "Contact"), single-page sites organize all these sections into one continuous layout.
- ### Build User Interface from Components.
---
### Virtual DOM vs Real DOM
#### [Read About Virtual DOM/ Real DOM](./data/pdfs/RealDOMVirtualDOM.pdf)
---

### 1. In React there are ***two*** types of components

- ### *Class based components*

- ### *Function based components*

---

### 2. While rendering a list from an array in jsx we need to provide a unique *key* for each *li* tag. For example

```jsx
const dummyProductData = ["Product1", "Product2", "Product3"]

function ProductList(){
    return(
        <div>
            <h2>E-Commerce Website</h2>
            <ul>
                {
                    dummyProductData.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    );
}
```

### The key tag inside li tag keep the track of index of the array

---

### **3. Interview Question:** Why should not we keep indexes as the keys for li tag??

### Ans: Using indexes as keys in React's list rendering is generally discouraged because it can lead to performance issues and bugs, especially when the list is dynamic (items are added, removed, or reordered). Here’s why

- ### **1. Incorrect DOM Reconciliation:** React uses keys to determine which elements in a list have changed, been added, or been removed. If you use indexes as keys

    - ### When the list changes (e.g., items are inserted or deleted), React may not correctly identify which items have changed.

    - ### React may incorrectly reuse the DOM elements associated with the wrong data. This can result in incorrect behavior, like maintaining state or DOM properties for the wrong item.

  ### **Example:** Imagine a list of items

    ```jsx
    ["Apple", "Banana", "Cherry"];
    ```

  ### If you delete "Banana", the index of "Cherry" changes from 2 to 1. If you use the index as the key, React might reuse the DOM element that was associated with "Banana" for "Cherry", causing incorrect data to display or mismatched states.

- ### **2. Performance Optimization Issues:** Keys allow React to efficiently update the DOM by only re-rendering elements that have changed. If you use indexes as keys, React has no way of distinguishing between items that are actually different and items that have simply shifted position. This can cause React to unnecessarily re-render large parts of the UI when it could have skipped parts.

  ### **Example:** If you add an item to the beginning of the list, all subsequent items will get new index keys, which forces React to re-render the entire list, even though most items are the same.

- ### **3. Preserving Component State:** Components that rely on internal state (like input fields or toggles) will lose their state when their index changes. React associates the state with the key, so if the key changes, the state is reset.

  ### Example: If you have a list of input fields with indexes as keys, reordering or adding a new input could reset the content of all the inputs because the keys (indexes) would no longer match.


### **When is it okay to use indexes as keys?**

- ### When the list is static and will never change (i.e., no new items will be added, removed, or reordered).

- ### When the list is short and performance is not a concern.
---
### **3.1 Interview Question:** Why Functional Components are Preferred Over Class-Based Components

### Class-based components in React were the primary way of creating components before functional components became more powerful with the introduction of **React Hooks** in React 16.8. Since then, functional components have become more preferred due to several advantages. Here’s why functional components are often preferred over class-based components:

### 1. **Simplicity and Readability**
- ### **Functional components** are much simpler and easier to read. They are essentially JavaScript functions, which makes them easier to understand and use.
- ### **Class-based components** can be more complex because they require the use of lifecycle methods (like `componentDidMount`, `componentDidUpdate`, etc.), `this` keyword, and binding event handlers.

### 2. **Hooks for Managing State and Side Effects**
- ### With **React Hooks** (like `useState`, `useEffect`, etc.), functional components can now handle state, side effects, and more. This makes functional components just as powerful as class components but in a more concise way.
- ### **Class-based components** require lifecycle methods to manage state and side effects, which can make the code more verbose and harder to follow.

### 3. **Performance**
- ### **Functional components** are typically lighter and more efficient because they don’t involve the overhead of managing `this` and lifecycle methods.
- ### **Class-based components** are slightly heavier because of the need to manage the class instance and the `this` context.

### 4. **No `this` Keyword**
- ### In **functional components**, you don’t need to deal with the confusing `this` keyword. This avoids common bugs related to the binding of event handlers in class components.
- ### **Class-based components** require developers to frequently bind `this` or use arrow functions to avoid losing context, which can be confusing for beginners.

### 5. **Cleaner Code with Custom Hooks**
- ### **Functional components** allow for more modular and reusable logic with **custom hooks**. This makes it easier to extract logic into reusable functions that can be shared across components.
- ### **Class-based components** don’t have a built-in equivalent to hooks, making code reuse more difficult.

### 6. **Future-Proofing**
- ### **Functional components** are the recommended way of writing React components in modern React development. They are more aligned with the direction React is headed in, especially with the continued improvements and additions to React Hooks.
- ### **Class-based components** are still supported but are less emphasized in modern React documentation and best practices.

### 7. **Less Boilerplate Code**
- ### **Functional components** require less code to set up compared to class components. There's no need to write a constructor or lifecycle methods, reducing the amount of boilerplate code.
- ### **Class-based components** typically need constructors and other boilerplate, making them more verbose.

### Conclusion
### Functional components are generally preferred because they provide a more concise, readable, and efficient way to create components, especially with the power of React Hooks. They simplify code maintenance and are more aligned with modern React development practices, making class-based components less favorable in most cases.

---
### 4. **Props** : Props are used to pass data from one component to another component. 

```jsx
const dummyProductData = ["Product1", "Product2", "Product3"];

function App() {

  return (
    <div>
      <h1>Live Project Using ReactJS</h1>
      {/* <ClassBasedComponents/>
      <FunctionalComponent/> */}
      <ProductList dummyProductData={dummyProductData} name="Vihan Anand" city="Gorakhpur"/>
    </div>
  )
}
```
### Here in "dummyProductData={dummyProductData}" the variable before = is the key name which will be used to access the data in the other component and the variable inside {} is the actual name which is present in the component as in "const dummyProductData = ["Product1", "Product2", "Product3"]". Props named "name" and "city" is also passed to product-list.jsx.
---

### 5. Styling in ReactJS: 

### Styling in react can be done in 2 ways:

  - ### Using normal ".css" files
  - ### Using normal ".module.css" files
  - ### Using inline css
  - ### Using CSS frameworks

### <u>*Using ".css" files*</u>

### We can create ".css" files and import it inside the components to use it. We can give an HTML tag a class using ***className*** attribute. ***className*** attribute is used because ***class*** word is already used by the JS compiler for the class-based components so to prevent the conflict we use different name.

### <u>*Using ".module.css" files*</u>

### We can create ".module.css" files. These are not basically css files but css modules in which we can give multiple css styling for different components and then import it in jsx file and use for different components.

### <u>*Using inline css*</u>

```jsx
<p style={{padding: "20px", border: "2px solid red"}} className={styles.productTitle}>{singleProductItem}</p>
```
### The CSS properties given in style are all applied on the p tag

### <u>*Using css frameworks*</u>

### We can use CSS frameworks like [TailwindCSS](https://tailwindcss.com/docs/guides/vite) and [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/vite/)
---
### **6. Rendering a block on particular condition(Using ternary Operator[?:])**

```jsx
function renderTextBlock(getFlag){
    return getFlag ? (<h1 className='text-5xl font-bold mt-10 text-white'>Live Project Using ReactJS</h1>) : 
    (<h1 className='text-5xl font-bold mt-10 text-white'>Live Project Using CSS</h1>)
}
```

### If getFlag == true then "Live Project Using ReactJS" will be rendered otherwise "Liver Project Using CSS" is rendered. Here we have created a seperate function for rendering but we can directly recieve it inside a variable and use it directly like,

```jsx  
const renderTextBlock = getFlag ? (<h1 className='text-5xl font-bold mt-10 text-white'>Live Project Using ReactJS</h1>) : (<h1 className='text-5xl font-bold mt-10 text-white'>Live Project Using CSS</h1>)
}
```
---
### **7. State Management**

### Class based components have a way to manage state by which we can toggle the state of any component

```jsx

import { Component } from "react";

class ClassBasedComponents extends Component {

    state = {
        showText: false,
    };

    handleClick = ()=>{
        this.setState({
            showText: !this.state.showText,
        }) {/*"this" is used to give a instance to a particular object*/}
    }

    render(){
        return(
            <div className='flex flex-col justify-center items-center'>
                {
                    this.state.showText ? (<h3 className='text-white text-3xl font-bold'>Class Based Component</h3>) : null
                }
                <button onClick={this.handleClick} className='border-2 mb-10 mt-8 rounded-2xl text-white p-3'>Click Me!</button>
            </div>
        );
    }
}

export default ClassBasedComponents;
```

### "state" is used store the current state of the component. "handleClick" is used to handle the event that is click of the mouse on which the state of component will toggle like here it is changing from "false" to "true". "handleClick" is created with arrow function because if we would have created normal JS function without arrow function we would have to bind it to the class using constructor
---
