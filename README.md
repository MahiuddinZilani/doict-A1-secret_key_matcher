# 1. What is ES6 and what are the new features introduced in ES6?
## Answer:
**ES6**, also known as ECMAScript 6 or ECMAScript 2015, is a significant update to the JavaScript programming language.

## New Features in ES6

1. **Let and Const Keywords**
2. **Arrow Functions**
3. **Template Literals**
4. **Destructuring**
5. **Default Parameters**
6. **Rest and Spread Operators**
7. **Classes**
8. **Modules**
9. **Promises**

# 2.What is Event Bubble and Event Delegation in JS?
## Answer:
## Event Bubbling

Event bubbling is a mechanism where an event starts at the most specific element (the target) and then flows upward through the DOM hierarchy to the least specific element.

### Example

**HTML**
```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```
**Javascript**
```javascript
const childButton = document.getElementById('child');
const parentDiv = document.getElementById('parent');

childButton.addEventListener('click', () => {
  console.log('Child button clicked');
});

parentDiv.addEventListener('click', () => {
  console.log('Parent div clicked');
});
```
If you click the button, both the childButton and parentDiv event handlers will be executed, with the child's handler firing first due to event bubbling.

## Event Delegation
Event delegation is a technique that leverages event bubbling to handle events on multiple elements efficiently. Instead of attaching event listeners to each individual element, you attach a single event listener to a parent element. When the event occurs on a child element, it bubbles up to the parent, and the parent's event handler can determine which child element was the target.   

### Example:
**HTML**
```HTML
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
**Javascript**

```JavaScript
const list = document.getElementById('list');

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(event.target.textContent + ' clicked');
  }
});
```

In this example, we've attached a click event listener to the ul element. When a li element is clicked, the event bubbles up to the ul, and we can check the event.target property to determine which li was clicked.

# 3. What is the difference between localstorage , session storage and cookies?
## Answer
These three mechanisms are used to store data on the client-side.
| Feature           | localstorage   |  session storage  |    cookies      |
| :---------------- | :----------:   |   :------------:  |:---------------:|
| Persistence       |  Long term     |   Session based   |  Customizable   |
| Scope             |All tabs/windows|Current tab/window |Domain/path-based|
| Capacity          | Large (5MB)    |     Large (5MB)   |   Small (4KB)   |
| Server Access     |      No        |      No           |       Yes       |
|Use Cace    |   Storing user preferences, application data, offline caching.|Temporary data storage, shopping cart information, form data.|Session management, user authentication, tracking user behavior, storing small pieces of data.|

# 4. In CSS what is the difference between display inline , display inline block and display block?
## Answer

The display property in CSS determines how an element is displayed on a page. It affects the element's layout and behavior.

### display: inline
- Behavior: Elements with display: inline are displayed in line with other content.
- Characteristics:
  - Doesn't start a new line.
  - Can't set width or height.   
  - Margins and padding only affect horizontal spacing.
   ### Example: span, a, img (by default)

### display: inline-block
- Behavior: Combines the characteristics of inline and block elements.
- Characteristics:
  - Elements are displayed inline but can be sized independently.   
  - Can set width and height.   
  - Margins and padding affect all sides.
  - Useful for creating horizontal layouts without using floats.
   
### display: block
- Behavior: Elements with display: block start on a new line and occupy the full width available.
- Characteristics:
  - Can set width, height, margins, and padding.
  - Example: div, p, h1 to h6

# 5. What are new features in CSS3?
## Answer
CSS3 introduced a vast array of features that significantly enhanced web design capabilities.
### 1. Advanced selectors
More advanced than CSS selectors, these provide a sequence of simple selectors for styling specific HTML elements.
### 2. Pseudo-elements
New pseudo-elements and the double colon (::) convention for easier and more detailed styling.
### 3. Border styling
New features like border-radius, border-image-slice, border-image-source, and values for "width stretch".
### 4. Background style properties
New properties like background-clip, background-size, background-style, and background-origin.
### 5. CSS nesting
Eliminates the need to repeatedly specify the parent selector, making the codebase more readable.
### 6. Flexbox
A new layout that makes it easier to arrange elements on a page in a way that works across different screen sizes, resolutions, and devices
Multiple backgrounds and gradients.
Allows creators to stack different pictures as backgrounds of a component, and move and animate each layer.
### 7. Box-shadow
A new way to add drop shadow effects to a style sheet without using Photoshop.
### 8. Transitions
Allows for animation without adding JavaScript code.
### 9. Media queries
A technique to help define screen breakpoints for styling and laying out website design elements for different screen sizes.
